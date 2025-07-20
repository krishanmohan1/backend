import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();      // ek method ke through sari property transfer hoti hai 

// app.use(cors())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true,

}))

app.use(express.json({      // json me data aayega uska configration
    limit:"16kb"
}))
// url se data aayega 
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())




export { app }

