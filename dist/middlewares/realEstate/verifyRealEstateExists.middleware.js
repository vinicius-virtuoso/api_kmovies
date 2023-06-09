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
exports.verifyRealEstateExists = void 0;
const real_estate_entity_1 = require("./../../entities/real_estate.entity");
const data_source_1 = require("./../../data-source");
const errors_1 = require("../../errors");
const verifyRealEstateExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { realEstateId } = req.body;
    const realEstateRepo = data_source_1.AppDataSource.getRepository(real_estate_entity_1.RealEstate);
    const realEstateFind = yield realEstateRepo.exist({
        where: { id: parseInt(realEstateId) },
    });
    if (!realEstateFind) {
        throw new errors_1.AppError('RealEstate not found', 404);
    }
    return next();
});
exports.verifyRealEstateExists = verifyRealEstateExists;
