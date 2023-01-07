import config from './config'
import client from './client'
import signToken from './auth'
import loginValidation from './loginValidation'
import getRegisterError from './getRegisterError'
import { urlForThubnail } from './image'
import { fetchCategories } from './data/fetchCategories'
import { fetchHomeHeroImages } from './data/fetchHeroHomeImages'
import { fetchProductDetails } from './data/productDetails'
import { createProduct } from './data/createProduct'
import { fetchProducts } from './data/fetchProdcuts'

import { productFormValidation } from './productFormValidation'
import { fetchVendors } from './data/vendors'

export * from './data/appSettings'
export * from './data/variants'
export * from './getProductTableColumn'
export * from './data/uploadImages'
export * from './groupby'

export {
  config,
  client,
  signToken,
  createProduct,
  urlForThubnail,
  loginValidation,
  getRegisterError,
  fetchCategories,
  fetchHomeHeroImages,
  fetchProductDetails,
  fetchProducts,
  productFormValidation,
  fetchVendors,
}
