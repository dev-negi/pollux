import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { client } from '../../../utils'
import ProductDetails from '../../../types/productDetails.type'
// import Category from "../../../types/category.type";

const query = groq`*[_type == "varianttype" && type == $type] {
  _id,
  name,
  type,
  value
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDetails>
) {
  const type = req.query.type
  const variants = await client.fetch(query, { type })
  res.status(200).json(variants)
}
