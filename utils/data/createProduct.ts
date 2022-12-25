// import Category from '../../types/category.type'

export const createProduct = async (data) => {
  const data1 = {
    name: 'product name',
    title: 'product name',
    slug: 'blue-kurta-1111',
    vendor: 'vendeor1',
    variant: [
      {
        title: 'first variant',
        name: 'first variant',
        price: 599,
        quntity: 5,
        sku: 'vfirst-saa',
        barcode: '29492392',
        type: {
          name: 'size-2',
          type: 'size',
          vlaue: '3-6 Month',
        },
      },
    ],
  }
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/create`
  const tokenWithWriteAccess = process.env.SANITY_API_TOKEN
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenWithWriteAccess}`,
    },
    body: JSON.stringify(data1),
  })
}
