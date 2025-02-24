const express = require("express");

const app = express(); /* Crusial line in creating a server */

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend Server.</h1>");  /* is the server continuous (or) static server ? */
});

app.get("/static",(req,res)=>{
  res.sendFile("/Users/vv/Documents/workii/2025MERN/index.html")
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server Started Successfully");
}); /* here console.log() is purely optional and "clg" is a callback hence no need for a call*/
