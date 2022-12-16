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
    <Layout title={product.title}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div x-data="image-1">
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <Image
                    src={urlForThubnail(product.image[0]).url()}
                    alt={product.title}
                    width={640}
                    height={640}
                    layout="responsive"
                  ></Image>
                </div>
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="flex-1 px-2">
                  <div className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                    1
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                    2
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                    3
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h1 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {product.title}
            </h1>
            <p className="text-gray-500 text-sm">
              <a className="text-indigo-600 hover:underline">ABC company</a>
            </p>
            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-indigo-400 mr-1 mt-1">$</span>
                  <span className="font-bold text-indigo-600 text-3xl">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-500">
              Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
              exercitationem porro saepe ea harum corrupti vero id laudantium
              enim, libero blanditiis expedita cupiditate a est.
            </p>
            <div className="flex py-4 space-x-4">
              <button className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductPage;

// return (
//   <Layout title={product?.title}>
//     {loading ? (
//       <div>Loading ...</div>
//     ) : error ? (
//       <div>{error}</div>
//     ) : (
//       <div className="py-2">
//         <Link href="/">back to products</Link>
//         <div className="grid md: grid-cols-4 md:gap-3">
//           <div className="md:col-span-2">
//             <Image
//               src={urlForThubnail(product.image[0]).url()}
//               alt={product.title}
//               width={640}
//               height={640}
//               layout="responsive"
//             ></Image>
//           </div>
//         </div>
//       </div>
//     )}
//   </Layout>
// );
