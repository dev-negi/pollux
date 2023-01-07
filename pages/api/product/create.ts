import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { v4 as uuidv4 } from 'uuid'

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

  const {
    name,
    title,
    details,
    slug,
    vendorId,
    status,
    tax,
    isdiscount,
    variants,
    currentBarcode,
  } = req.body

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
  // console.log('currentBarcode:-', currentBarcode)
  const varaintList = req.body?.variants

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
      const variantData = []
      varaintList.forEach((variant, index) => {
        variantData.push(createVariant(variant, name, currentBarcode, index))
      })

      Promise.allSettled(variantData).then((values) => {
        updateProdctWithVariants(client, prodcutId, values)
      })
      updateBarcode(client, currentBarcode, varaintList.length)
    }

    res.status(200).json(data)
  })
}

function updateProdctWithVariants(client, prodcutId, values) {
  const variantRef = []
  // console.log('values:-', values)
  values.forEach((data) => {
    variantRef.push({ _ref: data.value._id, _key: `v-${data.value._id}` })
  })

  client
    .patch(prodcutId)
    .set({
      variant: variantRef,
    })
    .commit()
}

function zeroPad(numberStr, n) {
  const length = numberStr.length
  return numberStr.padStart(n - length, 0)
}

function createVariant(variantData, produtTitle, currentBarcode, index) {
  const variantBarcode = parseInt(currentBarcode.value) + 1 + index

  const barcode = zeroPad(variantBarcode.toString(), 12)

  console.log('barcode:-', barcode)
  const { title, price, quantity, sku, costperitem, compareprice, varintType } =
    variantData

  const variants = varintType.map((v) => {
    return { _key: uuidv4(), key: v.variantKey, value: v.variantValue }
  })
  return client.create({
    _type: 'variant',
    title: `${produtTitle} (${title})`,
    price,
    quantity,
    sku,
    costperitem,
    compareprice,
    barcode,
    variants,
  })
}

function updateBarcode(client, barcode, l = 0) {
  const newBarcode = parseInt(barcode.value) + l

  const currentBarcode = zeroPad(newBarcode.toString(), 12)

  client
    .patch(barcode._id)
    .set({
      value: currentBarcode,
    })
    .commit()
}
