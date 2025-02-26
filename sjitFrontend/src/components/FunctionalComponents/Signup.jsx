import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate()

  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [phoneNumber, setPN] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    const req = await axios.post("https://backend-mern-xls7.onrender.com", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    });
    const message = req.data.message;
    const isSignup = req.data.isSignup
    if(isSignup){
      alert(message)
      navigate('/login')
    }else{
      alert(message)
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="First Name">First Name:</label>
        <input
          type="text"
          placeholder="Enter your First Name"
          value={firstName}
          onChange={(e) => setFN(e.target.value)}
          id="firstName"
          required
        />
        <br />
        <label htmlFor="Last Name">Last Name:</label>
        <input
          type="text"
          placeholder="Enter your Last Name"
          value={lastName}
          onChange={(e) => setLN(e.target.value)}
          id="lastName"
          required
        />
        <br />
        <label htmlFor="Ph. No.">Mobile Number:</label>
        <input
          type="tel"
          placeholder="Enter your Mobile Number"
          value={phoneNumber}
          onChange={(e) => setPN(e.target.value)}
          id="phoneNumber"
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          required
        />
        <br />
        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          id="password"
          required
        />
        <br />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already Have an Account ?{" "}
        <button>
          <Link to="/login">Login</Link>
        </button>
      </p>
    </div>
  );
}

export default Signup;
