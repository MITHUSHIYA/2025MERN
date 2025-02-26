const express = require("express");
const mdb = require("mongoose"); /* mdb-MongoDB */
const dotenv = require("dotenv"); /* This is to access the MONGODB_URL path from .env file we need to install "npm i dotenv" to acess .env*/
const Signup = require("./models/signupSchema");
const bcrypt = require("bcrypt");
const cors = require('cors')

const app = express(); /* Crusial line in creating a server */

app.use(cors())

app.use(express.json());
const PORT = 3001;
dotenv.config();

console.log(
  process.env.MONGODB_URL
); /* alternate to MONGODB_URL is "mongoose://127.0.0:27017//MERN" here '127.0.0' is the ip address */
mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MDB Connection Successful");
  })
  .catch((err) => {
    console.log("Check your connection String:", err);
  });

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to Backend Server!!</h1>"
  ); /* is the server continuous (or) static server ? */
});

app.get("/static", (req, res) => {
  res.sendFile("/Users/vv/Documents/workii/2025MERN/index.html");
});

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(
      password,
      10
    ); /* here salting(can be 10 to 20) is 10  ie> 2^10 which means this operation takes place 2^10 times hence preventing stealing of a password*/
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password: hashedPassword,
      email: email,
    });

    newSignup.save();
    console.log("Signup Successful");
    res.status(201).json({ message: "Signup Successful", isSignup: true });
  } catch (error) {
    console.log(error);
    res.status(201).json({ message: "Signup Unsuccessful", isSignup: false });
  }
});

app.get("/getsignupdetails", (req, res) => {
  const signup = Signup.find();
  console.log(signup);
  res.send("Signup details fetched");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email: email });
    console.log(existingUser);
    if (existingUser != null) {
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      console.log(isValidPassword);
      if (isValidPassword) {
        res.status(201).json({ message: "Password Correct", isLoggedIn: true });
      } else {
        res
          .status(201)
          .json({ message: "Incorrect Password", isLoggedIn: false });
      }
    } else {
      res
        .status(201)
        .json({ message: "User not Found Signup First", isLoggedIn: false });
    }
  } catch (error) {
    console.log("login error");
    res.status(400).json({ message: "Login Error", isLoggedIn: false });
  }
});

app.listen(PORT, () => {
  console.log("Server Started Successfully");
}); /* here console.log() is purely optional and "clg" is a callback hence no need for a call*/
