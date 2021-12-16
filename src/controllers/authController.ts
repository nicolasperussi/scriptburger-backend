import User from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { secret, generateToken } from "../config/auth";
import { Request, Response, NextFunction } from "express";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const newUser = await User.create(req.body);

    newUser.password = undefined;

    const token = generateToken({ id: newUser.id });

    return res.status(200).send({
      status: "success",
      newUser,
      token,
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: err,
    });
  }
};

export const loginUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password").select("-__v");

  if (!user) return res.status(400).send({ error: "User not found" });

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: "Invalid password" });

  user.password = undefined;

  const token = generateToken({ id: user.id });

  return res.status(200).send({ user, token });
};

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ error: "No token provided" });

  const parts = authHeader.split(" ");

  if (parts.length !== 2)
    return res.status(401).send({ error: "Token error" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Invalid token format" });

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Invalid token" });

    (req as any).userId = decoded!.id;
    return next();
  });
};
