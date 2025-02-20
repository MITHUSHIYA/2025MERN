function Signup() {
  return (
    <div>
      <h1>Signup</h1>

      <form>
        <label for="First Name">First Name:</label>

        <input type="text" placeholder="Enter your First Name" required />
        <br />

        <label for="Last Name">Last Name:</label>

        <input type="text" placeholder="Enter your Last Name" required />
        <br />

        <label for="DOB">Date of Birth:</label>

        <input type="date" placeholder="Enter your DOB" required />
        <br />

        <label for="Ph. No.">Mobile Number:</label>
        
        <input type="tel" placeholder="Enter your Mobile Number" required />
        <br />

        <label for="email">Email:</label>

        <input type="email" value="@sjit.ac.in" required />
        <br />

        <label for="pwd">Password:</label>

        <input type="password" placeholder="Enter your Password" required />
        <br />

        <label for="cnfpwd">Confirm Password:</label>

        <input type="password" placeholder="Enter your Password" required />

        <br />

        <button type="submit">Signup</button>

      </form>
    </div>
  );
}

export default Signup;
