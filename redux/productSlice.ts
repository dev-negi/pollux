import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

const initialState = {
  item: {
    name: '',
    details: '',
    images: [],
    price: 0,
    inventory: 0,
    tax: 5,
    isdiscount: false,
    vendor: '',
    variant: '',
    status: 'draft',
    discount: [],
    variantOption: {},
    variantData: [],
  },
}
function comboGen(combo) {
  const keys = Object.keys(combo)
  const variantDetails = {
    price: 0,
    costPerItem: 0,
    comparePrice: 0,
    quntity: 0,
    sku: '',
    barcode: '',
  }
  const results = []
  let temp = []
  keys.forEach((key) => {
    let flag = false

    if (results.length > 0) {
      flag = true
    }
    combo[key].forEach((el) => {
      if (flag) {
        const title = el['variantValue']
        const type = el
        results.forEach((item) => {
          const option = { ...item }
          option.title = `${option.title} / ${title}`
          option.varintType = [...option.varintType, el]
          temp.push({ ...option, variantDetails })
        })
      } else {
        const map = {
          title: el['variantValue'],
          varintType: [el],
          ...variantDetails,
        }
        results.push(map)
      }
    })
  })
  return temp.length ? temp : results
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.item = { ...state.item, ...action.payload }
    },
    addProductVariantOption: (state, action) => {
      console.log('addProductVariantOption:-', action)
      state.item = {
        ...state.item,
        variantOption: [...state.item.variantOption, action.payload],
      }
    },
    updateProductVariantOption: (state, action) => {
      const { variantKey, variantValue } = action.payload
      const newVariantOptions = { ...state.item.variantOption }
      const preData = newVariantOptions[variantKey] || []

      newVariantOptions[variantKey] = [...preData, action.payload]
      const newVariantData = comboGen(newVariantOptions)

      state.item = {
        ...state.item,
        variantOption: newVariantOptions,
        variantData: newVariantData,
      }
    },
    removeProductVariantOption: (state, action) => {
      const { variantKey, variantValue } = action.payload
      const newVariantOptions = { ...state.item.variantOption }
      const preData = newVariantOptions[variantKey](
        (newVariantOptions[variantKey] = preData.filter(
          (o) =>
            o.variantKey !== action.payload.variantKey ||
            o.variantValue !== action.payload.variantValue
        ))
      )
      state.item = {
        ...state.item,
        variantOption: newVariantOptions,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  addProduct,
  addProductVariantOption,
  updateProductVariantOption,
  removeProductVariantOption,
} = productSlice.actions

//selectors
export const selectProduct = (state: RootState) => state.product.item
export const selectVariantData = (state: RootState) =>
  state.product.item.variantData
// export const selectBasketItemsWithId = (state: RootState, id: string) => {
//   state.basket.items.filter((item: Product) => item._id === id);
// };

// export const selectBasketTotal = (state: RootState) =>
//   state.basket.items.reduce(
//     (total: number, item: Product) => (total += item.price),
//     0
//   );
export default productSlice.reducer
