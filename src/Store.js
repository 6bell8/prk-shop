/* eslint-disable */

//모든 스테이트를 redux안에 넣지말자

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

// 위의 state를 변수 처리해서 export해야 상위 파일에서 사용 할 수있음
//{}안에 변수를 키핑할 수 있다.

// [
//   { id: 0, name: "White and Black", count: 2 },
//   { id: 2, name: "Grey Yordan", count: 1 },
// ];

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
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    product: product.reducer,
    // product02: product02.reducer,
  },
});
