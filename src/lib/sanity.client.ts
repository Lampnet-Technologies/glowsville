import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '4la0gmik', // project ID
  dataset: 'production',  // dataset
  useCdn: false,           // `false` if you want fresh data (not cached)
  apiVersion: '2023-07-01' // used a date or 'v1' for stable API
})
