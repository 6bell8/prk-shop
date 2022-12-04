/* eslint-disable */

import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tr from "./Tr";
import Post from "./Post";
import Modal from "./Modal";
import axios from "axios";

function Contact() {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modalOn, setModalOn] = useState([false]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/6bell8/ef6a17fafcf4daf95845740f352faf84/raw/e89a7afaa9ba5ea88f3a4605049345affe15f458/contactData.json"
      )
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  });

  const handleSave = (data) => {
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
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
          name: data.name,
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
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
    };
    console.log(selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  };

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  };

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="text-xl font-bold mt-5 mb-3 text-center">문의 사항</div>
      <table className="min-w-full table-auto text-gray-800">
        <thead className="justify-between">
          <tr className="bg-gray-800">
            <th className="text-gray-300 px-4 py-3">ID</th>
            <th className="text-gray-300 px-4 py-3">Name</th>
            <th className="text-gray-300 px-4 py-3">Phone No</th>
            <th className="text-gray-300 px-4 py-3">Edit</th>
            <th className="text-gray-300 px-4 py-3">Delete</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
      </table>
      {/* <Post onSaveData={handleSave} />
      {modalOn && (
        <Modal
          selectedData={selected}
          handleCancel={handleCancel}
          handleEditSubmit={handleEditSubmit}
        />
      )} */}
    </div>
  );
}

export default Contact;
