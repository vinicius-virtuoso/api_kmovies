import { Router } from 'express'
import { usersController } from '../controllers/users.controller'
import {
  validateBody,
  validateToken,
  verifyIsAdmin,
  verifyUpdateIsAdmin,
  verifyUserExists,
  verifyUserNotExistsId,
} from '../middlewares'
import { userCreateSchema, userUpdateSchema } from '../schemas'

export const usersRouter = Router()

usersRouter.get('/', validateToken, verifyIsAdmin, usersController.read)

usersRouter.post(
  '/',
  validateBody(userCreateSchema),
  verifyUserExists,
  usersController.create
)

usersRouter.patch(
  '/:id',
  validateBody(userUpdateSchema),
  validateToken,
  verifyUserNotExistsId,
  verifyUpdateIsAdmin,
  verifyUserExists,
  usersController.update
)

usersRouter.delete(
  '/:id',
  validateToken,
  verifyUserNotExistsId,
  verifyIsAdmin,
  usersController.softDelete
)
