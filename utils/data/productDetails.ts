import ProductDetails from '../../types/productDetails.type'

export const fetchProductDetails = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product?slug=${slug}`
  )
  const data = await res.json()
  const product: ProductDetails = data
  return product
}
