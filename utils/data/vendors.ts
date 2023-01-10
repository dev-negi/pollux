export const fetchVendors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/vendor`)
  const data = await res.json()
  const vendors = data.vendors
  return vendors
}
