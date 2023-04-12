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
exports.categoriesController = exports.CategoriesController = void 0;
const listCategories_service_1 = require("../services/categories/listCategories.service");
const createCategories_service_1 = require("../services/categories/createCategories.service");
const listCategoriesRealEstate_service_1 = require("../services/categories/listCategoriesRealEstate.service");
class CategoriesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield (0, listCategories_service_1.listCategoriesService)();
            return res.status(200).json(categories);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const categorie = yield (0, createCategories_service_1.createCategorieService)(name);
            res.status(201).json(categorie);
        });
    }
    listRealEstate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { categoryId } = req.params;
            const categorie = yield (0, listCategoriesRealEstate_service_1.listCategorieRealEstateService)(categoryId);
            res.status(200).json(categorie);
        });
    }
}
exports.CategoriesController = CategoriesController;
exports.categoriesController = new CategoriesController();
