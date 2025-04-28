import "../css/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { setUsers } from "../Save";

function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (user.password) {
      alert("Login successful");
      setUsers(user.name, " ", user.password, true);
      document.getElementById("name").value = "";
      document.getElementById("password").value = "";
    } else {
      alert("Please enter all fields");
    }
  };

  return (
    <div className="loginDiv">
      <p>Nickname</p>
      <input
        type="text"
        id="name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <p>Password</p>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button className="button" onClick={handleSubmit}>
        Send
      </button>
      <p>
        No account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
}

export default Login;
