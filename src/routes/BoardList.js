import BoardItem from "./BoardItem";

export default function BoardList({ boardList, deleteBoard, modifyBoard }) {
  console.log(boardList);
  const total = boardList.length;
  return (
    <div className="boardList">
      <div className="container">
        <div className="titleBox">
          <h2>문의 하기</h2>
          <p className="total">{total}개의 문의사항이 있습니다.</p>
        </div>
        <ul className="list">
          {boardList.map((item, idx) => {
            return (
              <BoardItem
                key={idx}
                {...item}
                deleteBoard={deleteBoard}
                modifyBoard={modifyBoard}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
