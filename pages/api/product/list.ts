import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { client } from '../../../utils'

const query = groq`*[_type == "product"] {
  _id,
    title,
    name,
    price,
    status,
    inventory,
    vendor,
    'slug': slug.current
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const slug = req.query.slug
  const productList = await client.fetch(query)
  res.status(200).json(productList)
}
