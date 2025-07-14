// JS me file ko import karane ke do tarike 1. commonJS(require syntax, it works synchronous)  2. moduleJS (import syntax  , it works as asynchronous)


// require('dotenv').config();      // type commonJS
import dotenv from 'dotenv'         // new ES module  sytle     type- moduleJS
dotenv.config()


// const express = require("express")
import express from 'express';
const app = express();


const PORT = process.env.PORT || 8000;
// jab production me jayega to .env se he lega port , waha se nhi mila to application nhi chalega but development ke time || 4000 de dete run karne ke liye ki agar .env me mention nhi hai to default ye le le 


// app.get("/", (req,res)=>{
//     res.send("<h1>Hello Mohan ,Express server is created</h1>")
// })

// how to handle CORS --> ye front yaha batayaga gya , whitelisting karna , origin access dena 


app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id:1,
            title:"A jokes",
            content: "This is another jokes"
        },
        {
            id:2,
            title:"Another jokes",
            content:"This is another jokes"
        },
        {
            id:3,
            title:"A third jokes",
            content: "This is third jokes"
        }
    ];
    res.send(jokes);
})

app.listen(PORT, ()=>{
    console.log(`App is listing at port http://localhost:${PORT}`);
})


