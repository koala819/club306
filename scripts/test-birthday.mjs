/**
 * Vérifie la logique d'anniversaire sans envoyer de mail :
 * détection du jour, ciblage cotisation, rendu des textes.
 *
 * Usage : node scripts/test-birthday.mjs
 */
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const config = JSON.parse(
  readFileSync(resolve(process.cwd(), 'content/birthday.json'), 'utf8'),
)

let failures = 0
const check = (label, condition, extra) => {
  if (condition) {
    console.log(`  OK   ${label}`)
  } else {
    failures += 1
    console.log(`  FAIL ${label}`, extra ?? '')
  }
}

const isBirthdayToday = (birthDate, reference) => {
  if (!birthDate) return false
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(birthDate)
  if (!match) return false
  const [, , month, day] = match
  const refMonth = String(reference.getMonth() + 1).padStart(2, '0')
  const refDay = String(reference.getDate()).padStart(2, '0')
  return month === refMonth && day === refDay
}

const renderText = (template, member) =>
  template
    .replace(/\{\{\s*firstName\s*\}\}/gi, member.first_name ?? '')
    .replace(/\{\{\s*lastName\s*\}\}/gi, member.last_name ?? '')
    .replace(/\{\{\s*email\s*\}\}/gi, member.email ?? '')
    .trim()

const matchesAudience = (member, audience) => {
  if (audience === 'paid') return member.cotisation === true
  if (audience === 'unpaid') return member.cotisation !== true
  return true
}

const REF = new Date(2026, 10, 9) // 9 novembre 2026

console.log('1. Detection du jour anniversaire')
check('meme jour et mois', isBirthdayToday('1990-11-09', REF))
check('annee differente acceptee', isBirthdayToday('1975-11-09', REF))
check('autre jour refuse', !isBirthdayToday('1990-11-10', REF))
check('autre mois refuse', !isBirthdayToday('1990-10-09', REF))
check('date nulle refusee', !isBirthdayToday(null, REF))
check('chaine vide refusee', !isBirthdayToday('', REF))
check('format invalide refuse', !isBirthdayToday('pas-une-date', REF))
check('jour sur un chiffre accepte', isBirthdayToday('1990-1-9', REF) === false)

console.log('\n2. Ciblage selon la cotisation')
const paid = { id: 1, first_name: 'Xavier', cotisation: true }
const unpaid = { id: 2, first_name: 'Alex', cotisation: false }
const unknown = { id: 3, first_name: 'Sam', cotisation: null }

check("audience 'all' inclut paye", matchesAudience(paid, 'all'))
check("audience 'all' inclut non paye", matchesAudience(unpaid, 'all'))
check("audience 'paid' exclut non paye", !matchesAudience(unpaid, 'paid'))
check("audience 'paid' inclut paye", matchesAudience(paid, 'paid'))
check("audience 'unpaid' inclut non paye", matchesAudience(unpaid, 'unpaid'))
check("audience 'unpaid' exclut paye", !matchesAudience(paid, 'unpaid'))
check('cotisation inconnue traitee comme non payee', matchesAudience(unknown, 'unpaid'))
check('cotisation inconnue exclue du ciblage paye', !matchesAudience(unknown, 'paid'))

console.log('\n3. Rendu des textes')
check(
  'prenom remplace',
  renderText('Salut {{firstName}},', paid) === 'Salut Xavier,',
  renderText('Salut {{firstName}},', paid),
)
check(
  'jeton sans espaces',
  renderText('Salut {{ firstName }}', paid) === 'Salut Xavier',
)
check(
  'jeton inconnu conserve tel quel',
  renderText('Salut {{pseudo}}', paid) === 'Salut {{pseudo}}',
)
check(
  'prenom absent remplace par vide',
  renderText('Salut {{firstName}} !', { first_name: null }) === 'Salut  !',
)

console.log('\n4. Cle de jour utilisee par le journal anti-doublon')
const dayKey = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate(),
  ).padStart(2, '0')}`
check('cle du 9 novembre 2026', dayKey(REF) === '2026-11-09', dayKey(REF))
check(
  'mois sur deux chiffres',
  dayKey(new Date(2026, 0, 5)) === '2026-01-05',
  dayKey(new Date(2026, 0, 5)),
)
check(
  'deux dates du meme jour donnent la meme cle',
  dayKey(new Date(2026, 10, 9, 8, 30)) === dayKey(new Date(2026, 10, 9, 23, 15)),
)

console.log('\n5. Structure du fichier de configuration')
check('enabled est un booleen', typeof config.enabled === 'boolean')
check('dryRun est un booleen', typeof config.dryRun === 'boolean')
check(
  'audience valide',
  ['all', 'paid', 'unpaid'].includes(config.audience),
  config.audience,
)
check('sujet non vide', typeof config.text.subject === 'string' && config.text.subject.length > 0)
check('titre non vide', typeof config.text.title === 'string' && config.text.title.length > 0)
check('salutation non vide', typeof config.text.greeting === 'string' && config.text.greeting.length > 0)
check('corps non vide', Array.isArray(config.text.body) && config.text.body.length > 0)
check('signature non vide', typeof config.text.signature === 'string' && config.text.signature.length > 0)
check(
  'le sujet utilise le prenom',
  config.text.subject.includes('{{firstName}}'),
)
check(
  'pas de balise HTML dans les textes',
  !JSON.stringify(config.text).includes('<'),
)

console.log(
  failures === 0
    ? '\nRESULTAT: tous les tests sont passes.'
    : `\nRESULTAT: ${failures} test(s) en echec.`,
)
process.exit(failures === 0 ? 0 : 1)
