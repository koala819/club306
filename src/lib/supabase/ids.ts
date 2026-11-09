import supabase from 'backend/config/dbConnect'

type IdTable = 'members' | 'cars' | 'museum' | 'event_with_members'

/**
 * Le schéma du projet n'a pas toujours de valeur par défaut correcte sur
 * les colonnes `id` :
 *  - `cars` / `museum` : aucune valeur par défaut (erreur 23502) ;
 *  - `members` : séquence présente mais désynchronisée du max(id), ce qui
 *    produit une violation de clé primaire (erreur 23505).
 *
 * On tente donc d'abord une insertion normale (id généré par la base).
 * Si la base refuse (23502 / 23505), on calcule l'identifiant suivant et
 * on réessaie explicitement. Le code fonctionne ainsi avec les deux types
 * de schéma, avant et après correction côté base.
 */
const RETRYABLE_ID_ERRORS = new Set(['23502', '23505'])

export async function getNextId(table: IdTable): Promise<number> {
  const { data, error } = await supabase
    .from(table)
    .select('id')
    .order('id', { ascending: false })
    .limit(1)

  if (error) throw error
  if (!data || data.length === 0) return 1

  return Number(data[0].id) + 1
}

export async function insertWithGeneratedId(
  table: IdTable,
  rows: Record<string, any>[],
): Promise<{ data: any[] | null; error: any }> {
  const first = await supabase.from(table).insert(rows as any).select()

  if (!first.error) {
    return { data: first.data ?? null, error: null }
  }

  if (!RETRYABLE_ID_ERRORS.has(String(first.error.code))) {
    return { data: null, error: first.error }
  }

  // La base ne sait pas générer l'id (ou la séquence est en conflit) :
  // on fournit les identifiants nous-mêmes.
  const firstId = await getNextId(table)
  const withIds = rows.map((row, index) => ({ ...row, id: firstId + index }))

  const second = await supabase.from(table).insert(withIds as any).select()

  return { data: second.data ?? null, error: second.error ?? null }
}
