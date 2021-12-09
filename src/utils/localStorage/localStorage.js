export function setData(name) {
  localStorage.setItem("name", name);

  if (localStorage.key(0) !== "") {
    localStorage.getItem("name");
  }
  console.log("dupa");
}

// exports.modules = { setData };
