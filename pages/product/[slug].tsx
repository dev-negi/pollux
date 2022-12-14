import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import { client } from "../../utils";
import { urlForThubnail } from "../../utils";

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}
function ProductPage(props) {
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

  return (
    <Layout title={product?.title}>
      {loading ? (
        <div>Loading ...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="py-2">
          <Link href="/">back to products</Link>
          <div className="grid md: grid-cols-4 md:gap-3">
            <div className="md:col-span-2">
              <Image
                src={urlForThubnail(product.image[0]).url()}
                alt={product.title}
                width={640}
                height={640}
                layout="responsive"
              ></Image>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default ProductPage;
