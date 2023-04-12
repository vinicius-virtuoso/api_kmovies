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
exports.verifyUpdateIsAdmin = void 0;
const errors_1 = require("../../errors");
const verifyUpdateIsAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { admin, id: token_id } = req.isAdmin;
    if (id !== token_id) {
        if (admin === false) {
            throw new errors_1.AppError('Insufficient permission', 403);
        }
    }
    return next();
});
exports.verifyUpdateIsAdmin = verifyUpdateIsAdmin;
