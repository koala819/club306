import { type NextRequest, NextResponse } from 'next/server'

import { deletePictureFromGitHub } from '@/src/lib/githubImage'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const githubUrl = body?.githubUrl

    if (typeof githubUrl !== 'string' || githubUrl === '') {
      return NextResponse.json(
        { error: 'URL GitHub manquante' },
        { status: 400 },
      )
    }

    const response = await deletePictureFromGitHub(githubUrl)

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la suppression sur GitHub' },
      { status: 500 },
    )
  }
}
