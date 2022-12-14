/* eslint-disable */

import React, { useState } from "react";

const Modal = ({ selectedData, handleCancel, handleEditSubmit }) => {
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
    handleEditSubmit(edited);
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
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
      <div className="bg-white rounded shadow-lg w-10/12 md:w-1/2">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-semibold text-lg">문의사항 수정 하기</h3>
          <span class="material-symbols-outlined" onClick={onCancel}>
            close
          </span>
        </div>
        <form onSubmit={onSubmitEdit}>
          <div className="p-3">
            <div>
              <span className="title">Name</span>
              <input
                className="border-2 border-gray-100 "
                type="text"
                name="username"
                value={edited.username}
                onChange={onEditChange}
              />
            </div>
            <div>
              <span className="title">phone</span>
              <input
                className="border-2 border-gray-100"
                type="text"
                name="phone"
                maxlength="20"
                value={edited.phone}
                onChange={onEditChange}
              />
            </div>
            <div className="qaBackform">
              <span className="title ">Q & A</span>
              <textarea
                className="border-2 border-gray-100 backform"
                type="text"
                name="qa"
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
              {
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-1 
                rounded text-white"
                >
                  수정
                </button>
              }
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
