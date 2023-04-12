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
exports.createRealStateService = void 0;
const real_estate_entity_1 = require("./../../entities/real_estate.entity");
const address_entity_1 = require("./../../entities/address.entity");
const data_source_1 = require("./../../data-source");
const entities_1 = require("../../entities");
const createRealStateService = (realEstate) => __awaiter(void 0, void 0, void 0, function* () {
    const addressRepo = data_source_1.AppDataSource.getRepository(address_entity_1.Address);
    const addressSave = yield addressRepo.save({
        street: realEstate.address.street,
        zipCode: realEstate.address.zipCode,
        city: realEstate.address.city,
        state: realEstate.address.state,
        number: realEstate.address.number,
    });
    const categoryRepo = data_source_1.AppDataSource.getRepository(entities_1.Category);
    const categoryFind = yield categoryRepo.findOneBy({
        id: realEstate.categoryId,
    });
    if (addressSave && addressSave.id && categoryFind && categoryFind.id) {
        const realEstateRepo = data_source_1.AppDataSource.getRepository(real_estate_entity_1.RealEstate);
        const createRealEstate = realEstateRepo.create({
            sold: realEstate.sold,
            value: realEstate.value,
            size: realEstate.size,
            address: addressSave,
            category: categoryFind,
        });
        const realEstateResult = yield realEstateRepo.save(createRealEstate);
        if (realEstateResult) {
            const realEstateQueryRepo = data_source_1.AppDataSource.getRepository(real_estate_entity_1.RealEstate);
            const realEstateQueryBuilder = realEstateQueryRepo.createQueryBuilder('real_estate');
            const result = yield realEstateQueryBuilder
                .select(['real_estate'])
                .innerJoinAndSelect('real_estate.address', 'address', 'address.id = :adId', {
                adId: realEstateResult.id,
            })
                .innerJoinAndSelect('real_estate.category', 'category', 'category.id = :categoryId', {
                categoryId: realEstateResult.category.id,
            })
                .where('real_estate.id = :id', { id: realEstateResult.id })
                .getOne();
            return result;
        }
    }
});
exports.createRealStateService = createRealStateService;
