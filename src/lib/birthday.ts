import birthdayConfig from '@/content/birthday.json'

import { birthdayEmail } from '@/src/lib/mails/birthday'
import supabase from 'backend/config/dbConnect'

export type BirthdayAudience =
  | 'all'
  | 'paid'
  | 'unpaid'

export type BirthdayConfig = {
  enabled: boolean
  dryRun: boolean
  audience: BirthdayAudience
  text: {
    subject: string
    title: string
    greeting: string
    body: string[]
    signature: string
  }
}

export type BirthdayMember = {
  id: number
  first_name: string | null
  last_name: string | null
  email: string | null
  cotisation: boolean | null
  birth_date: string | null
}

export type BirthdaySendResult = {
  memberId: number
  email: string
  firstName: string
  status: 'sent' | 'failed' | 'skipped'
  reason?: string
}

const config = birthdayConfig as BirthdayConfig

export function getBirthdayConfig(): BirthdayConfig {
  return config
}

/** Remplace les jetons {{...}} par les valeurs du membre. */
export function renderText(template: string, member: BirthdayMember): string {
  return template
    .replace(/\{\{\s*firstName\s*\}\}/gi, member.first_name ?? '')
    .replace(/\{\{\s*lastName\s*\}\}/gi, member.last_name ?? '')
    .replace(/\{\{\s*email\s*\}\}/gi, member.email ?? '')
    .trim()
}

/** Un membre correspond-il au public configuré ? */
export function matchesAudience(
  member: BirthdayMember,
  audience: BirthdayAudience,
): boolean {
  if (audience === 'paid') return member.cotisation === true
  if (audience === 'unpaid') return member.cotisation !== true
  return true
}

/**
 * Anniversaires du jour (mois + jour), sans tenir compte de l'année.
 * On filtre côté JS : comparer un jour/mois sur une colonne date demande
 * un cast que PostgREST n'expose pas directement.
 */
export function isBirthdayToday(
  birthDate: string | null,
  reference: Date = new Date(),
): boolean {
  if (!birthDate) return false

  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(birthDate)
  if (!match) return false

  const [, , month, day] = match
  const refMonth = String(reference.getMonth() + 1).padStart(2, '0')
  const refDay = String(reference.getDate()).padStart(2, '0')

  return month === refMonth && day === refDay
}

async function sendViaMailApi(payload: {
  to: string
  subject: string
  html: string
  text: string
}): Promise<{ ok: boolean; error?: string }> {
  const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL
  if (!baseUrl) return { ok: false, error: 'NEXT_PUBLIC_CLIENT_URL manquant' }

  try {
    const response = await fetch(`${baseUrl}/api/mail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ from: 'birthday', ...payload }),
    })

    if (response.status === 200) return { ok: true }

    return { ok: false, error: `HTTP ${response.status}` }
  } catch (error: any) {
    return { ok: false, error: error?.message ?? 'erreur réseau' }
  }
}

/**
 * Envoie les voeux d'anniversaire aux membres concernés.
 *
 * @param reference date de référence (permet de rejouer un jour donné)
 */
export async function sendBirthdayEmails(
  reference: Date = new Date(),
): Promise<{
  config: BirthdayConfig
  candidates: BirthdayMember[]
  results: BirthdaySendResult[]
}> {
  const cfg = getBirthdayConfig()

  if (!cfg.enabled) {
    return { config: cfg, candidates: [], results: [] }
  }

  const { data, error } = await supabase
    .from('members')
    .select('id, first_name, last_name, email, cotisation, birth_date')

  if (error) {
    throw new Error(`Lecture des membres impossible : ${error.message}`)
  }

  const candidates = ((data ?? []) as BirthdayMember[]).filter(
    (member) =>
      isBirthdayToday(member.birth_date, reference) &&
      matchesAudience(member, cfg.audience) &&
      Boolean(member.email),
  )

  const results: BirthdaySendResult[] = []

  for (const member of candidates) {
    const email = member.email as string
    const firstName = member.first_name ?? ''

    if (cfg.dryRun) {
      results.push({
        memberId: member.id,
        email,
        firstName,
        status: 'skipped',
        reason: 'dryRun actif',
      })
      continue
    }

    const html = birthdayEmail({
      firstName,
      title: renderText(cfg.text.title, member),
      greeting: renderText(cfg.text.greeting, member),
      paragraphs: cfg.text.body.map((line) => renderText(line, member)),
      signature: renderText(cfg.text.signature, member),
    })

    const text = [
      renderText(cfg.text.greeting, member),
      '',
      ...cfg.text.body.map((line) => renderText(line, member)),
      '',
      renderText(cfg.text.signature, member),
    ].join('\n')

    const sendResult = await sendViaMailApi({
      to: email,
      subject: renderText(cfg.text.subject, member),
      html,
      text,
    })

    results.push({
      memberId: member.id,
      email,
      firstName,
      status: sendResult.ok ? 'sent' : 'failed',
      reason: sendResult.error,
    })
  }

  return { config: cfg, candidates, results }
}
