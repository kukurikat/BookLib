import BookComp from "../components/BookComp.jsx";
import { useState, useEffect } from "react";
import { getBook, getDefault } from "../Api.js";
import "../css/Home.css";
function Home() {
  const [books, setbooks] = useState([]);
  const [click, setClick] = useState(0);
  const [searchFetch, setSearchFetch] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getBook(searchFetch).then((result) => {
      setbooks(result);
      setLoading(false);
    });
    console.log(getBook(searchFetch));

    setSearchFetch("");
  }, [click]);

  function randomBook() {
    if (loading == false) {
      setLoading(true);
      getDefault().then((result) => {
        setbooks(result);
        setLoading(false);
      });
    }
  }
  return (
    <>
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
      <button onClick={randomBook} className="wishluckbutton">
        Im lucky
      </button>
      <button className="searchButton" onClick={(e) => setClick((c) => c + 1)}>
        search
      </button>
      {loading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid">
          {books.map((bok) => (
            <BookComp book={bok} key={bok.id} className="card" />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
