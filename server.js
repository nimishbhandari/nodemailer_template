import express from "express";
import mailRoute from "./routes/mailRoute.js";

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/mail", mailRoute);

app.listen(5000, () => {
  console.log("Server Started....");
});
