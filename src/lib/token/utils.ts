import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function checkEmptyToken(email: string) {
  try {
    const { data } = await supabase
      .from('members')
      .select('user_token')
      .eq('email', email)
      .limit(1);
    if (data?.[0].user_token === null) {
      return false;
    }

    return true;
  } catch (error: any) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return false;
  }
}

async function deleteToken(email: string) {
  try {
    console.log('email where delete token', email);
    const { error } = await supabase
      .from('members')
      .update({ user_token: null })
      .eq('email', email);
    console.log('error', error);
    if (!error) {
      return NextResponse.json({
        status: 200,
        statusText: 'Great Job !!! Token successfully removed :)',
      });
    }

    return NextResponse.json({
      status: 306,
      statusText: 'Error to delete token',
    });
  } catch (error) {
    return NextResponse.json({
      status: 306,
      statusText: 'Error with supabase request',
    });
  }
}

async function getTokenConfirmMail(token: string) {
  try {
    const { data, error } = await supabase
      .from('members')
      .select(`first_name, last_name, email`)
      .eq('user_token', token)
      .limit(1);
    if (error) {
      throw new Error(error.message);
    }

    deleteToken(data[0].email);
    return data.length > 0 ? data[0] : null;
  } catch (error: any) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return false;
  }
}

async function memberInfo(email: string) {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('first_name, last_name, user_token')
      .eq('email', email)
      .limit(1);
    if (!data || error) {
      return NextResponse.json({
        status: 306,
        statusText: 'Error to get member infos',
        data: error,
      });
    }
    return NextResponse.json({
      status: 200,
      statusText: 'Infos Member',
      data: data[0],
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 306,
      statusText: 'Error supabase request',
      data: error,
    });
  }
}

export { checkEmptyToken, getTokenConfirmMail, memberInfo };
