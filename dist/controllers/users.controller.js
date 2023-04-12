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
exports.usersController = void 0;
const listUsers_service_1 = require("../services/users/listUsers.service");
const createUser_service_1 = require("../services/users/createUser.service");
const updateUser_service_1 = require("../services/users/updateUser.service");
const deleteUser_service_1 = require("../services/users/deleteUser.service");
class UsersController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, admin = false } = req.body;
            const user = yield (0, createUser_service_1.createUserService)({ name, email, password, admin });
            return res.status(201).json(user);
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield (0, listUsers_service_1.listUsersService)();
            return res.status(200).json(users);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield (0, updateUser_service_1.updateUsersService)(id, req.body);
            return res.status(200).json(user);
        });
    }
    softDelete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield (0, deleteUser_service_1.deleteUserService)(id);
            return res.status(204).json(user);
        });
    }
}
exports.usersController = new UsersController();
