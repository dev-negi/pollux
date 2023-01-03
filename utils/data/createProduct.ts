export const createProduct = async (data) => {
  console.log(data)
  const {
    name,
    price,
    images,
    details,
    vendorId,
    status = 'draft',
    tax = 5,
    inventory = 0,
    isdiscount = false,
    variants,
  } = data

  const priceInt = parseInt(price)
  const taxInt = parseInt(tax)
  const title = name
  const slug = title?.trim().split(' ').join('-')

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
    vendorId,
    variants,
  }

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
