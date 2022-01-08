import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },

  reducers: {
    getProductsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } =
  productSlice.actions;
export default productSlice.reducer;
