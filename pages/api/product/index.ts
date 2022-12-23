import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { client } from '../../../utils'
import ProductDetails from '../../../types/productDetails.type'
// import Category from "../../../types/category.type";

const query = groq`*[_type == "product" && slug.current == $slug] {
  _id,
    name,
    price,
    details,
    slug,
    vendor,
    tax,
    isdiscount,
    image,
    'discount': discount[] -> {
      type,
      value,
      startdate,
      enddate,
    },
    'variant': variant[]-> {
      title,
      price,
      costperitem,
      comparePrice,
      quantity,
      sky,
      barcode,
      'varianttype': varianttype -> {
        name,
        type,
        name,
        value,
        code
      }
    }
}[0]`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDetails>
) {
  const slug = req.query.slug
  const productDetails = await client.fetch(query, { slug })
  res.status(200).json(productDetails)
}
