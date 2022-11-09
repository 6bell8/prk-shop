/* eslint-disable */

import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState, useEffect, createContext } from "react";
import "./App.css";
import "./css/layout.css";
import bg from "./img/shoe.png";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from "axios";
import Cart from "./routes/Cart";

export let Context1 = createContext(); // state보관함

function App() {
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  // let shoesFind = props.shoes.find(function (shoes) {
  //   return 상품.id == id;
  // });
  let [isAdd, setIsAdd] = useState([]);
  //let [loadalert, setLoadalert] = useState(true);
  let [fade, setFade] = useState("");
  let [plus, setPlus] = useState(0);
  let [count, setCount] = useState(0);

  let navigate = useNavigate(); //일반적으로 함수형태 훅은 변수에 저장 Nav.Link onClick{()={변수명("/")}} 이런식으로 조작

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 1000);
    return () => {
      setFade("");
    };
  }, []);

  return (
    <div className={`App start ${fade}`}>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Prkshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/1");
              }}
            >
              Detail
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>
              <div className="container02">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card key={i} shoes={shoes[i]}></Card>;
                  })}
                </div>
              </div>
              <button
                onClick={() => [
                  //로딩 중 UI  띄우기
                  count == 0
                    ? axios
                        .get(
                          "https://gist.githubusercontent.com/6bell8/b54495cd5ef113c5e5048ca64876ee23/raw/a3659fd582e4ede9ee4c7b6482de324915bacf82/shoesData.json"
                        )

                        .then((result) => {
                          //가져온 데이터를 shoes라는 데이터에 추가해주세요
                          // []에서 알맹이만 벗겨서 {} 형태로 남김 ... 괄호를 벗겨주는 문법
                          let copy = [...shoes, ...result.data];
                          setShoes(copy);
                          setCount(count + 1);
                        })
                        .catch(() => {
                          console.log("실패했어용");
                          // catch는 if else의 문법과 비슷함
                          //로딩 중 UI  띄우기
                        })
                    : null,

                  // Promise.all([axios.get("/url1"), axios.get("/url2")]).then(
                  //   () => {
                  //     //이후 결과값을 알려주는 기능
                  //   }
                  // ),
                ]}
                className="plusBtn"
              >
                {/* useEffect로 1번 이상 클릭하면 button display none 처리하기 */}
                {count == 0 ? <div>더보기</div> : <p>Last</p>}
              </button>
            </>
          }
        />
        {/* //shoes를 data.js에서 받아오지않고 json 형식으로 서비에서 받아오기때문에 도메인이 안뜸 */}
        {/* Context1 이라는 보관함으로 state를 보관할 대상을 element안에서 묶어준다. */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />

        {/* nested 문법 핵심은 Route 괄호를 열어서 구성, path 앞부분은 제외 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버이름</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫 주문 시 적립금 5000원</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
      </Routes>
    </div>
  );
}

// nested route (Outlet) 하나의 컴포넌트안에 다른 컴포넌트가 있을 때 보여지게 하는 라이브러리

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + props.shoes.img} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;

//props문항에 i를 생성해서 컴포넌트에 던져줄 때 방식입니다.

// i = {1}
// i = {2}
// i = {3}

// src = https:naver{props.i(1 ~ 3표기)}.com
// src = {'https:naver'+ props.i +'.jpg''.com'}
