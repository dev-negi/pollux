export const editProduct = async (data, currentBarcode) => {
  let {
    _id,
    name,
    price,
    images,
    details,
    vendor,
    status = 'draft',
    tax = 5,
    inventory = 0,
    discount = false,
    variantData,
  } = data

  price = parseInt(price)
  tax = parseInt(tax)
  inventory = parseInt(inventory)
  const title = name

  console.log('in editProduct:-', data)
  return
  // const variants = prepareVarinatsData(variantData)
  const body = {
    _id,
    name,
    title,
    image: images,
    price,
    details,
    status,
    tax,
    inventory,
    discount,
    vendorId: vendor?._id,
    variants: variantData,
  }

  try {
    const { data } = await fetch('/api/product/edit', {
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
