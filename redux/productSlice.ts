import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { stat } from 'fs'

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
    costperitem: 0,
    compareprice: 0,
    quantity: 0,
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
    updateVariantData: (state, action) => {
      const { name, value, index } = action.payload
      const data = [...state.item.variantData]

      const updatedData = data.map((item, i) => {
        return i === index ? { ...item, [name]: value } : item
      })
      state.item = {
        ...state.item,
        variantData: updatedData,
      }
    },
    removeProductVariantOption: (state, action) => {
      const { variantKey, variantValue } = action.payload
      const newVariantData = [...state.item.variantData]
      const newVariantOptions = { ...state.item.variantOption }
      const preData = newVariantOptions[variantKey]

      const filterData = preData.filter(
        (o) =>
          o.variantKey !== action.payload.variantKey ||
          o.variantValue !== action.payload.variantValue
      )

      newVariantOptions[variantKey] = filterData

      const filterVariantData = newVariantData.filter((t) => {
        //TODO correnct spelling of varintTyep
        const filterOnVariant = t['varintType'].filter((o) => {
          return (
            o.variantKey !== action.payload.variantKey ||
            o.variantValue !== action.payload.variantValue
          )
        })

        if (filterOnVariant.length === t['varintType'].length) {
          return true
        }
        return false
      })

      state.item = {
        ...state.item,
        variantOption: newVariantOptions,
        variantData: filterVariantData,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  addProduct,
  updateVariantData,
  addProductVariantOption,
  updateProductVariantOption,
  removeProductVariantOption,
} = productSlice.actions

//selectors
export const selectProduct = (state: RootState) => state.product.item
export const selectVariantData = (state: RootState) =>
  state.product.item.variantData
export const selectVariantOption = (state: RootState) =>
  state.product.item.variantOption
export default productSlice.reducer
