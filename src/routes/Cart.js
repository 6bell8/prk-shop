/* eslint-disable */

import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let a = useSelector(
    (state) => state

    // (state) => state.stock
    // state.stock ,user 으로 프로퍼티를 가져와서 개별적으로 사용할 수 있다.
    // {} return 동시 생략가능
  );

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{a.product01.id}</td>
            <td>{a.product01.name}</td>
            <td>{a.product01.count}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

// function Product(state) {
//   return (
//     <tr>
//       <td>1</td>
//       <td>{a.product01.id}</td>
//       <td>{a.product01.name}</td>
//       <td>{a.product01.count}</td>
//     </tr>
//   );
// }

export default Cart;
