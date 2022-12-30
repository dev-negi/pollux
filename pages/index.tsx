import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import { client } from '../utils'
import ProductContainer from '../components/ProductContainer'

export default function Home({ appsettings }) {
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true,
  })

  const { loading, error, products } = state

  useEffect(() => {
    //TODO move this fetch funciton /util/data
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`)
        setState({ products, loading: false })
      } catch (error) {
        setState({ loading: false, error: error.message })
      }
    }
    fetchData()
  }, [])

  return (
    <Layout>
      {loading ? (
        <div className="text-3xl">Loading....</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ProductContainer products={products} />
      )}
    </Layout>
  )
}
