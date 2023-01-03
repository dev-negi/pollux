import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './basketSlice'
import toasterReducer from './toastSlice'
import mobileAppSlice from './mobileAppSlice'
import appSettings from './appSettings'
import productSlice from './productSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    toaster: toasterReducer,
    mobile: mobileAppSlice,
    settings: appSettings,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
