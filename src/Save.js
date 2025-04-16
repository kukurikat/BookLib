let arrOfObj = [];

export function saveToFav(book) {
  arrOfObj.push(book);
  localStorage.setItem("book", JSON.stringify(arrOfObj));
}

export function checkIfliked(book) {
  const arr = localStorage.getItem("book")
    ? JSON.parse(localStorage.getItem("book"))
    : [];
  if (arr.findIndex((o) => o.selfLink == book.selfLink) == -1) {
    return false;
  } else {
    return true;
  }
}
export function deleteFromSaved(book) {
  const arr = localStorage.getItem("book")
    ? JSON.parse(localStorage.getItem("book"))
    : [];
  arrOfObj = arr;
  console.log(arrOfObj.selfLink);
  console.log(book.selfLink);
  arrOfObj = arrOfObj.filter((obj) => obj.selfLink != book.selfLink);
  localStorage.setItem("book", JSON.stringify(arrOfObj));
}

export function returnArr() {
  arrOfObj = localStorage.getItem("book")
    ? JSON.parse(localStorage.getItem("book"))
    : [];
  return arrOfObj;
}
