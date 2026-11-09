import { NextResponse } from 'next/server'

import supabase from 'backend/config/dbConnect'

/**
 * Keep-alive Supabase (plan gratuit).
 *
 * Un projet gratuit est mis en pause après ~7 jours sans activité base.
 * Un simple SELECT suffit : c'est une vraie requête Postgres, donc elle
 * compte comme activité. Inutile d'insérer puis supprimer une ligne.
 *
 * Déclenché par le cron Vercel défini dans vercel.json.
 * Protection : si CRON_SECRET est défini, l'en-tête Authorization doit
 * correspondre (Vercel l'ajoute automatiquement).
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET

  if (secret) {
    const auth = request.headers.get('authorization')
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
    }
  }

  const startedAt = Date.now()

  // Deux lectures légères sur des tables existantes : garantit que la
  // requête atteint réellement Postgres (un cache ne suffirait pas).
  const { data: members, error: membersError } = await supabase
    .from('members')
    .select('id')
    .order('id', { ascending: false })
    .limit(1)

  if (membersError) {
    console.error('keep-alive: échec lecture members', membersError)
    return NextResponse.json(
      { ok: false, error: membersError.message },
      { status: 500 },
    )
  }

  const { error: carsError } = await supabase
    .from('cars')
    .select('id')
    .limit(1)

  if (carsError) {
    console.error('keep-alive: échec lecture cars', carsError)
    return NextResponse.json(
      { ok: false, error: carsError.message },
      { status: 500 },
    )
  }

  return NextResponse.json({
    ok: true,
    lastMemberId: members?.[0]?.id ?? null,
    durationMs: Date.now() - startedAt,
    at: new Date().toISOString(),
  })
}
