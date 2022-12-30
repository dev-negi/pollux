export const fetchAppSettings = async () => {
  console.log('-----doing fetch settings----')
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/settings`)
  return await res.json()
}
