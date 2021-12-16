"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
var DB = process.env.DATABASE || '';
mongoose_1.default
    .connect(DB, {
    // @ts-ignore
    useNewUrlParser: true,
})
    .then(function (con) { return console.log("Database connection successfully!"); })
    .catch(console.log);
var PORT = 3333;
app_1.default.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT, "..."));
});
