/* eslint-disable */

import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Images(props) {
  const { data } = props;
  const [currentItems, setCurrentsItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentsItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="reviewImages">
        {currentItems.map((image) => {
          return (
            <div className="reviewImage">
              <img src={image.url} alt={image.title} />
              <h3 className="reviewTitle">{image.title}</h3>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagenation"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        // containerClassName은 위와 같은 형식으로 지정해주어야한다.
      />
    </>
  );
}
