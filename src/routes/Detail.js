/* eslint-disable */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import styled from "styled-components";

// let YellowBtn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg == "blue" ? "white" : "black")};
//   padding: 10px;
// `;

// let Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;

function Detail(props) {
  useEffect(
    () => {
      //mount update시에 실행 되는 hook
      //useEffect안에 있는 코드는 하단에 있는 html이 다 실행이 되어야 console.log가 실행이 된다. 더 유용
      //useEffect안에 적는 코드들은 어려운 연산, 서버에서 데이터를 가져오는 작업, 타이머를 장착하는 작업

      let a = setTimeout(() => {
        setAlert(false);
      }, 2000);
      return () => {
        //useEffect 실행이 되기 전에 return code가 실행이 먼저된다.
        //브라우저 내에 타이머가 여러 개가 있을 때 기존에 있는 타이머를 제거하고 사용하면 보다 효율적이다. // 소위 clean up function

        // 기존 서버에 데이터를 요청하는 경우 기존 데이터를 지우지않으면 반복되기때문에 return 함수에서 요청을해서 지우면 좋다
        console.log(1);
        clearTimeout(a);
      };
    },
    []
    // []에 변수가 변할 때만 실행이 되는 조건을 넣을 수 있다. 혹은 []를 설정해놓으면 변하지않는다. unEffect가 실행 되지않는다.
  );

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.cord == id);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초 이내에 구입 시 할인</div>
      ) : null}

      {count}
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img src={찾은상품.img} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
