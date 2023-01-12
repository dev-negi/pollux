import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { client } from '../../../utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const query = groq`*[_type == "product"] | order(_createdAt) [$start...$end] {
    _id,
      title,
      name,
      image,
      rating,
      price,
      status,
      inventory,
      _createdAt,
      'vendor': vendor -> {
        _id,
        name,
        type,
        code,
      },
      'slug': slug.current
  }`

  let start = 0,
    end = 2
  let itemPerPage = 2

  const page = req.query.page
  if (page) {
    start = (parseInt(page) - 1) * itemPerPage
    end = start + itemPerPage
  }
  const result = await client.fetch(query, { start, end })
  res.status(200).json(result)
}
