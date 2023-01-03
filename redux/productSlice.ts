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
    discount: [],
    variantOption: [],
  },
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.item = { ...state.item, ...action.payload }
    },
    addProductVariantOption: (state, action) => {
      state.item = { ...state.item, variantOption: [...action.payload] }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, addProductVariantOption } = productSlice.actions

//selectors
export const selectProduct = (state: RootState) => state.product.item
// export const selectBasketItemsWithId = (state: RootState, id: string) => {
//   state.basket.items.filter((item: Product) => item._id === id);
// };

// export const selectBasketTotal = (state: RootState) =>
//   state.basket.items.reduce(
//     (total: number, item: Product) => (total += item.price),
//     0
//   );
export default productSlice.reducer
