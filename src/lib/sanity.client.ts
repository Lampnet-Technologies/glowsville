import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '4la0gmik',
  dataset: 'production',
  useCdn: true, // Enable CDN caching for static builds
  apiVersion: '2023-07-01',
  perspective: 'published' // Only get published content
})
