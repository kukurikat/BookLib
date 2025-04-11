import { useEffect } from "react";
function BookComp({ search }) {
  const resp = 0;
  console.log(search);
  return <p>{search.text}</p>;
}
export default BookComp;
