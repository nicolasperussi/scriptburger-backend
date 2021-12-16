"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dishSchema = new mongoose_1.default.Schema({
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
}, { versionKey: false });
var Dish = mongoose_1.default.model("Dish", dishSchema);
exports.default = Dish;
