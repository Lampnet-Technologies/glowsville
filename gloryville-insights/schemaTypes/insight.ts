
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
     defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the insight',
      validation: (Rule) => Rule.max(200), // added a max length validation
    }),
    defineField({ name: 'body', title: 'Body', type: 'blockContent' }),
  ],
})
