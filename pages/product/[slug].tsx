import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import ProductPage from "../../components/ProductPage";
import { client } from "../../utils";

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}

function Product(props) {
  const { slug } = props;
  const [state, setState] = useState({
    product: null,
    loading: true,
    error: "",
  });

  const { product, loading, error } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch(
          `*[_type == "product" && slug.current == $slug][0]`,
          { slug }
        );
        setState({ ...state, product, loading: false });
      } catch (error) {
        setState({ ...state, error: error.message, loading: false });
      }
    };

    fetchData();
  }, []);

  if (!product) {
    return <div>Product Not Found</div>;
  }
  return <ProductPage product={product} />;
}

export default Product;
