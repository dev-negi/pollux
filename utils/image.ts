// import createImageUrlBuilder from "@sanity/image-url";
import imageUrlBuilder from '@sanity/image-url'
import client from './client'

function urlForThubnail(source) {
  // return createImageUrlBuilder(client).image(source);
  return imageUrlBuilder(client).image(source)
}

export { urlForThubnail }
