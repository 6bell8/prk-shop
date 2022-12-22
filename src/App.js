/* eslint-disable */

import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState, useEffect, createContext, lazy, Suspense } from "react";
import "./App.css";
import "./css/layout.css";
import bg from "./img/shoe.png";
import coupon from "./img/coupon.png";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

const Detail = lazy(() => import("./routes/Detail"));
const Cart = lazy(() => import("./routes/Cart"));
const Contact = lazy(() => import("./routes/Contact"));
const Review = lazy(() => import("./routes/Review"));
const Coupon = lazy(() => import("./routes/Coupon"));

function App() {
  let obj = { name: "kim" };
  localStorage.setItem("data", JSON.stringify(obj));
  let 꺼낸거 = JSON.parse(localStorage.getItem("watched"));
  let 꺼낸거2 = JSON.parse(localStorage.getItem("watched2"));
  let 꺼낸거3 = JSON.parse(localStorage.getItem("watched3"));

  axios.get("http://localhost:1337/api/shops").then((response) => {
    console.log(response);
  });

  let result = useQuery("작명", () => {
    return axios
      .get(
        "https://gist.githubusercontent.com/6bell8/c2b4dcb1c92bb4ad2eda5726cdc808b2/raw/cc663f107eba9588f6ec45e0e3ce660ab0d9776f/user.json"
      )
      .then((a) => {
        return a.data;
      });
  });

  result.data;
  result.isLoading;
  result.error;

  useEffect(() => {
    if (localStorage.getItem("watched") === null) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
    if (localStorage.getItem("watched2") === null) {
      localStorage.setItem("watched2", JSON.stringify([]));
    }
    if (localStorage.getItem("watched3") === null) {
      localStorage.setItem("watched3", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    꺼낸거 === null
      ? localStorage.setItem("watched", JSON.stringify([]))
      : null;
  }, []);

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let [fade, setFade] = useState("");
  let [plus, setPlus] = useState(0);
  let [count, setCount] = useState(2);
  let [view, setView] = useState(true);
  let navigate = useNavigate();

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
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            Prkshop
          </Navbar.Brand>
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
                navigate("/detail/0");
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
            </Nav.Link>{" "}
            <Nav.Link
              onClick={() => {
                navigate("/review");
              }}
            >
              Review
            </Nav.Link>{" "}
            <Nav.Link
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>

          <Nav className="msAuto">
            반갑습니다. {result.isLoading && "로딩중"}
            {result.error && "에러"}
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Suspense
        fallback={
          <div className="loading">
            <h3>로딩 중 입니다.</h3>
            <h5>잠시만 기다려주세요.</h5>
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url(" + bg + ")" }}
                ></div>
                <div className="cartBox">
                  <p style={{ margin: "10px" }}>최근 본 상품</p>

                  {꺼낸거 !== null
                    ? 꺼낸거.map((a, i) => {
                        return (
                          <div className="watchedItem" key={i}>
                            <Nav.Link
                              onClick={() => {
                                navigate("/detail/" + 꺼낸거3[i]);
                              }}
                            >
                              <img
                                src={`${꺼낸거[i]}`}
                                className="localImg"
                              ></img>
                            </Nav.Link>
                            <p className="name">{꺼낸거2[i]}</p>
                          </div>
                        );
                      })
                    : null}
                </div>
                <div className="container02">
                  <div className="row">
                    {shoes.map((a, i) => {
                      return <Card key={i} shoes={shoes[i]}></Card>;
                    })}
                  </div>
                </div>

                {view == true ? (
                  <button
                    onClick={() => {
                      axios
                        .get(
                          `https://codingapple1.github.io/shop/data${count}.json`
                        )
                        .then((result) => {
                          setCount(++count);
                          let copy = [...shoes, ...result.data];
                          setShoes(copy);
                        })
                        .catch(() => {
                          setView(false);
                          console.log("실패했어용");
                        });
                    }}
                    className="plusBtn"
                  >
                    상품 더 보기
                  </button>
                ) : null}
              </>
            }
          />

          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>멤버이름</div>} />
            <Route path="location" element={<div>위치정보</div>} />
          </Route>
          <Route path="/event" element={<Event />}>
            <Route path="one" element={<Coupon />}></Route>
            <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
          </Route>
          <Route path="*" element={<div>없는 페이지입니다.</div>} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  let navigate = useNavigate();

  return (
    <div>
      <p className="eventTitle01">오늘의 이벤트</p>
      <button
        onClick={() => {
          navigate("one");
        }}
      >
        <p className="eventTitle02">첫번째</p>
      </button>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  let navigate = useNavigate();
  return (
    <div className="col-md-4">
      {/* onClick={() => {
          navigate("one");
        }} */}
      <Nav.Link
        onClick={() => {
          navigate("/detail/" + props.shoes.id);
        }}
      >
        <img
          src={`https://codingapple1.github.io/shop/shoes${
            props.shoes.id + 1
          }.jpg`}
          alt="not found image"
          width="80%"
        />
      </Nav.Link>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
