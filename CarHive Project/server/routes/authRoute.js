import { body, validationResult } from "express-validator";
import User from "../model/user.js";
import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import {
  registerValidationRules,
  loginValidationRules,
  validate,
} from "../middleware/auth.middleware.js";
const router = express.Router();
 
router.post(
  "/register",
  registerValidationRules,
  validate,
  async (req, res) => {
    const { name, email, password, phone } = req.body;
 
    try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(403).json("Email already in use");
      } else {
        const hash = await bcrypt.hash(password, 10);
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name: name,
          email: email,
          password: hash,
          phone: phone,
        });

        const response = await user.save();
        return res.status(201).json({
          message: "User successfully created",
          result: response,
          success: true,
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

const generateAccessToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
const generateRefreshToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.REFRESH_JWT_SECRET);
};

router.post("/login", loginValidationRules, validate, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found. Please sign up first." });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Something went wrong with the email or password " });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    return res.status(200).json({
      accessToken: accessToken,
      refreshToken: refreshToken,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/token", async (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token is required" });
  }

  try {
    const user = await User.findOne({ refreshToken: refreshToken });

    if (!user) {
      return res.status(403).json({ message: "Refresh token is not valid" });
    }

    jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Refresh token is not valid" });
      }

      const accessToken = generateAccessToken(decoded);

      return res.status(200).json({ accessToken: accessToken });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/logout", async (req, res) => {

  const refreshToken = req.body.refreshToken;
  try {
    const user = await User.findOne({ refreshToken: refreshToken });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findOneAndDelete({ refreshToken: refreshToken });

    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



export default router;
