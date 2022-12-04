/* eslint-disable */

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Write() {
  let navigate = useNavigate();
  const dataId = useRef(0);
  let count = 0;

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
  const radioList = [
    {
      emotion: 1,
      txt: "좋아요",
    },
    {
      emotion: 2,
      txt: "시르다",
    },
    {
      emotion: 3,
      txt: "화나요",
    },
    {
      emotion: 4,
      txt: "별로에요",
    },
    {
      emotion: 5,
      txt: "감동이에요",
    },
  ];
  const writerRef = useRef();
  const contentsRef = useRef();
  const [boardItem, setBoardItem] = useState({
    writer: "",
    contents: "",
    emotion: 1,
  });
  const insertBoardItem = function () {
    if (boardItem.writer.length < 3) {
      alert("작성자는 최소 3글자 이상이어야 합니다.");
      writerRef.current.focus();
      return false;
    } else if (boardItem.contents.length < 10) {
      alert("내용은 최소 10글자 이상이어야 합니다.");
      contentsRef.current.focus();
      return false;
    }
    // 자식이 부모에게 데이터 전달하는 방법....

    insertBoard(boardItem.writer, boardItem.contents, boardItem.emotion);
    alert("게시글이 저장되었습니다.");
    setBoardItem({
      writer: "",
      contents: "",
      emotion: 1,
    });
    navigate("/contact");
  };

  const changeBoardItem = function (e) {
    console.log(e.target.value);
    // 흩뿌리기....
    setBoardItem({
      ...boardItem,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="section">
        <input
          type="text"
          name="writer"
          value={boardItem.writer}
          id=""
          placeholder="이름을 입력해 주세요."
          onChange={changeBoardItem}
          ref={writerRef}
        />
      </div>
      <div className="contents section">
        <textarea
          name="contents"
          id=""
          cols="30"
          rows="10"
          value={boardItem.contents}
          placeholder="내용을 입력해 주세요."
          onChange={changeBoardItem}
          ref={contentsRef}
        ></textarea>
      </div>
      <div className="section">
        <span>서비스를 평가해주세요.</span>
        <select
          name="emotion"
          id=""
          value={boardItem.emotion}
          onChange={changeBoardItem}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="btns section">
        <button className="btn btnSave" onClick={insertBoardItem}>
          SAVE
        </button>
      </div>
    </div>
  );
}
export default Write;
