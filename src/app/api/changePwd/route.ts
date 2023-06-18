import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  try {
    if (req.method === 'POST') {
      if (!req.body) {
        return new Response(JSON.stringify("Don't have form data...!"), {
          status: 403,
          statusText: "Don't have form data...!",
        });
      }

      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
      );

      const { pwd, email } = await req.json();

      const { data, error } = await supabase
        .from('members')
        .update({ password: await bcrypt.hash(pwd, 12) })
        .eq('email', email);

      if (error) {
        return new Response(JSON.stringify(error.message), {
          status: 405,
          statusText: 'Error to update the pwd',
        });
      }
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Pwd updated successfully :)',
      });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}
