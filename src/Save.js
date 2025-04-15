const arrOSaved = [];
const arrOfObj = [];

export function saveToFav(book) {
  arrOSaved.push(book.selfLink);
  arrOfObj.push(book);
}

export function checkIfliked(book) {
  if (arrOSaved.indexOf(book.selfLink) != -1) {
    return true;
  } else {
    return false;
  }
}

export function deleteFromSaved(book) {
  if (arrOSaved.indexOf(book.selfLink) != -1) {
    delete arrOSaved[arrOSaved.indexOf(book.selfLink)];
    delete arrOfObj[arrOSaved.indexOf(book.selfLink)];
  }
}

export function returnArr() {
  return arrOfObj;
}
