import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import dishRouter from "./routes/dishRoutes";
import orderRouter from "./routes/orderRoutes";
import userRouter from "./routes/userRoutes";

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  (req as any).requestTime = new Date().toLocaleString();
  next();
});

app.use("/api/v1/dishes", dishRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/auth", userRouter);

export default app;
