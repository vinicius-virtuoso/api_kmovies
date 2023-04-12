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
exports.createScheduleService = void 0;
const schedule_entity_1 = require("./../../entities/schedule.entity");
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const createScheduleService = (payload, token_id) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.AppDataSource.getRepository(entities_1.User);
    const user = yield userRepo.findOneBy({ id: parseInt(token_id) });
    const realEstateRepo = data_source_1.AppDataSource.getRepository(entities_1.RealEstate);
    const realEstateId = yield realEstateRepo.findOneBy({
        id: payload.realEstateId,
    });
    const scheduleRepo = data_source_1.AppDataSource.getRepository(schedule_entity_1.Schedule);
    const schedule = scheduleRepo.create({
        date: payload.date,
        hour: payload.hour,
        realEstate: realEstateId,
        user: user,
    });
    yield scheduleRepo.save(schedule);
    return { message: 'Schedule created' };
});
exports.createScheduleService = createScheduleService;
