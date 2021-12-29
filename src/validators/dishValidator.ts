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
  body("type")
    .isString()
    .withMessage("The type of the dish must be a string")
    .isIn(["sandwich", "dessert", "drink", "sidedish"])
    .withMessage(
      "The type of the dish must be a sandwich, dessert, drink or sidedish"
    ),
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
