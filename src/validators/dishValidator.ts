import { body } from "express-validator";

export const createValidator = [
  body("name").isString().withMessage("The name of the dish must be a string"),
  body("price")
    .isFloat()
    .withMessage("The price of the dish must be a float number"),
  body("description")
    .optional()
    .isString()
    .withMessage("The description of the dish must be a string"),
];

export const updateValidator = [
  body("name")
    .optional()
    .isString()
    .withMessage("The name of the dish must be a string"),
  body("price")
    .optional()
    .isFloat()
    .withMessage("The price of the dish must be a float number"),
  body("description")
    .optional()
    .isString()
    .withMessage("The description of the dish must be a string"),
];
