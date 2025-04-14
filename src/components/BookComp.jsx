import "../css/BookComp.css";
function BookComp({ book }) {
  const resp = 0;
  return (
    <div className="bookCard">
      <div className="image">
        <img src={`${book.volumeInfo.imageLinks.thumbnail}`} />
      </div>
      <p className="title">{book.volumeInfo.title}</p>
    </div>
  );
}
export default BookComp;
