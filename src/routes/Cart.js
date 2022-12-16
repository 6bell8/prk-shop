/* eslint-disable */

import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "./../store/userSlice";
import { addCount, minusCount, removeItem } from "./../Store";
import { memo, useMemo, useState } from "react";

function Cart() {
  let state = useSelector((state) => state);

  let dispatch = useDispatch();
  return (
    <div>
      <h6>
        {state.user.name} {state.user.age}의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(changeAge(100));
        }}
      >
        버튼
      </button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>장바구니 삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.product.map((a, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{state.product[i].id}</td>
              <td>{state.product[i].name}</td>
              <td>
                <button
                  onClick={() => {
                    state.product[i].count == 1
                      ? e.preventDefault()
                      : dispatch(minusCount(state.product[i].id));
                  }}
                >
                  <span className="material-icons">remove</span>
                </button>
                {state.product[i].count}{" "}
                <button
                  onClick={() => {
                    dispatch(addCount(state.product[i].id));
                  }}
                >
                  <span className="material-icons">add</span>
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    if (window.confirm("삭제하시겠습니까?")) {
                      dispatch(removeItem(state.product[i].id));
                    }
                  }}
                >
                  <span class="material-icons delete">delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
