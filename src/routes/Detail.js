/* eslint-disable */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

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
      }, 4000);
      return () => {
        //useEffect 실행이 되기 전에 return code가 실행이 먼저된다.
        //브라우저 내에 타이머가 여러 개가 있을 때 기존에 있는 타이머를 제거하고 사용하면 보다 효율적이다. // 소위 clean up function

        // 기존 서버에 데이터를 요청하는 경우 기존 데이터를 지우지않으면 반복되기때문에 return 함수에서 요청을해서 지우면 좋다
        console.log(1);
        // clearTimeout(a);
      };
    },
    []
    // []에 변수가 변할 때만 실행이 되는 조건을 넣을 수 있다. 혹은 []를 설정해놓으면 변하지않는다. unEffect가 실행 되지않는다.
  );

  //3가지 종류를 표현 할 수 있는 숫자를 state로 표현
  let [탭, 탭변경] = useState(0);
  let [num, setNum] = useState("");

  // useEffect(() => {
  //   if (isNaN(num) == true) {
  //     alert("그러지마세요");
  //   }
  // }, [num]);

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);

  let [Fade02, setFade02] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade02("end");
    }, 1000);
    return () => {
      setFade02("");
    };
  }, []);

  return (
    <div className={`container start ${Fade02}`}>
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
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link1">
        <Nav.Item>
          <Nav.Link onClick={() => [탭변경(0)]} eventKey="link1">
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => [탭변경(1)]} eventKey="link2">
            버튼2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => [탭변경(2)]} eventKey="link3">
            버튼3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭}></TabContent>
    </div>
  );
}

//else if 세개이상 지문이 있을 때 이게 아니면 else if로 진행해주세요 라는 의미

// component는 반드시 return문을 추가해서 작성을 해야합니다.

//1. {탭}을 props에 넣어줘도 괜찮다 //2. 탭 state가 변할 떄 마다 end를 부착
function TabContent({ 탭 }) {
  // if (탭 == 0) {
  //   return <div>내용0</div>;
  // }
  // if (탭 == 1) {
  //   return <div>내용1</div>;
  // }
  // if (탭 == 2) {
  //   return <div>내용2</div>;
  // }

  //특정코드가 변할 때 마다 붙여주는 usestate

  let [fade01, setFade01] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade01("end");
    }, 100);
    return () => {
      //clean up code 코드를 실행하기 이전에 return에 있는 코드를 먼저 실행시켜주는 것

      setFade01("");
    };
  }, [탭]);

  // html이 길면 소괄호를 쳐주는 것이 안정적임
  return (
    <div className={`start ${fade01}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
