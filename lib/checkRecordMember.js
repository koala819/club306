import { createClient } from '@supabase/supabase-js';
import { signOut } from 'next-auth/react';


export default async function check(dataFromAccountGoogle) {
  console.log('informations are :', dataFromAccountGoogle?.user?.email);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
  );

  const { data: registeredMember } = await supabase
    .from('members')
    .select('*')
    .filter('email', 'eq', dataFromAccountGoogle?.user?.email);


  if (registeredMember?.length !== 0) {
    console.log('registeredMember have this information', registeredMember);
    return true;
  } else {
    alert('no registration in database');
    await signOut({ callbackUrl: `${process.env.CLIENT_URL}` })
    return false;
  }

}