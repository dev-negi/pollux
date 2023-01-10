import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { client } from '../../../utils'

let lastPublishedAt = ''
let lastId = ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const query = groq`*[_type == "product"] | order(_createdAt) [0...10] {
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

  const { next } = req.query
  console.log('enxt:-', typeof next)
  if (next === 'true') {
    return fetchNextPage()
  }
  const result = await client.fetch(query)
  if (result.length > 0) {
    lastPublishedAt = result[result.length - 1]._createdAt
    lastId = result[result.length - 1]._id
  } else {
    lastId = null // Reached the end
  }
  res.status(200).json(result)
}

async function fetchNextPage() {
  console.log('in next:-', lastId, 'lastPublishedAt:-', lastPublishedAt)
  if (lastId === null) {
    return []
  }

  return
  const query = groq`*[_type == "product"] | order(_createdAt) [0...10] {
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

  const { result } = await fetch(query)

  if (result.length > 0) {
    lastPublishedAt = result[result.length - 1].publishedAt
    lastId = result[result.length - 1]._id
  } else {
    lastId = null // Reached the end
  }
  return result
}
