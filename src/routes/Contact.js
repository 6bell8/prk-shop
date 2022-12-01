/* eslint-disable */

import { memo, useEffect, useRef, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import BoardList from "./BoardList";
import Write from "./Write";
import axios from "axios";

function Contact() {
  let navigate = useNavigate();
  const dataId = useRef(0);
  let count = 0;
  const deleteBoard = function (id) {
    const filteredBoardData = boardData.filter((item, idx) => {
      return item.id !== id;
    });
    setBoardData(filteredBoardData);
  };

  const modifyBoard = function (id, localContents) {
    //console.log(localContents);
    const modifiedBoardData = boardData.map((item, idx) => {
      return item.id === id ? { ...item, contents: localContents } : item;
    });
    console.log(modifiedBoardData);
    setBoardData(modifiedBoardData);
  };

  const insertBoard = function (writer, contents, emotion) {
    console.log("writer===", writer);
    console.log("contents===", contents);
    console.log("emotion===", emotion);
    const inserBoardData = {
      writer: writer,
      contents: contents,
      emotion: emotion,
      date: new Date().getTime(),
      id: dataId.current,
    };
    dataId.current += 1;
    count += 1;
    console.log(dataId.current);
    setBoardData([inserBoardData, ...boardData]);
  };
  const [boardData, setBoardData] = useState([]);

  // 렌더링을 최소화 하기 위해서 쓴다.
  const boardAnalysis = useMemo(() => {
    console.log("일기분석을 시작합니다.");
    const total = boardData.length;
    const good = boardData.filter((item, idx) => {
      return item.emotion >= 3;
    }).length;
    const bad = total - good;
    const percent = Math.floor((good / total) * 100 * 100) / 100;
    return {
      good: good,
      bad: bad,
      percent: percent,
      total: total,
    };
  }, [boardData]);

  return (
    <div className="board">
      {/* <div className="boardTitle">
        <h4>
          <strong>문의 하기</strong>
        </h4>
        <p>문의 사항을 작성해주세요.</p>
      </div> */}
      <Write insertBoard={insertBoard} />
      <div className="boardListWrap"></div>
      <BoardList
        boardList={boardData}
        deleteBoard={deleteBoard}
        modifyBoard={modifyBoard}
      ></BoardList>
      <div className="boardPage"></div>
      <div className="btWrap">
        <button className="on" onClick={() => navigate("/write")}>
          글쓰기
        </button>
        <button onClick={() => navigate(-1)}> 뒤로가기</button>
      </div>
    </div>
  );
}

export default Contact;
