import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import renterRouter from "./routes/renterRoute.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/renterProfiles", express.static("renterProfiles"));

app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/renter", renterRouter);

mongoose
  .connect("mongodb://localhost:27017/mydb", {})
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

export default app;
