import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { client } from '../../../utils'

const query = groq`*[_type== "vendor"] {
    _id,
    name,
    type,
    code
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const vendors = await client.fetch(query)
  res.status(200).json({ vendors })
}
