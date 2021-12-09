import "./settings.scss";
import { setData } from "../utils/localStorage/localStorage.js";

window.onload = function () {
  const button = document.querySelector(".saveBtn");
  button.addEventListener("click", console.log("dupa"));
  console.log(button);
};

// console.log("asdas");

// const dupaFunction = () => {
//   console.log("masło");
// };

// console.log(saveBtn);

// console.log("B", saveBtn);
// const inp = document.querySelector("input");
// const saveBtn = document.querySelector(".saveBtn");

// console.log(document.querySelector(".saveBtn"));

// saveBtn.addEventListener("click", console.log(setData));
// console.log("c", saveBtn);
