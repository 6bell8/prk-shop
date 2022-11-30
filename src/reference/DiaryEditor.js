import { useState, useRef } from "react";
export default function DiaryEditor({ insertDiary }) {
  // const [writer, setWriter] = useState("");
  // const [contents, setContents] = useState("");
  // const [emotion, setEmotion] = useState(1);
  // obj = {name:"장성호",age:22,weight:90}
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
  const [diaryItem, setDiaryItem] = useState({
    writer: "",
    contents: "",
    emotion: 1,
  });
  const insertDiaryItem = function () {
    // console.log(diaryItem.writer);
    // console.log(diaryItem.contents);
    // console.log(diaryItem.emotion);
    if (diaryItem.writer.length < 3) {
      alert("글쓴이는 최소 3글자 이상이어야 합니다.");
      writerRef.current.focus();
      return false;
    } else if (diaryItem.contents.length < 10) {
      alert("내용은 최소 10글자 이상이어야 합니다.");
      contentsRef.current.focus();
      return false;
    }
    // 자식이 부모에게 데이터 전달하는 방법....
    insertDiary(diaryItem.writer, diaryItem.contents, diaryItem.emotion);
    alert("일기가 저장되었습니다.");
    setDiaryItem({
      writer: "",
      contents: "",
      emotion: 1,
    });
  };
  /*
  const changeWriter = function (e) {
    setWriter(e.target.value);
    console.log(e.target.value);
  };
  const changeContents = function (e) {
    setContents(e.target.value);
    console.log(e.target.value);
  };
  const changeEmotion = function (e) {
    setEmotion(e.target.value);
    console.log(e.target.value);
  };
  */
  const changeDiaryItem = function (e) {
    console.log(e.target.value);
    // 흩뿌리기....
    setDiaryItem({
      ...diaryItem,
      [e.target.name]: e.target.value,
    });
  };
  // const testObj = { name: "장동건", age: 30, weight: 90 };
  // const spreadObj = { ...testObj, name: "정형돈" };
  // console.log(spreadObj.name);

  // const arr01 = ["사자", "호랑이", "치타"];
  // const arr02 = [...arr01, " 표범"];
  // console.log(arr01);
  // console.log(arr02);

  return (
    <div className="container">
      <div className="section">
        <input type="text" name="writer" value={diaryItem.writer} id="" placeholder="이름을 입력해 주세요." onChange={changeDiaryItem} ref={writerRef} />
      </div>
      <div className="contents section">
        <textarea name="contents" id="" cols="30" rows="10" value={diaryItem.contents} placeholder="내용을 입력해 주세요." onChange={changeDiaryItem} ref={contentsRef}></textarea>
      </div>
      <div className="section">
        <span>오늘 하루 어땠나요?</span>
        <select name="emotion" id="" value={diaryItem.emotion} onChange={changeDiaryItem}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {/* {radioList.map((item, idx) => {
          console.log(diaryItem.emotion === item.emotion);
          return (
            <label key={idx}>
              <span>{item.txt}</span>
              <input type="radio" name="emotion" value={item.emotion} checked={diaryItem.emotion === item.emotion} id="" onChange={changeDiaryItem} />
            </label>
          );
        })} */}
        {/* <label>
          <span>좋아요</span>
          <input type="radio" name="emotion" value="1" checked={diaryItem.emotion === "1"} id="" onChange={changeDiaryItem} />
        </label>
        <label>
          <span>나빠요</span>
          <input type="radio" name="emotion" value="2" checked={diaryItem.emotion === "2"} onChange={changeDiaryItem} id="" />
        </label>
        <label>
          <span>시르다</span>
          <input type="radio" name="emotion" value="3" checked={diaryItem.emotion === "3"} onChange={changeDiaryItem} id="" />
        </label>
        <label>
          <span>감동이에요</span>
          <input type="radio" name="emotion" value="4" checked={diaryItem.emotion === "4"} onChange={changeDiaryItem} id="" />
        </label>
        <label>
          <span>화나요</span>
          <input type="radio" name="emotion" value="5" checked={diaryItem.emotion === "5"} onChange={changeDiaryItem} id="" />
        </label> */}
      </div>
      <div className="btns section">
        <button className="btn btnSave" onClick={insertDiaryItem}>
          SAVE
        </button>
      </div>
    </div>
  );
}
