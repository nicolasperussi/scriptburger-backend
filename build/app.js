"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dishRoutes_1 = __importDefault(require("./routes/dishRoutes"));
var orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(function (req, res, next) {
    req.requestTime = new Date().toLocaleString();
    next();
});
app.use("/api/v1/dishes", dishRoutes_1.default);
app.use("/api/v1/orders", orderRoutes_1.default);
app.use("/api/v1/auth", userRoutes_1.default);
exports.default = app;
