import { defineType } from 'sanity'

export default defineType({
  name: 'codeBlock',
  type: 'object',
  title: 'Bloc de code',
  fields: [
    {
      name: 'language',
      type: 'string',
      title: 'Langage',
      description: 'Le langage de programmation',
    },
    {
      name: 'filename',
      type: 'string',
      title: 'Nom de fichier',
      description: 'Nom du fichier (optionnel)',
    },
    {
      name: 'code',
      type: 'text',
      title: 'Code',
      description: 'Le code source',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'highlightedLines',
      type: 'array',
      title: 'Lignes surlignées',
      description: 'Numéros de lignes à surligner',
      of: [{ type: 'number' }],
    },
  ],
  preview: {
    select: {
      language: 'language',
      code: 'code',
      filename: 'filename',
    },
    prepare({ language, code, filename }) {
      const preview = code ? code.substring(0, 50) + '...' : 'Code vide'
      return {
        title: filename || `Code ${language || 'sans langage'}`,
        subtitle: preview,
      }
    },
  },
})
