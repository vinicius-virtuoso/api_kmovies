"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realEstateCreateSchema = void 0;
const zod_1 = require("zod");
const address_schema_1 = require("./address.schema");
exports.realEstateCreateSchema = zod_1.z.object({
    sold: zod_1.z.boolean().default(false),
    value: zod_1.z.number().positive().or(zod_1.z.string()),
    size: zod_1.z.number().positive(),
    address: address_schema_1.addressCreateScheme,
    categoryId: zod_1.z.number(),
});
