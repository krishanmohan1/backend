// require('dotenv').config({path: './env'})     // it will work but it is not consitent

import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
  path : './env'
})


connectDB()






  






/*

// this method is good , but make index messy so we have another method 


import express from "express";
const app = express();

;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    // jab express nhi baat kar payega 
    app.on("ERROR: ", (error)=>{
        console.log("ERROR:",error);
        throw error 
    })

    // jab app listen kar payega 
    app.listen(process.env.PORT, ()=>{
        console.log(`APP is Listning on port ${process.env.PORT}`);
        
    })


  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
})();

*/
