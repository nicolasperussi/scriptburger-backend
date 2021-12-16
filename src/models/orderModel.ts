import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    dishes: {
      type: [String],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    customer: {
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
  },
  { versionKey: false }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
