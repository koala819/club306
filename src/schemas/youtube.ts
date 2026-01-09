import { defineType } from 'sanity'

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'Vidéo YouTube',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL YouTube',
      description: 'Collez l\'URL de la vidéo YouTube',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    prepare({ url }) {
      return {
        title: 'Vidéo YouTube',
        subtitle: url || 'URL non définie',
      }
    },
  },
})
