import Link from 'next/link'
import type { GetServerSideProps } from 'next'
import { useState } from 'react'

import { client, fetchHomeHeroImages, fetchCategories } from '../utils'
import Layout from '../components/Layout'
import HeroImageCarousel from '../components/carousel/HeroImageCarousel'

export async function getServerSideProps(context) {
  const results = await fetchHomeHeroImages()

  return {
    props: { results },
  }
}

function HomePage(props) {
  const { results } = props

  return (
    <Layout title="HomePage">
      <HeroImageCarousel data={results} />
    </Layout>
  )
}

export default HomePage
