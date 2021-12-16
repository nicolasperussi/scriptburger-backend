import Order from "../models/orderModel";
import { validationResult } from "express-validator";
import { Request, Response } from "express";

export const getAllOrders = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const orders = await Order.find().select("-__v");

    return res.status(200).json({
      status: "success",
      requestedAt: (req as any).requestTime,
      results: orders.length,
      orders,
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: err,
    });
  }
};

export const createOrder = async (req: Request, res: Response): Promise<Response> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const newOrder = await Order.create(req.body);

    return res.status(200).json({
      status: "success",
      newOrder,
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: err,
    });
  }
};

export const deleteOrder = async (req: Request, res: Response): Promise<Response> => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      status: "success",
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: err,
    });
  }
};
