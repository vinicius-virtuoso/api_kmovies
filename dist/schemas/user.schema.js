"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReturnSchema = exports.userUpdateSchema = exports.userCreateSchema = void 0;
const zod_1 = require("zod");
exports.userCreateSchema = zod_1.z.object({
    name: zod_1.z.string().max(45).nonempty(),
    email: zod_1.z.string().email().max(45).nonempty(),
    password: zod_1.z.string().max(120).min(1),
    admin: zod_1.z.boolean().optional().default(false),
});
exports.userUpdateSchema = zod_1.z.object({
    email: zod_1.z.string().email().max(45).nonempty().optional(),
    name: zod_1.z.string().max(45).nonempty().optional(),
    password: zod_1.z.string().max(120).min(1).nonempty().optional(),
});
exports.updateReturnSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    admin: zod_1.z.boolean(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    deletedAt: zod_1.z.string().nullable(),
});
