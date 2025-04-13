import "../css/BookComp.css";
function BookComp({ book }) {
  const resp = 0;
  return (
    <div className="bookCard">
      <img src={`${book.volumeInfo.imageLinks.thumbnail}`} className="image" />
      <p className="title">{book.volumeInfo.title}</p>
    </div>
  );
}
export default BookComp;
