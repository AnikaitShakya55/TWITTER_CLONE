import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./src/db/databaseConnection.js";

dotenv.config({
  path: ".env",
});

databaseConnection();
const app = express();

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`SERVER IS RUNNING ${process.env.BACKEND_PORT}`);
});
