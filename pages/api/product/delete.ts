import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { client } from '../../../utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const id = req.query.id
  let result = [{ error: 'item not found' }]

  const query = groq`*[_type == "product" && _id == $id] {
  _id,
    'variant': variant[]-> {
      _id
    }
}[0]`

  if (id) {
    const product = await client.fetch(query, { id })
    product?.variant?.forEach((v) => {
      const id = v._id
      client.delete(id)
    })
    result = await client.delete(id)
  }
  return res.status(200).json(result)
}
