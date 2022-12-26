/* eslint-disable */

// import styles from "./styles/module.css";
// import "./css/layout.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  let navigate = useNavigate();
  let [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  let [error, setError] = useState("");

  let handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <button
            onClick={() => {
              navigate("/login");
            }}
            type="button"
            className={styles.white_btn}
          >
            로그인{" "}
          </button>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>회원가입 </h1>
            <input
              type="text"
              placeholder="성을 입력하세요."
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="이름을 입력하세요."
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              className={styles.input}
            />
            <input
              type="email"
              placeholder="이메일을 입력하세요."
              name="email"
              onChange={handleChange}
              value={data.email}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              name="password"
              onChange={handleChange}
              value={data.password}
              className={styles.input}
            />
            {error && <div className={style.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              {" "}
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
