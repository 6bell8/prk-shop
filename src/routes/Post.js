/* eslint-disable */

import { useEffect, useState } from "react";

const Post = ({ onSaveData }) => {
  const [form, setForm] = useState({
    name: "",
    qa: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    console.timeLog(form);
    setForm({
      name: "",
      qa: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="">
        고객 추가하기
        <form
          className="'text-xl font-bold mt-5 mb-2 text-center'"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row mb-1">
            <label
              htmlFor="username"
              className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase"
            >
              Name
              <input
                className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                placeholder="이름을 입력해주세요"
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
              />
            </label>
            <label
              htmlFor="qa"
              className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase"
            >
              문의사항
              <input
                className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                placeholder="문의사항을 입력해주세요."
                type="qa"
                name="qa"
                value={form.qa}
                onChange={handleChange}
              ></input>
            </label>
          </div>
          <div className="flex flex-col md:flex-row">
            <label
              htmlFor="phone"
              className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase"
            >
              Phone
              <input
                className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                placeholder="핸드폰 번호를 입력해주세요."
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              ></input>
            </label>
          </div>
          <div className="text-center">
            <button
              className="bg-blue-400 py-2 text-center px-10 md:px-12 md:py-3 text-white 
                    rounded text-xl md:text-base mt-4"
              type="submit"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Post;
