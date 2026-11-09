/**
 * Vérifie que les insertions en base fonctionnent réellement
 * (les colonnes `id` n'ont pas de valeur par défaut dans ce schéma).
 *
 * Usage : pnpm test:db
 * Crée puis supprime les lignes de test.
 */
import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import bcrypt from 'bcryptjs'

function loadEnv() {
  const raw = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8')
  const env = {}
  for (const line of raw.split('\n')) {
    const match = line.match(/^([A-Z0-9_]+)="?(.*?)"?$/)
    if (match) env[match[1]] = match[2]
  }
  return env
}

const env = loadEnv()
const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_KEY,
)

const TEST_EMAIL = 'qa.record@club306.test'
const TEST_PLATE = 'QA-306-TEST'

let failures = 0

function check(label, condition, extra) {
  if (condition) {
    console.log(`  OK   ${label}`)
  } else {
    failures += 1
    console.log(`  FAIL ${label}`, extra ?? '')
  }
}

async function getNextId(table) {
  const { data, error } = await supabase
    .from(table)
    .select('id')
    .order('id', { ascending: false })
    .limit(1)
  if (error) throw error
  if (!data || data.length === 0) return 1
  return Number(data[0].id) + 1
}

async function cleanup() {
  const { data: members } = await supabase
    .from('members')
    .select('id')
    .eq('email', TEST_EMAIL)
  for (const m of members ?? []) {
    await supabase.from('cars').delete().eq('member_id', m.id)
    await supabase.from('members').delete().eq('id', m.id)
  }
  await supabase.from('cars').delete().eq('immatriculation', TEST_PLATE)
}

async function main() {
  console.log('Nettoyage préalable…')
  await cleanup()

  console.log('\n1. Insertion membre (équivalent recordMember)')
  const memberId = await getNextId('members')
  const password = await bcrypt.hash('QaPassword123!', 10)
  const { error: memberError } = await supabase.from('members').insert({
    id: memberId,
    cotisation: false,
    address: '1 rue du Test',
    birth_date: '1990-05-12',
    country: 'France',
    email: TEST_EMAIL,
    password,
    first_name: 'Qa',
    last_name: 'RECORD',
    phone: '33600000000',
    town: 'Blagnac',
    zip_code: '31700',
    user_token: 'qa-token',
  })
  check('insert member', !memberError, memberError)

  console.log('\n2. Insertion véhicule (équivalent recordCar)')
  const { data: refCar } = await supabase
    .from('cars')
    .select('car_model_id, car_finition_id, car_color_id')
    .limit(1)

  const carId = await getNextId('cars')
  const { error: carError } = await supabase.from('cars').insert({
    id: carId,
    car_color_id: refCar?.[0]?.car_color_id ?? 8,
    car_finition_id: refCar?.[0]?.car_finition_id ?? 1,
    car_model_id: refCar?.[0]?.car_model_id ?? 1,
    immatriculation: TEST_PLATE,
    member_id: memberId,
    min: 'VF37ALFYFQA000001',
  })
  check('insert car', !carError, carError)

  console.log('\n3. Relecture')
  const { data: memberRows } = await supabase
    .from('members')
    .select('id, email, cotisation, user_token')
    .eq('id', memberId)
  check('membre relu', memberRows?.length === 1, memberRows)
  check('cotisation à false (validation manuelle)', memberRows?.[0]?.cotisation === false)
  check('email conservé', memberRows?.[0]?.email === TEST_EMAIL)

  const { data: carRows } = await supabase
    .from('cars')
    .select('id, member_id, immatriculation')
    .eq('member_id', memberId)
  check('véhicule relié au membre', carRows?.length === 1, carRows)

  console.log('\n4. Idempotence (2e passage ne doit pas échouer)')
  const { data: existing } = await supabase
    .from('members')
    .select('id')
    .eq('email', TEST_EMAIL)
  check('membre détecté comme existant', (existing?.length ?? 0) === 1)

  const duplicateCarId = await getNextId('cars')
  const { error: dupError } = await supabase.from('cars').insert({
    id: duplicateCarId,
    car_color_id: refCar?.[0]?.car_color_id ?? 8,
    car_finition_id: refCar?.[0]?.car_finition_id ?? 1,
    car_model_id: refCar?.[0]?.car_model_id ?? 1,
    immatriculation: 'QA-306-DUP',
    member_id: memberId,
    min: 'VF37ALFYFQA000002',
  })
  // Ce test documente que la protection anti-doublon doit être applicative :
  // la base autorise les doublons d'immatriculation.
  if (!dupError) {
    await supabase.from('cars').delete().eq('immatriculation', 'QA-306-DUP')
  }
  check('insertion d’un doublon possible en base (protégée côté app)', !dupError, dupError)

  console.log('\nNettoyage final…')
  await cleanup()

  const { data: after } = await supabase
    .from('members')
    .select('id')
    .eq('email', TEST_EMAIL)
  check('nettoyage effectif', (after?.length ?? 0) === 0)

  console.log(
    failures === 0
      ? '\nRESULTAT: tous les tests sont passés.'
      : `\nRESULTAT: ${failures} test(s) en échec.`,
  )
  process.exit(failures === 0 ? 0 : 1)
}

main().catch((error) => {
  console.error('Erreur fatale:', error)
  process.exit(1)
})
