export const createProduct = async (data) => {
  const {
    title,
    price,
    details,
    vendorId,
    status = 'draft',
    tax = 5,
    isdiscount = false,
    variants,
  } = data

  const priceInt = parseInt(price)
  const name = title
  const slug = title?.trim().split(' ').join('-')

  const body = {
    name,
    title,
    price: priceInt,
    slug,
    details,
    status,
    tax,
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
