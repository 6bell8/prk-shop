import { useState, useRef } from "react";

export default function BoardItem({
  writer,
  id,
  emotion,
  contents,
  date,
  deleteBoard,
  modifyBoard,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [localContents, setLocalContents] = useState(contents);
  const contentsRef = useRef();
  return (
    <li className="BoardItem">
      <div className="info">
        <dl>
          <dt>글쓴이</dt>
          <dd>{writer}</dd>
        </dl>
        <dl>
          <dt>오늘의 기분</dt>
          <dd>{emotion}</dd>
        </dl>
        <dl>
          <dt>날짜</dt>
          <dd>{new Date(date).toLocaleString()}</dd>
        </dl>
        <div className="btns">
          {isEdit ? (
            <>
              <button
                className="btn"
                onClick={() => {
                  if (localContents.length < 10) {
                    alert("일기내용은 10글자 이상이어야 합니다.");
                    contentsRef.current.focus();
                    return;
                  }
                  modifyBoard(id, localContents);
                  setIsEdit(false);
                }}
              >
                <span className="material-icons">done</span>
              </button>
              <button
                className="btn"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                <span className="material-icons">close</span>
              </button>
            </>
          ) : (
            <>
              <button
                className="btn"
                onClick={() => {
                  setIsEdit(true);
                  setLocalContents(contents);
                }}
              >
                <span className="material-icons">edit</span>
              </button>
              <button
                className="btn"
                onClick={() => {
                  if (
                    window.confirm(`${id + 1}번째 다이어리를 지우겠습니까?`)
                  ) {
                    deleteBoard(id);
                  }
                }}
              >
                <span className="material-icons">delete</span>
              </button>
            </>
          )}
        </div>
      </div>
      {isEdit ? (
        <>
          <textarea
            ref={contentsRef}
            value={localContents}
            onChange={(e) => {
              setLocalContents(e.target.value);
            }}
          ></textarea>
        </>
      ) : (
        <div className="contents">{contents}</div>
      )}
    </li>
  );
}
