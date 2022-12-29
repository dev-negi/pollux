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

  const { name, title, details, slug, vendorId, status, tax, isdiscount } =
    req.body
  const postData = {
    _type: 'product',
    name,
    title,
    details,
    status,
    tax,
    isdiscount,
    slug: {
      current: slug,
    },
  }

  const varaintList = req.body?.variant

  client.create(postData).then((data) => {
    // Fist Create Product and get Product Id
    const prodcutId = data._id

    // Attach vendoer to product
    console.log('updated product:-', prodcutId)
    console.log('updated vendeor:-', vendorId)
    client
      .patch(prodcutId)
      .set({
        vendor: { _ref: vendorId },
      })
      .commit()

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
