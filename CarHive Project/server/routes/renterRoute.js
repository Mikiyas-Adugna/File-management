import Renter from "../model/renter.js";
import Car from "../model/car.js";
import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import { Result, validationResult } from "express-validator";

import {
  renterRegisterValidationRules,
  validate,
} from "../middleware/auth.middleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./renterProfiles/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 100,
  },
});

router.post(
  "/register",
  upload.single("companyProfile"),
  renterRegisterValidationRules,
  validate,
  async (req, res) => {
    const imageName = req.file ? req.file.path : null;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, companyName, email, password, phone, address } = req.body;

      const existingRenter = await Renter.findOne({ email });
      if (existingRenter) {
        return res
          .status(400)
          .json({ error: "Car renter with this email already exists" });
      }

      const newRenter = new Renter({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        companyName: companyName,
        email: email,
        password: password,
        phone: phone,
        address: address,
        companyProfile: imageName,
      });

      await newRenter.save();

      res.status(201).json({
        message: "Car renter registered successfully",
        Renter: newRenter,
      });
    } catch (error) {
      console.error("Error registering car renter:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.get("/profile", (req, res, next) => {
  Renter.find()
    .select("name email _id companyProfile")
    .exec()
    .then((doc) => {
      const response = {
        count: doc.length,
        products: doc.map((doc) => {
          return {
            name: doc.name,
            email: doc.email,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:300/renter/profile" + doc._id,
            },
          };
        }),
      };
      res.status(201).json({
        message: "Here is renter profiles",
        response: response,
      });
    });
});

const CarImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./carImages/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const uploadCarImage = multer({
  storage: CarImageStorage,
  limits: {
    fileSize: 1024 * 1024 * 100,
  },
});

router.post(
  "/addCar",
  uploadCarImage.single("carImage"),

  async (req, res, next) => {
    const {
      carType,
      carModel,
      transmissionType,
      seatingCapacity,
      numberOfDoors,
      airCondition,
      dailyRental,
    } = req.body;

    console.log(req.File);

    try {
      const carImage = req.File.name;
      const car = new Car({
        _id: new mongoose.Types.ObjectId(),
        carType: carType,
        carModel: carModel,
        carImage: carImage,
        transmissionType: transmissionType,
        seatingCapacity: seatingCapacity,
        numberOfDoors: numberOfDoors,
        airCondition: airCondition,
        dailyRental: dailyRental,
      });

      const response = await car.save();
      return res.status(201).json({
        massage: "Car added successfully",
        Result: response,
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

export default router;
