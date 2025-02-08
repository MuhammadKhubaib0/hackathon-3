/* eslint-disable @typescript-eslint/no-explicit-any */
// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// import { dataset, projectId } from '../env'

// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source: SanityImageSource) => {
//   return builder.image(source)
// }

import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanityClient";

// Create an instance of the image builder
const builder = imageUrlBuilder(client);

// Type-safe function for generating Sanity image URLs with optimizations
export function urlFor(source: any, width: number = 640, quality: number = 75) {
  return builder.image(source).width(width).quality(quality).auto("format").url();
}


