/* eslint-disable */

import React from "react";

const Td = ({ item, handleRemove, handleEdit }) => {
  const onRemove = () => {
    handleRemove(item.id);
    alert("삭제 하시겠습니까?");
  };

  const onEdit = () => {
    handleEdit(item);
  };

  return (
    <>
      <tr className="bg-white border-2 border-gray-200">
        <td className="px-4 py-3">{item.id}</td>
        <td className="px-4 py-3">{item.username}</td>
        <td className="px-4 py-3">{item.qa}</td>
        {/* <td className="px-4 py-3">{item.email}</td> */}
        <td className="px-4 py-3">{item.phone}</td>
        <td className="text-center text-purple-400 cursor-pointer show-modal">
          <button onClick={onEdit}>asd</button>
        </td>
        <td className="text-center text-purple-400 cursor-pointer ">
          <button onClick={onRemove}>asd</button>
        </td>
      </tr>
    </>
  );
};

export default Td;
