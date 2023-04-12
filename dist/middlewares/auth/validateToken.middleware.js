"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../../errors");
const validateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authToken = req.headers.authorization;
    const token = authToken === null || authToken === void 0 ? void 0 : authToken.split(' ')[1];
    if (!token) {
        throw new errors_1.AppError('Missing bearer token', 401);
    }
    jsonwebtoken_1.default.verify(token, String(process.env.SECRET_KEY), (err, decoded) => {
        if (err) {
            throw new errors_1.AppError(err.message, 401);
        }
        // if (decoded) {
        //   const { sub, admin }: any = decoded
        // }
        req.isAdmin = {
            id: decoded.sub,
            admin: decoded.admin,
        };
        return next();
    });
});
exports.validateToken = validateToken;
