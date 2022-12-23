import config from './config'
import client from './client'
import signToken from './auth'
import loginValidation from './loginValidation'
import getRegisterError from './getRegisterError'
import { urlForThubnail } from './image'
import { fetchCategories } from './data/fetchCategories'
import { fetchHomeHeroImages } from './data/fetchHeroHomeImages'

export {
  config,
  client,
  signToken,
  urlForThubnail,
  loginValidation,
  getRegisterError,
  fetchCategories,
  fetchHomeHeroImages,
}
