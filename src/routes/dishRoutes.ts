import express from "express";
import { authMiddleware } from "../controllers/authController";
import {
  createDish,
  deleteDish,
  getAllDishes,
  getDish,
  updateDish,
} from "../controllers/dishController";
import { createValidator, updateValidator } from "../validators/dishValidator";

const router = express.Router();

router
  .route("/")
  .get(authMiddleware, getAllDishes)
  .post(authMiddleware, createValidator, createDish);

router
  .route("/:id")
  .get(authMiddleware, getDish)
  .patch(authMiddleware, updateValidator, updateDish)
  .delete(authMiddleware, deleteDish);

export default router;
