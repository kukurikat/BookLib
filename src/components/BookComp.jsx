import { useEffect, useRef } from "react";
import "../css/BookComp.css";
import { checkIfliked, saveToFav, deleteFromSaved } from "../Save";
function BookComp({ book }) {
  const resp = 0;
  const buttonRef = useRef(null);
  let name = book.volumeInfo.title;

  const handleClick = () => {
    let butn = buttonRef.current;
    if (butn.classList.contains("likeButton")) {
      butn.classList.remove("likeButton");
      butn.classList.add("likedButton");
      saveToFav(book);
    } else {
      deleteFromSaved(book);
      console.log(book);
      butn.classList.remove("likedButton");
      butn.classList.add("likeButton");
    }
  };

  useEffect(() => {
    let butn = buttonRef.current;
    if (checkIfliked(book)) {
      butn.classList.remove("likeButton");
      butn.classList.add("likedButton");
    }
  }, []);

  return (
    <div className="bookCard">
      <button className="likeButton" ref={buttonRef} onClick={handleClick}>
        ♡
      </button>
      <div className="image">
        <img
          src={
            book.volumeInfo.imageLinks?.thumbnail ||
            "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
          }
        />
      </div>
      <p className="title">{name}</p>
    </div>
  );
}
export default BookComp;
