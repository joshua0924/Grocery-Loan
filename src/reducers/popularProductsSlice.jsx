import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  Today: [],
  Week: [],
  Month: [],
  loading: false,
  error: null,
};
const popularProductsSlice = createSlice({
  name: "popularProducts",
  initialState,
  reducers: {
    fetchPopularProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPopularProductsSuccess(state, action) {
      state[action.payload.timePeriod] = action.payload.products;
      state.loading = false;
      state.error = null;
    },
    fetchPopularProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  fetchPopularProductsStart,
  fetchPopularProductsSuccess,
  fetchPopularProductsFailure,
} = popularProductsSlice.actions;
export const fetchPopularProducts = (timePeriod) => async (dispatch) => {
  dispatch(fetchPopularProductsStart());
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products?sort=rating&limit=10`
    );
    let products;
    switch (timePeriod) {
      case "Today":
        products = response.data.slice(0, 3);
        break;
      case "Week":
        products = response.data.slice(0, 6);
        break;
      case "Month":
        products = response.data.slice(0, 10);
        break;
      default:
        products = response.data.slice(0, 3);
    }
    dispatch(fetchPopularProductsSuccess({ timePeriod, products }));
  } catch (error) {
    dispatch(fetchPopularProductsFailure(error.message));
  }
};
export const selectPopularProductsForTimePeriod = (timePeriod) => (state) =>
  state.popularProducts[timePeriod];
export default popularProductsSlice.reducer;
