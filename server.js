import express from "express";
import mailRoute from "./routes/mailRoute.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/mail", mailRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Started on Port 5000....");
});
