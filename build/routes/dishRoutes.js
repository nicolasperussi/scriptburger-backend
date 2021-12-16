"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authController_1 = require("../controllers/authController");
var dishController_1 = require("../controllers/dishController");
var dishValidator_1 = require("../validators/dishValidator");
var router = express_1.default.Router();
router
    .route("/")
    .get(authController_1.authMiddleware, dishController_1.getAllDishes)
    .post(authController_1.authMiddleware, dishValidator_1.createValidator, dishController_1.createDish);
router
    .route("/:id")
    .get(authController_1.authMiddleware, dishController_1.getDish)
    .patch(authController_1.authMiddleware, dishValidator_1.updateValidator, dishController_1.updateDish)
    .delete(authController_1.authMiddleware, dishController_1.deleteDish);
exports.default = router;
