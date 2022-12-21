import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: MobileAppState = {
  items: {
    isRightNavVisible: false,
  },
};

export const mobileAppSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    toggleMobileRightNav: (state: MobileAppState) => {
      //   console.log("state:-", state, "action:-", action);
      state.items = {
        ...state.items,
        isRightNavVisible: !state.items.isRightNavVisible,
      };
    },
  },
});

// Action
export const { toggleMobileRightNav } = mobileAppSlice.actions;

//selectors
export const selectRightNavVisible = (state: RootState) =>
  state.mobile.items.isRightNavVisible;

export default mobileAppSlice.reducer;
