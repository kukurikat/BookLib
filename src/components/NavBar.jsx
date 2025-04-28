import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <p className="homeButton">
        <Link to="/" className="Button">
          Home
        </Link>
      </p>
      <Link className="FavouritesButton" to="/favourites">
        Favourites
      </Link>
      <Link className="loginbutton" to="/login">
        login
      </Link>
    </div>
  );
}

export default Navbar;
