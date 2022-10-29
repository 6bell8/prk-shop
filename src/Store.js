/* eslint-disable */

//모든 스테이트를 redux안에 넣지말자

import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
});

// [
//   { id: 0, name: "White and Black", count: 2 },
//   { id: 2, name: "Grey Yordan", count: 1 },
// ];

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let product01 = createSlice({
  name: "product01",
  initialState: { id: 0, name: "White and Black", count: 2 },
});

// let product02 = createSlice({
//   name: "product02",
//   initialState: { id: 2, name: "Grey Yordan", count: 1 },
// });

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    product01: product01.reducer,
    // product02: product02.reducer,
  },
});
