import { createClient } from '@supabase/supabase-js';

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
      const body = await req.json();

      // console.log('in recordMember check req.body\n', body);

      const {
        address,
        birth_date,
        country,
        email,
        first_name,
        last_name,
        member_id,
        password,
        phone,
        town,
        zip_code,
      } = body;

      try {
        const { data, error } = await supabase.from('members').insert({
          id: member_id,
          address,
          birth_date,
          country,
          email,
          first_name: first_name.charAt(0).toUpperCase() + first_name.slice(1),
          last_name: last_name.toUpperCase(),
          password,
          phone,
          town,
          zip_code,
        });

        if (error) {
          return new Response(JSON.stringify(error.message), {
            status: 405,
            statusText: 'Error with inserting new Member',
          });
        }

        return new Response(JSON.stringify(data), {
          status: 200,
          statusText: 'Great Job !!! User has created successfully :)',
        });
      } catch (error) {
        return new Response(JSON.stringify(error), {
          status: 406,
          statusText: 'Error with supabase request',
        });
      }
    }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 407,
      statusText: 'Error with POST request for Member',
    });
  }
}
