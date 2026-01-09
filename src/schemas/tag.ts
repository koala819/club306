import { defineType } from 'sanity'

export default defineType({
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nom',
      validation: (Rule) => Rule.required(),
    },
  ],
})
