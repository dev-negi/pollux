import imageUrlBuilder from "@sanity/image-url";
import client from "./client";

function urlForThubnail(source) {
  return imageUrlBuilder(client).image(source);
}

export { urlForThubnail };
