/* eslint-disable */

import React from "react";
import { useNavigate } from "react-router-dom";

const Td = ({ item, handleRemove, handleEdit }) => {
  // let navigate = useNavigate();

  const onRemove = (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      alert("삭제되었습니다.");
      handleRemove(item.id);
    } else {
      alert("취소합니다.");
    }
  };

  const onEdit = () => {
    handleEdit(item);
  };

  return (
    <>
      <tr className="bg-white border-2 border-gray-200">
        <td className="px-4 py-3">{item.id}</td>
        <td className="px-4 py-3">{item.username}</td>
        <td className="px-4 py-3 qaDetail">{item.qa}</td>
        <td className="px-4 py-3">{item.phone}</td>
        <td className="text-center text-purple-400 cursor-pointer show-modal">
          <button onClick={onEdit}>수정</button>
        </td>
        <td className="text-center text-purple-400 cursor-pointer ">
          <button onClick={onRemove}>삭제</button>
        </td>
      </tr>
    </>
  );
};

export default Td;
