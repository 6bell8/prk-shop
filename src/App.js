/* eslint-disable */

import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import "./css/layout.css";
import bg from "./img/shoe.png";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Prkshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/subBg01.jpg"}
              width="80%"
              className="subBg01"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "/subBg02.jpg"} width="80%" />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "/subBg03.jpg"} width="80%" />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div> */}

          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]}></Card>;
          })}
        </div>
      </div>
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

//props문항에 i를 생성해서 컴포넌트에 던져줄 때 방식

// i = {1}
// i = {2}
// i = {3}

// src = https:naver{props.i(1 ~ 3표기)}.com
// src = {'https:naver'+ props.i +'.jpg''.com'}
