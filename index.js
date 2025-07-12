require('.env').config();

const express = require("express"); // common js
// import express from "express"        // module js

const app = express();

const port = process.env.PORT || 8000;    //  ye .env flie se port use karega 

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);
});

app.get("/about", (req, res) => {
  res.send("This is the app's about page ");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello this is the login page </h1>");
});

app.get('/youtube', (req, res)=>{
    res.send('<h2>chai aur code</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});





