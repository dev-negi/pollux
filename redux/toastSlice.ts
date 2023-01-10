import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface ToasterState {
  items: Toast[]
}

const initialState: ToasterState = {
  items: [],
}

export const toastSlice = createSlice({
  name: 'toaster',
  initialState,
  reducers: {
    addToToastList: (state: ToasterState, action: PayloadAction<Toast>) => {
      console.log('add to:-', state.items, action.payload)
      state.items = [...state.items, action.payload]
    },
    removeFromToastList: (
      state: ToasterState,
      action: PayloadAction<{ id: string }>
    ) => {
      console.log(
        'remove to:-',
        state,
        action.payload,
        typeof action.payload.id
      )
      const index = state.items.findIndex((item: Toast) => {
        console.log('print index:-', item.id)
        return item.id === action.payload.id
      })
      let newToast = [...state.items]

      if (index >= 0) {
        newToast.splice(index, 1)
      } else {
        console.log(
          `Can't remvoe toaster (id:${action.payload.id}) as its not in toast list!`
        )
      }
      state.items = newToast
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToToastList, removeFromToastList } = toastSlice.actions

//selectors
export const selectToastItems = (state: RootState) => state.toaster.items
export const selectToastItemsWithId = (state: RootState, id: string) => {
  state.toaster.items.filter((item: Toast) => item._id === id)
}

export default toastSlice.reducer
