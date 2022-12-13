import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import { client } from "../utils";
import ProductItem from "../components/ProductItem";

export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: "",
    loading: true,
  });

  const { loading, error, products } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (error) {
        setState({ loading: false, error: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="text-3xl bg-blue-600">Heading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <h1 className="text-3xl underline">Products</h1>
          {products.map((product) => (
            <ProductItem product={product} key={product._id} />
          ))}
        </div>
      )}
    </Layout>
  );
}
