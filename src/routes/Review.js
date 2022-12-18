/* eslint-disable */

import React, { useEffect, useState } from "react";
import Images from "./Images";

function Review() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
      (response) =>
        response.json().then((data) => {
          setImages(data);
        })
    );
  }, []);

  return (
    <div className="review">
      {/* <Images element={images} /> */}
      <Images data={images} />
    </div>
  );
}

export default Review;
