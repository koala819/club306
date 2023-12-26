import { NextResponse } from 'next/server';
import supabase from 'backend/config/dbConnect';

async function confirmMembership(id: number) {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('cotisation')
      .eq('id', id)
      .single();

    if (error || !data) {
      return false;
    } else {
      const updateMember = await supabase
        .from('members')
        .update({ cotisation: true })
        .eq('id', id);

      if (updateMember.error) {
        return false;
      } else {
        return true;
      }

      // if (error || !data) {
      //   return false;
      // }

      // return true;
    }
  } catch (error) {
    return false;
  }
}

async function getMemberForCotisation(email: string) {
  try {
    const { data, error } = await supabase
      .from('members')
      .select(
        'first_name, last_name, email, birth_date, address, zip_code, town, phone, id'
      )
      .filter('email', 'eq', email)
      .single();

    if (error) {
      return NextResponse.json({
        status: 306,
        statusText: 'No member with this email',
      });
    }

    return NextResponse.json(data, {
      status: 200,
      statusText: 'Member Info ',
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 416,
      statusText: error.message,
    });
  }
}

export { confirmMembership, getMemberForCotisation };
