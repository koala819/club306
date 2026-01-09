import { defineType } from 'sanity'

export default defineType({
  name: 'cloudinaryImage',
  title: 'Image Cloudinary',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'L\'URL de l\'image sur Cloudinary',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Texte Alternatif',
      description: 'Important pour le SEO et l\'accessibilité.',
      validation: (Rule: any) =>
        Rule.error('Vous devez remplir le texte alternatif.').required(),
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
})
