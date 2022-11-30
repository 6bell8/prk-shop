import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import { useMemo, useRef, useState } from "react";

function App() {
  const dataId = useRef(0);
  // useRef는 화면이 렌더링 되어서 값이 초기화 되는걸 막고 싶을때 또는 Dom제어할때....
  // App.js에서 데이터 관리.... 자식에게 prop로 데이터 전달해서 거기서 함수 실행을 하고 부모에서
  // 데이터 바뀌는 걸 테스트 해봤음....
  let count = 0;
  const deleteDiary = function (id) {
    const filteredDiaryData = diaryData.filter((item, idx) => {
      return item.id !== id;
    });
    setDiaryData(filteredDiaryData);
  };

  const modifyDiary = function (id, localContents) {
    //console.log(localContents);
    const modifiedDiaryData = diaryData.map((item, idx) => {
      return item.id === id ? { ...item, contents: localContents } : item;
    });
    console.log(modifiedDiaryData);
    setDiaryData(modifiedDiaryData);
  };

  const insertDiary = function (writer, contents, emotion) {
    console.log("writer===", writer);
    console.log("contents===", contents);
    console.log("emotion===", emotion);
    const inserDiaryData = {
      writer: writer,
      contents: contents,
      emotion: emotion,
      date: new Date().getTime(),
      id: dataId.current,
    };
    dataId.current += 1;
    count += 1;
    console.log(dataId.current);
    setDiaryData([inserDiaryData, ...diaryData]);
  };
  const [diaryData, setDiaryData] = useState([]);
  /*
  const diaryData = [
    { id: 1, writer: "장성호", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 1, date: 1662512885838 },
    { id: 2, writer: "장동건", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 166551285838 },
    { id: 3, writer: "현빈", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 3, date: 1662812815838 },
    { id: 4, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662712815838 },
    { id: 5, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662912815838 },
    { id: 4, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662712815838 },
    { id: 5, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662912815838 },
  ];
*/
  // 렌더링을 최소화 하기 위해서 쓴다.
  const diaryAnalysis = useMemo(() => {
    console.log("일기분석을 시작합니다.");
    const total = diaryData.length;
    const good = diaryData.filter((item, idx) => {
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
  }, [diaryData]);

  return (
    <div className="App">
      <Header />
      <DiaryEditor insertDiary={insertDiary} />
      <div className="infoBox container">
        <dl>
          <dt>전체 : </dt>
          <dd>
            <strong>{diaryAnalysis.total}</strong>
          </dd>
        </dl>
        <dl>
          <dt>기분 좋은 날 : </dt>
          <dd>
            <strong>{diaryAnalysis.good}</strong>
          </dd>
        </dl>
        <dl>
          <dt>기분 더러운 날 : </dt>
          <dd>
            <strong>{diaryAnalysis.bad}</strong>
          </dd>
        </dl>
        <dl>
          <dt>퍼센트</dt>
          <dd>
            <strong>{diaryAnalysis.percent}%</strong>
          </dd>
        </dl>
      </div>
      <DiaryList
        diaryList={diaryData}
        deleteDiary={deleteDiary}
        modifyDiary={modifyDiary}
      />
      <Footer />
    </div>
  );
}

export default App;
