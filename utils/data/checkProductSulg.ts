export const checkProductSulg = async (slug) => {
  console.log('checkProductSulg:-', checkProductSulg)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/checkslug?slug=${slug}`
  )
  const data = await res.json()
  const product = data
  return product
}
