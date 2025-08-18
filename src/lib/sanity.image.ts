
import createImageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity.client'

const imageBuilder = createImageUrlBuilder(sanityClient)

import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder.image(source).auto('format').fit('max')
}