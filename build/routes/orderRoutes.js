"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var orderValidator_1 = __importDefault(require("../validators/orderValidator"));
var orderController_1 = require("../controllers/orderController");
var authController_1 = require("../controllers/authController");
var router = express_1.default.Router();
router.route("/").get(authController_1.authMiddleware, orderController_1.getAllOrders).post(authController_1.authMiddleware, orderValidator_1.default, orderController_1.createOrder);
router.route("/:id").delete(authController_1.authMiddleware, orderController_1.deleteOrder);
exports.default = router;
