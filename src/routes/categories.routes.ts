import { categoriesController } from './../controllers/categories.controller'
import { Router } from 'express'
import {
  validateBody,
  validateToken,
  verifyCategorieExists,
  verifyIsAdmin,
} from '../middlewares'

import { categorieCreateSchema } from '../schemas'
import { verifyCategorieNotExists } from '../middlewares/categorie/verifyCategorieNotExists.middleware'

export const categoriesRouter = Router()

categoriesRouter.post(
  '/',
  validateBody(categorieCreateSchema),
  validateToken,
  verifyIsAdmin,
  verifyCategorieExists,
  categoriesController.create
)

categoriesRouter.get('/', categoriesController.list)

categoriesRouter.get(
  '/:categoryId/realEstate',
  verifyCategorieNotExists,
  categoriesController.listRealEstate
)
