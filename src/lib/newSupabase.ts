import supabase from 'backend/config/dbConnect'

export async function memberInDB(mail: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('members')
    .select('*')
    .eq('email', mail)

  if (error) {
    console.error('error with', error)
    return false
  }

  return data.length > 0
}
