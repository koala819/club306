import { defineType } from 'sanity'

export default defineType({
  name: 'slug',
  type: 'slug',
  title: 'Slug',
  options: {
    source: 'titleFr',
    maxLength: 96,
  },
})
