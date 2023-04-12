"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const middlewares_1 = require("../middlewares");
const schemas_1 = require("../schemas");
exports.usersRouter = (0, express_1.Router)();
exports.usersRouter.get('/', middlewares_1.validateToken, middlewares_1.verifyIsAdmin, users_controller_1.usersController.read);
exports.usersRouter.post('/', (0, middlewares_1.validateBody)(schemas_1.userCreateSchema), middlewares_1.verifyUserExists, users_controller_1.usersController.create);
exports.usersRouter.patch('/:id', (0, middlewares_1.validateBody)(schemas_1.userUpdateSchema), middlewares_1.validateToken, middlewares_1.verifyUserNotExistsId, middlewares_1.verifyUpdateIsAdmin, middlewares_1.verifyUserExists, users_controller_1.usersController.update);
exports.usersRouter.delete('/:id', middlewares_1.validateToken, middlewares_1.verifyUserNotExistsId, middlewares_1.verifyIsAdmin, users_controller_1.usersController.softDelete);
