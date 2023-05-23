import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
    );
    try {
      const { pwd, email } = req.body;
      const { data, error } = await supabase
        .from('members')
        .update({ password: await bcrypt.hash(pwd, 12) })
        .eq('email', email);
      // .filter('email', 'eq', email);

      if (error) {
        console.log('Error to update the pwd\n', error);
      }

      if (data === null) {
        console.log('Great Job !!! Pwd updated successfully :)');
        return res.status(208).json({
          message: 'Great Job !!! Pwd updated successfully :)',
        });
      }
    } catch (error) {
      console.log('Error to update the pwd\n', error);
    }
  } catch (error) {
    console.log('Error to connect with db\n', error);
    res.json(error);
    res.status(405).end;
  }
}
