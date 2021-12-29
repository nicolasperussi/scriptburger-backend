import mongoose from "mongoose";

const dishSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
      unique: true,
      trim: true,
    },
    price: {
      type: "number",
      required: true,
    },
    description: {
      type: "string",
    },
    type: {
      type: "string",
      required: true,
    }
  },
  { versionKey: false }
);

const Dish = mongoose.model("Dish", dishSchema);

export default Dish;
