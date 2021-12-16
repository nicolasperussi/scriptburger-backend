"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateValidator = exports.createValidator = void 0;
var express_validator_1 = require("express-validator");
exports.createValidator = [
    (0, express_validator_1.body)("name").isString().withMessage("The name of the dish must be a string"),
    (0, express_validator_1.body)("price")
        .isFloat()
        .withMessage("The price of the dish must be a float number"),
    (0, express_validator_1.body)("description")
        .optional()
        .isString()
        .withMessage("The description of the dish must be a string"),
];
exports.updateValidator = [
    (0, express_validator_1.body)("name")
        .optional()
        .isString()
        .withMessage("The name of the dish must be a string"),
    (0, express_validator_1.body)("price")
        .optional()
        .isFloat()
        .withMessage("The price of the dish must be a float number"),
    (0, express_validator_1.body)("description")
        .optional()
        .isString()
        .withMessage("The description of the dish must be a string"),
];
