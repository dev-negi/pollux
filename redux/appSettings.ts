import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

const initialState = {
  items: {},
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings: (state, action) => {
      state.items = { ...state.items, ...action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateSettings } = settingsSlice.actions

//selectors
export const selectAppSettingsAll = (state: RootState) => state.settings.items
// export const selectProductStatusType = (state: RootState) => state.settings.items
export const selectAppSettingsFn = (settingType) => (state: RootState) =>
  state.settings?.items?.appsettings[settingType]

// export const selectToastItemsWithId = (state: RootState, id: string) => {
//   state.toaster.items.filter((item: Toast) => item._id === id);
// };

export default settingsSlice.reducer
