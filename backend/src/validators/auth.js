const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
  check("firstName").notEmpty().withMessage("Firstname is required!"),
  check("lastName").notEmpty().withMessage("Lastname is required!"),
  check("email").isEmail().withMessage("Enter a valid email address!"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long!"),
];

exports.validateSigninRequest = [
  check("email").isEmail().withMessage("Enter a valid email address!"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long!"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  } else {
    next();
  }
};
