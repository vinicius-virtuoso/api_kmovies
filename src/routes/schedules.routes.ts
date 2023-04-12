import { validateToken } from './../middlewares/auth/validateToken.middleware'
import { validateBody } from './../middlewares/body/validateBody.middleware'
import { Router } from 'express'
import { scheduleCreateSchema } from './../schemas/schedules.schema'
import { schedulesController } from '../controllers/schedules.controller'
import {
  verifyDayIsValid,
  verifyExistScheduleRs,
  verifyHoursIsValid,
  verifyIsAdmin,
  verifyRealEstateExists,
  verifyRealEstateExistsParams,
  verifyScheduleExists,
} from '../middlewares'

export const schedulesRouter = Router()

schedulesRouter.get(
  '/realEstate/:realEstateId',
  validateToken,
  verifyIsAdmin,
  verifyRealEstateExistsParams,
  schedulesController.scheduleRs
)

schedulesRouter.post(
  '/',
  validateToken,
  validateBody(scheduleCreateSchema),
  verifyRealEstateExists,
  verifyExistScheduleRs,
  verifyScheduleExists,
  verifyHoursIsValid,
  verifyDayIsValid,
  schedulesController.create
)
