import { client, getImageUrl, sanityFetch } from './sanity/client'
import { groq } from 'next-sanity'

export async function getAllArticles() {
  const query = groq`*[_type == "blog" && defined(slug.current)] | order(date desc) {
    _id,
    title,
    slug,
    date,
    "tags": tags[]->name,
    titleImagebyCloudinary,
    titleImage,
    shortDescription,
    content
  }`

  const articles = await sanityFetch({
    query,
    tags: ['blog'],
  })

  console.log('Articles fetched from Sanity:', articles.length, articles)

  return articles
    .filter((article: any) => article.slug?.current) // Filtrer les articles sans slug
    .map((article: any) => ({
      id: article._id,
      uid: article.slug.current,
      data: {
        title: article.titleFr || article.titleEn || '',
        titleFr: article.titleFr || '',
        titleEn: article.titleEn || '',
        description: article.shortDescriptionFr || article.shortDescriptionEn || '',
        dateEvent: article.date || '',
        featureImageUrl: {
          url: getImageUrl(article),
          alt: article.titleImage?.alt || article.titleImagebyCloudinary?.alt || '',
        },
        tags: article.tags || [],
        contentFr: article.contentFr || [],
        contentEn: article.contentEn || [],
      },
    }))
}

export async function getArticleBySlug(slug: string) {
  const query = groq`*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    "tags": tags[]->name,
    titleImagebyCloudinary,
    titleImage,
    shortDescription,
    contentFr
  }`

  const article = await sanityFetch({
    query,
    params: { slug },
    tags: ['blog'],
  })

  if (!article) return null

  return {
    id: article._id,
    uid: article.slug?.current || '',
    data: {
      title: article.title || '',
      description: article.shortDescription || '',
      dateEvent: article.date || '',
      featureImageUrl: {
        url: getImageUrl(article),
        alt: article.titleImage?.alt || article.titleImagebyCloudinary?.alt || '',
      },
      paragraphes: article.contentFr || [],
      content: article.contentFr || [],
      contentFr: article.contentFr || [],
      tags: article.tags || [],
    },
  }
}
