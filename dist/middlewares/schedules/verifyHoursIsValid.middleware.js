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
exports.verifyHoursIsValid = void 0;
const errors_1 = require("../../errors");
const verifyHoursIsValid = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { hour } = req.body;
    if (Number(hour.split(':')[0]) < 8 || Number(hour.split(':')[0]) > 18) {
        throw new errors_1.AppError('Invalid hour, available times are 8AM to 18PM', 400);
    }
    return next();
});
exports.verifyHoursIsValid = verifyHoursIsValid;
