import BookComp from "./BookComp.jsx";
import { useState, useEffect } from "react";
import "./css/App.css";
import { getBook, getDefault } from "./Api.js";

function App() {
  const [books, setbooks] = useState([]);
  const [click, setClick] = useState(0);
  const [searchFetch, setSearchFetch] = useState({});
  useEffect(() => {
    getBook(searchFetch).then((result) => {
      setbooks(result);
    });
    console.log(getBook(searchFetch));
    setSearchFetch("");
  }, [click]);

  function randomBook() {
    getDefault().then((result) => {
      setbooks(result);
    });
  }
  return (
    <div className="home">
      <div className="navbar">
        <p className="homeButton" onClick={randomBook}>
          Home
        </p>
        <input
          className="inputfield"
          type="text"
          id="inputBook"
          placeholder="Enter the book"
          value={searchFetch.text || ""}
          onChange={(e) => {
            setSearchFetch({ text: e.target.value });
          }}
        />
        <button
          className="searchButton"
          onClick={(e) => setClick((c) => c + 1)}
        >
          search
        </button>
      </div>
      <div className="grid">
        {books.map((bok) => (
          <BookComp book={bok} key={bok.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
