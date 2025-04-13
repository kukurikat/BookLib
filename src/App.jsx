import Home from "./Pages/Home.jsx";
import { Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/NavBar.jsx";
import Favoutites from "./Pages/Favourites.jsx";

function App() {
  return (
    <div className="home">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favoutites />} />
      </Routes>
    </div>
  );
}

export default App;
