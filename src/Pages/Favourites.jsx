import { useEffect, useState } from "react";
import { returnArr } from "../Save";
import BookComp from "../components/BookComp";

function Favoutites() {
  const [books, setbooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setbooks(returnArr());
  }, []);
  return (
    <div>
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
