/* eslint-disable */

import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "./../store/userSlice";
import { addCount, removeItem } from "./../Store";
import { memo, useMemo, useState } from "react";

//memo의 기능은 꼭 필요할 때만(props)를 실행 시킬 떄만 재렌더링 해주세요 의 기능
// let Child = memo(function () {
//   console.log("재렌더링됨");
//   return <div>자식</div>;
// });

function 함수() {
  return;
}

// cart 재런더링 시에 자식 컴포넌트들도 재렌더링이 됨
// useMemo같은 함수로 작동시키면 렌더링 시 1회만 실행해줌
function Cart() {
  let state = useSelector(
    (state) => state

    // (state) => state.stock
    // state.stock ,user 으로 프로퍼티를 가져와서 개별적으로 사용할 수 있다.
    // {} return 동시 생략가능
  );

  //Store에서 변경 할 함수를 import해와서 변수를 생성하고 useDispatch 함수는 store로 요청을 보내주는 함수라고 생각하면 된다.

  let dispatch = useDispatch();
  // let [count, setCount] = useState(0);

  return (
    <div>
      {/* <Child count={count}></Child>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button> */}

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
          {/* return 문이랑 {} 랑 동시에 생략가능 */}
          {/* {반복문에 warning이 뜨는 이유는 key{i}를 입력하지않았기때문} */}
          {state.product.map((a, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{state.product[i].id}</td>
              <td>{state.product[i].name}</td>
              <td>
                {state.product[i].count}{" "}
                <button
                  onClick={() => {
                    //payloads로 id를 전송 함
                    dispatch(addCount(state.product[i].id));
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    //payloads로 id를 전송 함
                    dispatch(removeItem(state.product[i].id));
                  }}
                >
                  delete
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
