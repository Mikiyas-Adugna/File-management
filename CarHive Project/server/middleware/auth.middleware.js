import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";

const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Access token is not valid!" });
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "You are not authenticated" });
  }
};

const registerValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .isNumeric()
    .withMessage("Phone number must be numeric")
    .isLength({ min: 10 })
    .withMessage("Phone number must be at least 10 digits"),
  body("address").optional(),
];


const renterRegisterValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("companyName").notEmpty().withMessage("Company name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .isNumeric()
    .withMessage("Phone number must be numeric")
    .isLength({ min: 10 }, { max: 10 })
    .withMessage("Phone number must be at least 10 digits"),
  body("address").notEmpty().withMessage("Address is required"),
];
const loginValidationRules = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: errors.array() });
};

export {
  verifyAccessToken,
  renterRegisterValidationRules,
  registerValidationRules,
  loginValidationRules,
  validate,
};
