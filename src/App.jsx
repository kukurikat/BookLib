import BookComp from "./BookComp";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [bookSerach, setBookSerach] = useState("");
  const [click, setClick] = useState(0);
  const [searchFetch, setSearchFetch] = useState({});
  useEffect(() => {
    setSearchFetch({
      text: bookSerach,
    });
  }, [click]);
  return (
    <>
      <div className="progDiv">
        <BookComp search={searchFetch} />
        <input
          type="text"
          value={bookSerach}
          onChange={(e) => {
            setBookSerach(e.target.value);
          }}
        />
        <input type="date" />
        <button onClick={(e) => setClick((c) => c + 1)}>asdad</button>
      </div>
    </>
  );
}

export default App;
