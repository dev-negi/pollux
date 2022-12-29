import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import ProductPage from '../../components/ProductPage'
import { client, fetchProductDetails, createProduct } from '../../utils'

export async function getServerSideProps(context) {
  // console.log('context:-', context)
  const productCreated = await createProduct()
  const product = await fetchProductDetails(context.params.slug)
  return {
    props: { product },
  }
}

function Product(props) {
  const { product } = props

  if (!product) {
    return <div>Product Not Found</div>
  }
  return <ProductPage product={product} />
}

export default Product
