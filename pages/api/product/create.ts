import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { client } from '../../../utils'
import ProductDetails from '../../../types/productDetails.type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDetails>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests allowed' })
    return
  }

  const { name, title, slug, vendor } = req.body
  const postData = {
    _type: 'product',
    name,
    title,
    slug: {
      current: slug,
    },
    vendor,
  }

  const varaintList = req.body?.variant

  client.create(postData).then((data) => {
    // Fist Create Product and get Product Id
    const prodcutId = data._id

    if (varaintList?.length > 0) {
      // for Each variant create variant, and update product-variant;
      varaintList.forEach(async (variant) => {
        const variantData = await createVariant(variant)
        client
          .patch(prodcutId)
          .set({
            variant: [{ _ref: variantData._id, _key: `v-${variantData._id}` }],
          })
          .commit()
      })
    }

    res.status(200).json(data)
  })
}

function createVariant(variant) {
  const { title, name, price, quantity, sku, barcode, type } = variant
  return client.create({
    _type: 'variant',
    title,
    price,
    quantity,
    sku,
    barcode,
  })
}

//   let varaintIds = []
//   if (req.body.variant?.length > 0) {
//     req.body.variant.forEach(async (variantItem) => {
//       const { title, name, price, quantity, sku, barcode, type } = variantItem
//       const data = await client.create({
//         _type: 'variant',
//         title,
//         price,
//         quantity,
//         sku,
//         barcode,
//       })
//       varaintIds.push({ _ref: data._id })
//       //   varaintIds = data._id
//       console.log('created variant:-', data)
//     })
//   }
