const express = require("express");
const mdb = require("mongoose"); /* mdb-MongoDB */
const dotenv = require("dotenv"); /* This is to access the MONGODB_URL path from .env file we need to install "npm i dotenv" to acess .env*/
const Signup = require("./models/signupSchema");

const app = express(); /* Crusial line in creating a server */

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



app.post("/signup", (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, password, email } = req.body;
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password: password,
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



app.listen(PORT, () => {
  console.log("Server Started Successfully");
}); /* here console.log() is purely optional and "clg" is a callback hence no need for a call*/
