import Link from 'next/link'
import Image from 'next/image'

import { urlForThubnail } from '../utils'
import ProductImage from './ProductImage'

function ProductItem({ product }) {
  return (
    <div className="card">
      <div className="overflow-x-hidden rounded-2xl relative">
        <Link href={`/product/${product.slug.current}`}>
          {product.image?.length > 0 ? (
            <img
              className="h-70 rounded-2xl w-full object-cover"
              src={urlForThubnail(product?.image[0])?.url()}
            />
          ) : null}
        </Link>
        <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:opacity-50 opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </p>
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-0">
            {product.title}
          </p>
          <p className="text-md text-gray-800 mt-0">{product.price}</p>
        </div>
        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
