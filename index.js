require("dotenv").config();

const express = require("express"); // common js
// import express from "express"        // module js
const app = express();

const port = process.env.PORT || 8000; //  ye .env flie se port use karega

const githubData = {
  login: "krishanmohan1",
  id: 130724850,
  node_id: "U_kgDOB8qz8g",
  avatar_url: "https://avatars.githubusercontent.com/u/130724850?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/krishanmohan1",
  html_url: "https://github.com/krishanmohan1",
  followers_url: "https://api.github.com/users/krishanmohan1/followers",
  following_url:
    "https://api.github.com/users/krishanmohan1/following{/other_user}",
  gists_url: "https://api.github.com/users/krishanmohan1/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/krishanmohan1/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/krishanmohan1/subscriptions",
  organizations_url: "https://api.github.com/users/krishanmohan1/orgs",
  repos_url: "https://api.github.com/users/krishanmohan1/repos",
  events_url: "https://api.github.com/users/krishanmohan1/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/krishanmohan1/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Krishan Mohan",
  company: null,
  blog: "KrishanMohan3501@gmail.com",
  location: "Begusarai , Bihar",
  email: null,
  hireable: null,
  bio: "\r\n🌟 Problem-solving Java Developer & MERN Stack Enthusiast | Senior at Lovely Professional University, blending classical strategies with cutting-edge tech. ",
  twitter_username: "Krishan17115155",
  public_repos: 19,
  public_gists: 0,
  followers: 8,
  following: 16,
  created_at: "2023-04-14T03:16:45Z",
  updated_at: "2025-06-18T13:03:46Z",
};

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

app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData); // jab api call pe json data dena ho to aise dete hai , express me , res.json()
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
