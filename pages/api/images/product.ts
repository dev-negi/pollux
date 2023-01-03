import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { createReadStream } from 'fs'

import { client } from '../../../utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDetails>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests allowed' })
    return
  }

  // console.log('req.formData:-', req.formData)
  console.log('req.body - 1:-', req.body)
  // const imageFile = req.body

  // if (imageFile) {
  //   console.log('====================imageFile===========')
  // const data = await client.assets.upload('image', imageFile)

  const { filePath, filename } = req.body
  client.assets
    .upload('image', createReadStream(filePath), {
      filename,
    })
    .then((result) => {
      console.log(result)
    })
    .then(() => {
      console.log('done')
    })

  //   console.log('data:-', data)
  //   res.status(200).json({ data })
  // }
}
