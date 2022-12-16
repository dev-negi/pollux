import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";

import Layout from "./Layout";
import Button from "../rango/Button";
import { urlForThubnail } from "../utils";
import { addToBasket } from "../redux/basketSlice";

function ProductPage({ product }) {
  const dispatch = useDispatch();

  const addToBasketHandler = () => {
    console.log("addToBasket clicked");
    dispatch(addToBasket(product));
  };

  return (
    <Layout>
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
              <Button
                title="Add To Cart"
                width="w-50"
                height="h-10"
                color="bg-indigo-600"
                hoverColor="bg-indigo-500"
                onClick={addToBasketHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductPage;
