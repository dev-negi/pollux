import Link from "next/link";
import { useState } from "react";

import { client } from "../utils";
import Layout from "../components/Layout";
import HeroImageCarousel from "../components/carousel/HeroImageCarousel";

export async function getServerSideProps(context) {
  let results = [],
    error = null;
  try {
    results = await client.fetch(
      `*[_type == "appimages" && type == "home-hero-carousel"]`
    );
  } catch (error) {
    error = error.message;
  }

  return {
    props: { error, results },
  };
}

function HomePage(props) {
  const { results, error } = props;

  return (
    <Layout title="HomePage">
      <HeroImageCarousel data={results} />
    </Layout>
  );
}

export default HomePage;
