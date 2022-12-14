/* eslint-disable */

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let product = createSlice({
  name: "product",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id == action.payload;
      });
      state[번호].count++;
    },

    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });

      state.splice(번호, 1);
    },
    addQuantity(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id == action.payload;
      });
      state[번호].count++;
    },
  },
});

export let { addCount, addItem, removeItem, addQuantity } = product.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    product: product.reducer,
  },
});
