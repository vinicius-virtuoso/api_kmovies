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
exports.verifyDayIsValid = void 0;
const errors_1 = require("../../errors");
const verifyDayIsValid = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { date } = req.body;
    const formattedDate = new Date(date.split('/').reverse().join('/'));
    if (formattedDate.getDay() === 0 || formattedDate.getDay() === 6) {
        throw new errors_1.AppError('Invalid date, work days are monday to friday', 400);
    }
    return next();
});
exports.verifyDayIsValid = verifyDayIsValid;
