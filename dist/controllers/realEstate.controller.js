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
exports.realEstateController = void 0;
const listRealEstate_service_1 = require("./../services/realEstate/listRealEstate.service");
const realEstateCreate_service_1 = require("../services/realEstate/realEstateCreate.service");
class RealEstateController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const realEstates = yield (0, listRealEstate_service_1.listRealEstates)();
            return res.status(200).json(realEstates);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sold = false, value, size, address, categoryId, } = req.body;
            const realEstate = yield (0, realEstateCreate_service_1.createRealStateService)({
                sold,
                value,
                size,
                address: {
                    city: address.city,
                    street: address.street,
                    zipCode: address.zipCode,
                    state: address.state,
                    number: address.number,
                },
                categoryId,
            });
            return res.status(201).json(realEstate);
        });
    }
}
exports.realEstateController = new RealEstateController();
