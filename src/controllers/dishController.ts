import Dish from "../models/dishModel";
import { validationResult } from "express-validator";
import { Request, Response } from "express";

export const getAllDishes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const dishes = await Dish.find().select("-__v");

    return res.status(200).json({
      status: "success",
      requestedAt: (req as any).requestTime,
      results: dishes.length,
      dishes,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err,
    });
  }
};

export const createDish = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    console.log(req);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    

    // @ts-ignore
    req.body.image = req.files!.image.data;

    const newDish = await Dish.create(req.body);

    return res.status(200).json({
      status: "success",
      newDish,
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: err,
    });
  }
};

export const getDish = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const dish = await Dish.findById(req.params.id);

    return res.status(200).json({
      status: "success",
      requestedAt: (req as any).requestTime,
      dish,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err,
    });
  }
};

export const updateDish = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      status: "success",
      dish,
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: err,
    });
  }
};

export const deleteDish = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      status: "success",
      dish,
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: err,
    });
  }
};
