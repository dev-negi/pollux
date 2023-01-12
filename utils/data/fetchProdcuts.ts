export const fetchProducts = async (page = 0) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/list?page=${page}`
  )
  const data = await res.json()
  return data
}
