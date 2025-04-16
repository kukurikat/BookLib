import { useEffect, useState, updateState, useCallback } from "react";
import { returnArr } from "../Save";
import BookComp from "../components/BookComp";
import React from "react";

function Favoutites() {
  const [books, setbooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(0);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  useEffect(() => {
    setbooks(returnArr());
    console.log(books);
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("book");
          setBooks([]); // Clear all books
        }}
      >
        Clear all
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
    </div>
  );
}

export default Favoutites;
