import { body } from "express-validator";

const validator = [
  body("dishes").isArray().withMessage('The dishes list must be an array.'),
  body("totalPrice")
    .isFloat()
    .withMessage("The total price must be a float number."),
  body("paymentMethod")
    .isIn(["pix", "cash"])
    .withMessage("The payment method must be pix or cash."),
  body("customer.*")
    .isString()
    .withMessage("The client informations must be strings."),
];

export default validator;
