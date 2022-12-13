/* eslint-disable */

import React, { useState } from "react";

const Modal = ({ selectedData, handleCancel, handEditSubmit }) => {
  const [edited, setEdited] = useState(selectedData);

  const onCancel = () => {
    handleCancel();
  };

  const onEditChange = (e) => {
    setEdited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();
    handEditSubmit(edited);
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      username: item.username,
      email: item.email,
      phone: item.phone,
    };
    console.log(selectedData);
    setSelected(selectedData);
  };

  return (
    <div
      className="h-screen w-full fixed left-0 top-0 flex justify-center items-center 
    bg-black bg-opacity-50"
    >
      <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-semibold text-lg">게시판 수정 하기</h3>
          <i className="fas fa-times cursor-pointer" onClick={onCancel}></i>
        </div>
        <form onSubmit={onSubmitEdit}>
          <div className="p-3">
            <div>ID: {edited.id}</div>
            <div>
              Name
              <input
                className="border-2 border-gray-100"
                type="text"
                name="username"
                value={edited.name}
                onChange={onEditChange}
              />
            </div>
            <div>
              phone
              <input
                className="border-2 border-gray-100"
                type="text"
                name="username"
                value={edited.phone}
                onChange={onEditChange}
              />
            </div>
            <div>
              Q & A
              <input
                className="border-2 border-gray-100"
                type="text"
                name="username"
                value={edited.qa}
                onChange={onEditChange}
              />
            </div>
            <div className="flex justify-end items-center w-100 border-t p-3">
              <button
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white 
            mr-1 close-modal"
                onClick={onCancel}
              >
                취소
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white 
            mr-1 close-modal"
                onClick={onCancel}
              >
                수정
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
