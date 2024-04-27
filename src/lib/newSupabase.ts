import { NextResponse } from 'next/server'

import supabase from 'backend/config/dbConnect'

export async function addMemberToEvent(memberId: string, event: string) {
  try {
    const { data } = await supabase
      .from('event_with_members')
      .select('*')
      .filter('member', 'eq', memberId)
      .filter('event', 'eq', event)
    console.log('data', data)
    if (data && data.length > 0) {
      return NextResponse.json(data, {
        status: 402,
        statusText: 'Already register in db',
      })
    } else {
      const currentYear = new Date().getFullYear()

      try {
        const { error } = await supabase
          .from('event_with_members')
          .insert({ member: memberId, event: event, year: currentYear })

        if (!error) {
          return NextResponse.json({
            statusText: 'Great Job !!! Member successfull register in Event :)',
            status: 200,
          })
        }
        return NextResponse.json(error, {
          statusText: 'Error to register Member in Event :(',
          status: 400,
        })
      } catch (error) {
        return NextResponse.json(error, {
          statusText: 'Error with supabase request',
          status: 401,
        })
      }
    }
  } catch (error) {
    return NextResponse.json(error, {
      status: 406,
      statusText: 'Error with supabase request',
    })
  }
}

export async function checkRegisterMembers(
  memberId: string,
  event: string,
): Promise<boolean> {
  try {
    const { data } = await supabase
      .from('event_with_members')
      .select('*')
      .filter('member', 'eq', memberId)
      .filter('event', 'eq', event)

    return !!data && data.length > 0
  } catch (error) {
    console.error('Error with supabase request', error)
    throw error
  }
}

export async function memberInDB(lastName: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('members')
    .select('*')
    .eq('last_name', lastName)

  if (error) {
    console.error('error with', error)
    return false
  }

  return data.length > 0
}

export async function returnIdFromMail(mail: string) {
  const { data, error } = await supabase
    .from('members')
    .select('id')
    .filter('email', 'eq', mail)

  if (error) {
    return NextResponse.json(error, {
      status: 401,
      statusText: 'Error with supabase request',
    })
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: 'Id found',
  })
}

export async function returnInfosEventFromId(id: string) {
  const { data, error } = await supabase
    .from('event')
    .select('description')
    .filter('id', 'eq', id)

  if (error) {
    return NextResponse.json(error, {
      status: 401,
      statusText: 'Error with supabase request',
    })
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: 'Event info',
  })
}

export async function returnInfosMemberFromId(id: string) {
  const { data, error } = await supabase
    .from('members')
    .select('first_name, last_name, email')
    .filter('id', 'eq', id)

  if (error) {
    return NextResponse.json(error, {
      status: 401,
      statusText: 'Error with supabase request',
    })
  }

  return NextResponse.json(data, {
    status: 200,
    statusText: 'Members info',
  })
}
