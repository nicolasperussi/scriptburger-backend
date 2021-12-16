"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var validator = [
    (0, express_validator_1.body)("dishes").isArray().withMessage('The dishes list must be an array.'),
    (0, express_validator_1.body)("totalPrice")
        .isFloat()
        .withMessage("The total price must be a float number."),
    (0, express_validator_1.body)("paymentMethod")
        .isIn(["pix", "cash"])
        .withMessage("The payment method must be pix or cash."),
    (0, express_validator_1.body)("customer.*")
        .isString()
        .withMessage("The client informations must be strings."),
];
exports.default = validator;
