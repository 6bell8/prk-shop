/* eslint-disable */

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import data from "./../data.js";
import { addItem, addQuantity } from "../Store";
import { useDispatch, useSelector } from "react-redux";

function Detail(props) {
  let state = useSelector((state) => state);

  let navigate = useNavigate();

  let order = () => {
    const dupValue = state.product.findIndex((x) => x.id === 찾은상품.id);

    dupValue !== -1
      ? dispatch(addQuantity(state.product[dupValue].id))
      : dispatch(addItem({ id: 찾은상품.id, name: 찾은상품.title, count: 1 }));
  };

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 5000);

    return () => {};
  }, []);

  let [탭, 탭변경] = useState(0);
  let [num, setNum] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    let 꺼낸거 = localStorage.getItem("watched");
    let 꺼낸거2 = localStorage.getItem("watched2");
    let 꺼낸거3 = localStorage.getItem("watched3");
    꺼낸거 = JSON.parse(꺼낸거);
    꺼낸거2 = JSON.parse(꺼낸거2);
    꺼낸거3 = JSON.parse(꺼낸거3);
    꺼낸거.unshift(찾은상품.img);
    꺼낸거2.unshift(찾은상품.title);
    꺼낸거3.unshift(찾은상품.id);
    꺼낸거 = new Set(꺼낸거);
    꺼낸거2 = new Set(꺼낸거2);
    꺼낸거3 = new Set(꺼낸거3);
    꺼낸거 = Array.from(꺼낸거);
    꺼낸거2 = Array.from(꺼낸거2);
    꺼낸거3 = Array.from(꺼낸거3);

    localStorage.setItem("watched", JSON.stringify(꺼낸거));
    localStorage.setItem("watched2", JSON.stringify(꺼낸거2));
    localStorage.setItem("watched3", JSON.stringify(꺼낸거3));
  }, []);

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [isCheck, setIsCheck] = useState(true);

  const changeCheck = () => {
    setIsCheck((check) => !check);
  };

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
        <div className="alert alert-warning">재고가 얼마 남지않았어요!</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img src={찾은상품.img} width="100%" alt="not found image" />
        </div>
        <div className="col-md-6 detail">
          <button>
            {isCheck ? (
              <span onClick={changeCheck} className="material-icons">
                favorite_border
              </span>
            ) : (
              <span onClick={changeCheck} className="material-icons heart">
                favorite_border
              </span>
            )}
          </button>

          <h4 className="pt-5">{찾은상품.title}</h4>
          <p className="contents">{찾은상품.content}</p>
          <p className="price">{찾은상품.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              {
                if (window.confirm("주문 하시겠습니까?")) {
                  dispatch(order);
                  navigate("/cart");
                } else {
                  alert("취소합니다.");
                }
              }
            }}
          >
            주문하기
          </button>
          <button className="btn btn-danger btn02" onClick={() => navigate(-1)}>
            뒤로가기
          </button>
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

function TabContent({ 탭 }) {
  let [shoes, setShoes] = useState(data);
  let [fade01, setFade01] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade01("end");
    }, 100);
    return () => {
      setFade01("");
    };
  }, [탭]);

  return (
    <div className={`start ${fade01}`}>
      {
        [
          <div>{shoes[0].title}</div>,
          <div>{shoes[1].title}</div>,
          <div>{shoes[2].title}</div>,
        ][탭]
      }
    </div>
  );
}

export default Detail;
