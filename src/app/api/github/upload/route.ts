import { type NextRequest, NextResponse } from 'next/server'

import { uploadImageToGitHub } from '@/src/lib/githubImage'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')
    const path = formData.get('path')

    if (!(file instanceof File) || typeof path !== 'string' || path === '') {
      return NextResponse.json(
        { error: 'Fichier ou chemin manquant' },
        { status: 400 },
      )
    }

    const arrayBuffer = await file.arrayBuffer()
    const base64Image = Buffer.from(arrayBuffer).toString('base64')
    const response = await uploadImageToGitHub(base64Image, path)

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de l\'upload vers GitHub' },
      { status: 500 },
    )
  }
}
