"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.secret = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.secret = "5cc00761d833fff87ff43814918412d2";
var generateToken = function (params) {
    if (params === void 0) { params = {}; }
    return jsonwebtoken_1.default.sign(params, exports.secret, { expiresIn: 86400 });
};
exports.generateToken = generateToken;
