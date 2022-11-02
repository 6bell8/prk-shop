import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "park", age: 20 },

  // Redux state를 변경하는 법
  // - state 수정해주는 함수를 만들고
  // 원할 때 그 함수를 실행해달라고 Store.js에 요청

  reducers: {
    changeName(state) {
      state.name = "john";
    },
    // 파라미터에 a매서드 추가하고 payload(화물이라는 뜻)를 넣어주면 다른 js파일에서
    changeAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, changeAge } = user.actions;

export default user;
