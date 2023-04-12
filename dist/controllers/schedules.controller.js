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
exports.schedulesController = void 0;
const createSchedule_service_1 = require("../services/schedule/createSchedule.service");
const listScheduleRealEstate_service_1 = require("../services/schedule/listScheduleRealEstate.service");
class SchedulesController {
    scheduleRs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { realEstateId } = req.params;
            const schedules = yield (0, listScheduleRealEstate_service_1.listScheduleRealEstateService)(+realEstateId);
            return res.status(200).json(schedules);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = req.body;
            const { id: token_id } = req.isAdmin;
            const schedule = yield (0, createSchedule_service_1.createScheduleService)(payload, token_id);
            return res.status(201).json(schedule);
        });
    }
}
exports.schedulesController = new SchedulesController();
