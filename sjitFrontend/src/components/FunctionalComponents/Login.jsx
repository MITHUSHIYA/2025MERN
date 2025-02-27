import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const req = await axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    });
    const message = req.data.message;
    const isLoggedIn = req.data.isLoggedIn;
    if (isLoggedIn) {
      alert(message);
      navigate("/");
    } else {
      alert(message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          required
        />
        <br />
        <label htmlFor="pwd">Password:</label>
        <input
          value={password}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          type="password"
          placeholder="Enter your Password"
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Create an Account : <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
}

export default Login;
