import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { client } from '../../../utils'
import HomeHeroImages from '../../../types/homeHeroImages.type'

const query = groq`*[_type == "appimages" && type == "home-hero-carousel"]{
  _id,
  name,
  title,
  primarytext,
  secondarytext,
  tertiartext,
  button,
  type,
  image,
}`

type Data = {
  homeHeroImages: HomeHeroImages[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const homeHeroImageList = await client.fetch(query)
  res.status(200).json({ homeHeroImageList })
}
