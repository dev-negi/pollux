import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

const initialState = {
  item: {
    name: '',
    details: '',
    price: 0,
    inventory: 0,
    tax: 5,
    isdiscount: false,
    vendor: {},
    variant: [],
    discount: [],
  },
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state: BasketState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct } = productSlice.actions

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
