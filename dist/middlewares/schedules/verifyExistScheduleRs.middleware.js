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
exports.verifyExistScheduleRs = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const errors_1 = require("../../errors");
const verifyExistScheduleRs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { realEstateId, date, hour } = req.body;
    const scheduleRepo = data_source_1.AppDataSource.getRepository(entities_1.Schedule);
    const scheduleUserFind = yield scheduleRepo
        .createQueryBuilder('schedules')
        .innerJoinAndSelect('schedules.realEstate', 'rs')
        .where('rs.id = :rsId', {
        rsId: realEstateId,
    })
        .andWhere('schedules.date = :dateD', {
        dateD: date,
    })
        .andWhere('schedules.hour = :hourH', {
        hourH: hour,
    })
        .getOne();
    if (scheduleUserFind) {
        throw new errors_1.AppError('Schedule to this real estate at this date and time already exists', 409);
    }
    return next();
});
exports.verifyExistScheduleRs = verifyExistScheduleRs;
