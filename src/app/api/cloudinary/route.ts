import { type NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const folderQuery = url.searchParams.get('folder')

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?max_results=100`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`,
        },
      },
    )
    const data = await response.json()
    const filteredImages = data.resources
      .filter((image: { folder: string }) => image.folder === folderQuery)
      .sort((a: { public_id: string }, b: { public_id: string }) =>
        a.public_id.localeCompare(b.public_id),
      )
      .map((image: { url: string; width: number; height: number }) => ({
        url: image.url,
        width: image.width,
        height: image.height,
      }))

    return NextResponse.json({
      images: filteredImages,
      count: filteredImages.length,
    })
  } catch (error) {
    return NextResponse.json({
      statusText: 'Erreur lors de la récupération des images',
      status: 500,
    })
  }
}
