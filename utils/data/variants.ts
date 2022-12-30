export const fetchVariantType = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/variant/type`
  )
  return await res.json()
}

export const fetchAllVariants = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/variant/listall`
  )
  return await res.json()
}

export const fetchVariantsByType = async (type) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/variant?type=${type}`
  )
  return await res.json()
}
