// ./src/app/api/draft-mode/enable/route.ts
import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/src/lib/blog/sanity/client'
import { token } from '@/src/lib/blog/sanity/token'
import { validatePreviewUrl } from '@sanity/preview-url-secret'

export async function GET(request: NextRequest) {
  if (!token) {
    return new Response('Missing environment variable SANITY_API_READ_TOKEN', {
      status: 500,
    })
  }

  const clientWithToken = client.withConfig({ token })

  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    request.url,
  )

  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()

  return NextResponse.redirect(new URL(redirectTo, request.url))
}
