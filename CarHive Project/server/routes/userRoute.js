import User from "../model/user.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const users = User.find(); 
  try {
    return res.status(200).json({
      data: users,
      massage: "success",
    });
  } catch (error) {
    return res.status(401).json({
      message: error.massage,
      success: false,
    });
  }
});

export default router;
