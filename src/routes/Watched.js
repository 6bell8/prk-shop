import { useState } from "react";
import { Route } from "react-router-dom";
import data from "./../data.js";

let [shoes, setShoes] = useState(data.slice(0, 3));
let [shoesAll, setShoesAll] = useState(data.slice(0, 3));

<Route exact path="/">
  <Main shoes={shoes} setShoes={setShoes} shoesAll={shoesAll}></Main>
</Route>;

export default Watched;
