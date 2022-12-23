import VariantType from './variantType.type'

export default interface Variant {
  barcode: string
  costperitem: number
  price: number
  quantity: number
  title: string
  varianttype: VariantType[]
}
