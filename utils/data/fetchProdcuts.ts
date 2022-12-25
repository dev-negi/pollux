export const fetchProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/list`
  )
  const data = await res.json()
  console.log('product list data:-', data)
  return data
}
