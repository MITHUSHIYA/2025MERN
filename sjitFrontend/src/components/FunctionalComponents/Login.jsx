import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label for="email">Email:</label>

        <input type="email" value="@sjit.ac.in" required />
        <br />

        <label for="pwd">Password:</label>

        <input type="password" placeholder="Enter your Password" required />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>Create an Account : <Link to='/signup'>SignUp</Link></p>
    </div>
  );
}

export default Login;
