import { NextResponse } from 'next/server'

import { sendBirthdayEmails } from '@/src/lib/birthday'

/**
 * Envoi automatique des voeux d'anniversaire.
 *
 * Planifié dans vercel.json. Le comportement (activation, ciblage
 * cotisation, textes) se règle dans content/birthday.json, sans toucher
 * au code.
 *
 * Paramètre `?date=AAAA-MM-JJ` pour rejouer un jour donné.
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET

  if (secret) {
    const auth = request.headers.get('authorization')
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json(
        { ok: false, error: 'unauthorized' },
        { status: 401 },
      )
    }
  }

  try {
    const url = new URL(request.url)
    const dateParam = url.searchParams.get('date')

    let reference = new Date()
    if (dateParam) {
      const parsed = new Date(`${dateParam}T12:00:00`)
      if (Number.isNaN(parsed.getTime())) {
        return NextResponse.json(
          { ok: false, error: 'date invalide, format attendu AAAA-MM-JJ' },
          { status: 400 },
        )
      }
      reference = parsed
    }

    const { config, candidates, results } = await sendBirthdayEmails(reference)

    const sent = results.filter((result) => result.status === 'sent').length
    const failed = results.filter((result) => result.status === 'failed').length

    console.log(
      `[birthday] ${reference.toISOString().slice(0, 10)} — ` +
        `${candidates.length} anniversaire(s), ${sent} envoyé(s), ${failed} échec(s)`,
    )

    return NextResponse.json({
      ok: failed === 0,
      date: reference.toISOString().slice(0, 10),
      enabled: config.enabled,
      dryRun: config.dryRun,
      audience: config.audience,
      candidates: candidates.map((member) => ({
        id: member.id,
        firstName: member.first_name,
        email: member.email,
        cotisation: member.cotisation,
      })),
      results,
      summary: { total: candidates.length, sent, failed },
    })
  } catch (error: any) {
    console.error('[birthday] erreur', error)
    return NextResponse.json(
      { ok: false, error: error?.message ?? 'erreur inconnue' },
      { status: 500 },
    )
  }
}
