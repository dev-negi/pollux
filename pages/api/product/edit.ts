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

  // const body = {
  //   name,
  //   title,
  //   image: images,
  //   price,
  //   details,
  //   status,
  //   tax,
  //   inventory,
  //   discount,
  //   vendorId: vendor?._id,
  //   variants: variantData,
  // }

  const {
    _id,
    name,
    title,
    price,
    inventory,
    details,
    vendorId,
    status,
    tax,
    isdiscount,
  } = req.body

  // console.log('currentBarcode:-', currentBarcode)
  const varaintList = req.body?.variants
  client
    .patch(_id)
    .set({
      name,
      title,
      price,
      inventory,
      details,
      status,
      tax,
      isdiscount,
      vendor: { _ref: vendorId },
    })
    .commit()
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
