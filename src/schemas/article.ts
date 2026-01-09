import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blog',
  type: 'document',
  title: 'Article de Blog',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'date',
      title: 'Date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    }),
    defineField({
      name: 'titleImagebyCloudinary',
      title: 'Image Titre avec Cloudinary',
      type: 'cloudinaryImage',
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: 'Image du titre',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte Alternatif',
          description: 'Important pour le SEO et l\'accessibilité.',
          validation: (Rule: any) =>
            Rule.error('Vous devez remplir le texte alternatif.').required(),
        },
      ],
    }),
    defineField({
      name: 'shortDescription',
      type: 'text',
      title: 'Description courte',
      rows: 4,
    }),
    defineField({
      name: 'contentFr',
      type: 'array',
      title: 'Contenu',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Légende',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Texte Alternatif',
              description: 'Important pour le SEO et l\'accessibilité.',
              validation: (Rule: any) =>
                Rule.error(
                  'Vous devez remplir le texte alternatif.',
                ).required(),
            },
            {
              name: 'size',
              type: 'string',
              title: 'Taille',
              options: {
                list: [
                  { title: 'Petite', value: 'small' },
                  { title: 'Moyenne', value: 'medium' },
                  { title: 'Grande', value: 'large' },
                ],
              },
            },
          ],
        },
        { type: 'youtube' },
        { type: 'cloudinaryImage' },
        { type: 'codeBlock' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'titleImage',
      date: 'date',
    },
    prepare({ title, media, date }) {
      return {
        title: title || 'Sans titre',
        media,
        subtitle: date ? new Date(date).toLocaleDateString('fr-FR') : '',
      }
    },
  },
})
