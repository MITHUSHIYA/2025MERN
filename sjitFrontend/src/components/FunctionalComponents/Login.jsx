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
    </div>
  );
}

export default Login;
