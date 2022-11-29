/* eslint-disable */

import { Table } from "react-bootstrap";
import { memo, useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  return (
    <div className="board">
      <section className="title">
        <h4>
          <strong>문의 하기</strong>
        </h4>
        <p>문의 사항을 작성해주세요.</p>
      </section>

      <table className="boardTable">
        <colgroup>
          <col width="20%" />
          <col width="40%" />
          <col width="15%" />
          <col width="15%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>작성일</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>글제목</td>
            <td>박진성</td>
            <td>2022.11.28</td>
            <td>조회</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
