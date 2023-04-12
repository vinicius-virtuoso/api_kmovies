import { Router } from 'express'
import { loginController } from '../controllers/login.controller'
import { validateBody } from '../middlewares'

import { loginSchema } from '../schemas'

export const loginRouter = Router()

loginRouter.post('/', validateBody(loginSchema), loginController.login)
