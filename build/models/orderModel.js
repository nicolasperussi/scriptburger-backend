"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var orderSchema = new mongoose_1.default.Schema({
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
}, { versionKey: false });
var Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
