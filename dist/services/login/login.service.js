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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
const user_entity_1 = require("../../entities/user.entity");
const data_source_1 = require("../../data-source");
const bcryptjs_1 = require("bcryptjs");
const errors_1 = require("../../errors");
const jsonwebtoken_1 = require("jsonwebtoken");
const loginService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const userRepo = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const userFind = yield userRepo.findOneBy({ email: email });
    if (!userFind) {
        throw new errors_1.AppError('Invalid credentials', 401);
    }
    const comparePassword = yield (0, bcryptjs_1.compare)(password, userFind.password);
    if (!comparePassword) {
        throw new errors_1.AppError('Invalid credentials', 401);
    }
    const token = (0, jsonwebtoken_1.sign)({ email }, String(process.env.SECRET_KEY), {
        expiresIn: process.env.EXPIRES_IN,
        subject: String(userFind.id),
    });
    return {
        token,
    };
});
exports.loginService = loginService;
