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
  reducers: {
    addCount(state, action) {
      // 하단의 파라미터는 state arr 안에 있는 데이터를 의미 함.
      // 결론은 id가 같은 상품을 찾아서 state에 몇번째 항목인지 표시해주는 것.
      let 번호 = state.findIndex((a) => {
        return a.id == action.payload;
      });
      state[번호].count++;
    },
    // 장바구니 추가하는 state
    // 기존 배열에다가 action.payload를 통해서 배열추가
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

//Redux state는 state 함수를 따로 export 해주어야한다.
export let { addCount, addItem, removeItem, addQuantity } = product.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    product: product.reducer,
    // product02: product02.reducer,
  },
});
