import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express(); // ek method ke through sari property transfer hoti hai

// app.use(cors())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    // json me data aayega uska configration
    limit: "16kb",
  })
);

// url se data aayega
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

/// routes import

import userRouter from "./routes/user.routes.js";

// routes decalration
// app.use("/users", userRouter)
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/login
// http://localhost:8000/api/v1/users/rgister

export { app };


