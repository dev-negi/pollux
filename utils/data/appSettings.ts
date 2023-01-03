export const fetchAppSettings = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/settings`)
  return await res.json()
}
