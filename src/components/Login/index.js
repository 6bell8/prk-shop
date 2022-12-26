/* eslint-disable */

import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  let navigate = useNavigate();
  let [data, setData] = useState({
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
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>로그인</h1>

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
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              로그인
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>새로운 계정</h1>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            type="button"
            className={styles.white_btn}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
