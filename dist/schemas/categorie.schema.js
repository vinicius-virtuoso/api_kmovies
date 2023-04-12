"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorieCreateSchema = void 0;
const zod_1 = require("zod");
exports.categorieCreateSchema = zod_1.z.object({
    name: zod_1.z.string().max(45).nonempty(),
});
