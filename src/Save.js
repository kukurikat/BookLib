let user = {
  name: "",
  email: "",
  password: "",
  books: [],
};
export function setUsers(name, email, password, isLogin) {
  const arrofUsers = localStorage.getItem("book")
    ? JSON.parse(localStorage.getItem("book"))
    : [];
  if (!isLogin) {
    if (
      arrofUsers.findIndex((o) => o.name == name) == -1 &&
      arrofUsers.findIndex((o) => o.email == email) == -1
    ) {
      user.name = name;
      user.email = email;
      user.password = password;
      user.books = [];
      arrofUsers.push(user);
      localStorage.setItem("book", JSON.stringify(arrofUsers));
    } else {
      alert("User already exists");
    }
  } else {
    const userIndex = arrofUsers.findIndex((o) => o.name == name);
    if (userIndex != -1) {
      console.log(password);
      if (arrofUsers[userIndex].password === password) {
        console.log(user);
        user = arrofUsers[userIndex];
      } else {
        alert("Wrong password");
      }
    } else {
      alert("User not found");
    }
  }
}

export function saveToFav(book) {
  const arrofUsers = localStorage.getItem("book")
    ? JSON.parse(localStorage.getItem("book"))
    : [];
  if (!user.books) {
    user.books = [];
  }
  user.books.push(book);
  const userIndex = arrofUsers.findIndex((o) => o.name == user.name);
  if (userIndex != -1) {
    arrofUsers[userIndex] = user;
  } else {
    alert("sign in first");
  }
  console.log(user);
  localStorage.setItem("book", JSON.stringify(arrofUsers));
}

export function checkIfliked(book) {
  const arrofUsers = localStorage.getItem("book")
    ? JSON.parse(localStorage.getItem("book"))
    : [];
  const userIndex = arrofUsers.findIndex((o) => o.name == user.name);
  if (userIndex != -1) {
    const bookIndex = arrofUsers[userIndex].books.findIndex(
      (o) => o.id == book.id
    );
    if (bookIndex != -1) {
      return true;
    } else {
      return false;
    }
  }
}
export function deleteFromSaved(book) {
  const arrofUsers = localStorage.getItem("book")
    ? JSON.parse(localStorage.getItem("book"))
    : [];

  if (userIndex != -1) {
    const bookIndex = arrofUsers[userIndex].books.findIndex(
      (o) => o.id == book.id
    );
    if (bookIndex != -1) {
      arrofUsers[userIndex].books.splice(bookIndex, 1);
      localStorage.setItem("book", JSON.stringify(arrofUsers));
    } else {
      alert("Book not found in saved books");
    }
  }
}

export function returnArr() {
  const arrofUsers = localStorage.getItem("book")
    ? JSON.parse(localStorage.getItem("book"))
    : [];
  if (!user.books) {
    user.books = [];
  }
  const userIndex = arrofUsers.findIndex((o) => o.name == user.name);
  if (userIndex != -1) {
    return arrofUsers[userIndex].books;
  }
  return [];
}
