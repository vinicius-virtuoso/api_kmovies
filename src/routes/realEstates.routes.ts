import { Router } from 'express'
import { verifyAddressExists } from '../middlewares/address/verifyAddressExists.middleware'
import { verifyIsAdmin } from '../middlewares/admin/verifyIsAdmin.middleware'
import { validateToken } from '../middlewares/auth/validateToken.middleware'
import { realEstateController } from '../controllers/realEstate.controller'
import { validateBody } from '../middlewares'
import { realEstateCreateSchema } from '../schemas'

export const realEstateRouter = Router()

realEstateRouter.get('/', realEstateController.list)

realEstateRouter.post(
  '/',
  validateBody(realEstateCreateSchema),
  validateToken,
  verifyIsAdmin,
  verifyAddressExists,
  realEstateController.create
)
