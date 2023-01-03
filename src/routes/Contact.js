/* eslint-disable */

import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tr from "./Tr";
import Post from "./Post";
import Modal from "./Modal";
import axios from "axios";

const Contact = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState("");
  const [modalOn, setModalOn] = useState(false);
  const [query, setQuery] = useState("");
  const nextId = useRef(11);

  const keys = ["username", "qa", "phone"];

  const search = (info) => {
    return info.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/6bell8/ef6a17fafcf4daf95845740f352faf84/raw/545e0660bfd00cb1ce18f6496bfeb204ab4121b2/contactData.json"
      )
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  info.sort((a, b) => b.id - a.id);

  const handleSave = (data) => {
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                username: data.username,
                qa: data.qa,
                email: data.email,
                phone: data.phone,
                website: data.website,
              }
            : row
        )
      );
    } else {
      setInfo((info) =>
        info.concat({
          id: nextId.current,
          username: data.username,
          qa: data.qa,
          email: data.email,
          phone: data.phone,
          website: data.website,
        })
      );
      nextId.current += 1;
    }
  };

  const handleRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      username: item.username,
      qa: item.qa,
      email: item.email,
      phone: item.phone,
      website: item.website,
    };
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  };

  const handleEditSubmit = (item) => {
    handleSave(item);
    setModalOn(false);
  };

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="text-xl font-bold mt-5 mb-3 text-center">문의 사항</div>

      <div className="searchBox">
        <input
          type="text"
          className="search"
          placeholder="검색어를 입력해주세요."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <table className="list min-w-full table-auto text-gray-800">
        <thead className="justify-between">
          <tr className="bg-gray-800">
            <th className="text-gray-300 px-4 py-3">번호</th>
            <th className="text-gray-300 px-4 py-3">이름</th>
            <th className="text-gray-300 px-4 py-3">문의사항</th>
            <th className="text-gray-300 px-4 py-3">연락처</th>
            <th className="text-gray-300 px-4 py-3">수정</th>
            <th className="text-gray-300 px-4 py-3">삭제</th>
          </tr>
        </thead>
        <Tr
          info={search(info)}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
          className="listItem"
        />
      </table>
      <Post onSaveData={handleSave} />
      {modalOn && (
        <Modal
          selectedData={selected}
          handleCancel={handleCancel}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default Contact;
