import Home from "./Pages/Home.jsx";
import { Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/NavBar.jsx";
import Favoutites from "./Pages/Favourites.jsx";
import Signin from "./Pages/Signin.jsx";
import Login from "./Pages/Login.jsx";

function App() {
  return (
    <div className="home">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favoutites />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
