import express from "express";
import validator from "../validators/orderValidator";
import { getAllOrders, createOrder, deleteOrder } from "../controllers/orderController";
import { authMiddleware } from "../controllers/authController";

const router = express.Router();

router.route("/").get(authMiddleware, getAllOrders).post(authMiddleware, validator, createOrder);

router.route("/:id").delete(authMiddleware, deleteOrder);

export default router;
