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
exports.updateUsersService = void 0;
const user_entity_1 = require("../../entities/user.entity");
const data_source_1 = require("../../data-source");
const user_schema_1 = require("../../schemas/user.schema");
const updateUsersService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const usersRepo = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const userFind = yield usersRepo.findOne({
        where: { id: parseInt(id) },
        relations: { schedules: true },
    });
    const user = usersRepo.create(Object.assign(Object.assign({}, userFind), payload));
    yield usersRepo.save(user);
    const returnUsers = user_schema_1.updateReturnSchema.parse(user);
    return returnUsers;
});
exports.updateUsersService = updateUsersService;
