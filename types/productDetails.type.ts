import Image from './Image.type'
import Slug from './slug.type'
import Discount from './discount.type'
import Variant from './variant.type'

export default interface ProductDetails {
  _id: string
  discount: Discount[]
  image: Image[]
  isdiscount: boolean
  slug: Slug
  tax: number
  variant: Variant[]
  vendor: string
}
