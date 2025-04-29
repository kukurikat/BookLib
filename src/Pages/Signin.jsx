import { Link } from "react-router-dom";
import "../css/Signin.css";
import { useEffect, useState } from "react";
import { setUsers } from "../Save";

function Signin() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [click, setClick] = useState(0);

  useEffect(() => {
    if (user.password && user.password === user.passwordCheck) {
      setUsers(user.name, user.email, user.password, false);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("passwordCHeck").value = "";
    } else if (user.passwordCheck && user.password !== user.passwordCheck) {
      alert("Passwords do not match");
    }
  }, [click]);

  return (
    <div className="signindiv">
      <p>Nickname</p>
      <input
        type="text"
        id="name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <p>Email</p>
      <input
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <p>Password</p>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <p>Type password again</p>
      <input
        type="password"
        id="passwordCHeck"
        value={user.passwordCheck}
        onChange={(e) => setUser({ ...user, passwordCheck: e.target.value })}
      />
      <br />
      <button
        className="button"
        onClick={() => {
          setClick((c) => c + 1);
        }}
      >
        Send
      </button>
      <p>
        Have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signin;
