"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleCreateSchema = void 0;
const zod_1 = require("zod");
exports.scheduleCreateSchema = zod_1.z.object({
    date: zod_1.z.string(),
    hour: zod_1.z.string(),
    realEstateId: zod_1.z.number(),
});
