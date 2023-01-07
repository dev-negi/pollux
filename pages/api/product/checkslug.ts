import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { client } from '../../../utils'

const query = groq`*[_type == "product" && slug.current == $slug] {
  _id,
    name,
    slug,
}[0]`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug
  const productDetails = await client.fetch(query, { slug })
  res.status(200).json(productDetails)
}
