"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const validateBody = (schema) => (req, res, next) => {
    const validated = schema.parse(req.body);
    req.body = validated;
    return next();
};
exports.validateBody = validateBody;
