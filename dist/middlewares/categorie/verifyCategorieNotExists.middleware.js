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
exports.verifyCategorieNotExists = void 0;
const data_source_1 = require("../../data-source");
const category_entity_1 = require("../../entities/category.entity");
const errors_1 = require("../../errors");
const verifyCategorieNotExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId } = req.params;
    const categorieRepo = data_source_1.AppDataSource.getRepository(category_entity_1.Category);
    const findUser = yield categorieRepo.exist({
        where: { id: parseInt(categoryId) },
    });
    if (!findUser) {
        throw new errors_1.AppError('Category not found', 404);
    }
    return next();
});
exports.verifyCategorieNotExists = verifyCategorieNotExists;
