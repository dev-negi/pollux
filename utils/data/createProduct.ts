export const createProduct = async (data, currentBarcode) => {
  const {
    name,
    price,
    images,
    details,
    vendor,
    status = 'draft',
    tax = 5,
    inventory = 0,
    isdiscount = false,
    variantData,
  } = data

  const priceInt = parseInt(price)
  const taxInt = parseInt(tax)
  const title = name
  const slug = title?.trim().split(' ').join('-')

  // const variants = prepareVarinatsData(variantData)
  const body = {
    name,
    title,
    image: images,
    price: priceInt,
    slug,
    details,
    status,
    tax: taxInt,
    isdiscount,
    currentBarcode,
    vendorId: vendor,
    variants: variantData,
  }

  console.log('body:-', body)
  // return
  try {
    const { data } = await fetch('/api/product/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  } catch (error) {
    // TODO: handle errors
    console.log(error)
  }
}
