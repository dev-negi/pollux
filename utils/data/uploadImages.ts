import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { client } from '../client'

export const uploadImages = async (data) => {
  console.log('uploadImages:-', data)
  const { filePath, filename } = data
  try {
    const { data } = await fetch('/api/images/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filePath, filename }),
    })
  } catch (error) {
    // TODO: handle errors
    console.log(error)
  }

  // if (data?.length > 0) {
  //   const imageData = []
  //   data.forEach((productImage) => {
  //     imageData.push(uploadImage(productImage))
  //   })

  //   Promise.allSettled(imageData).then((valeus) => {
  //     console.log(valeus)
  //   })
  // }
}

function uploadImage({ file, filePath, contentType, filename }) {
  console.log('file:-', file)
  console.log('contentType:-', contentType)
  console.log('filename:-', filename)
  return client.assets.upload('image', file, {
    contentType,
    filename,
  })
}
