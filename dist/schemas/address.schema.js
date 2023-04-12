"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressCreateScheme = void 0;
const zod_1 = require("zod");
exports.addressCreateScheme = zod_1.z.object({
    street: zod_1.z.string().max(45),
    zipCode: zod_1.z.string().max(8),
    number: zod_1.z.string().max(7).nullable().optional().default(null),
    city: zod_1.z.string().max(20),
    state: zod_1.z.string().max(2),
});
