import { Request, Response } from 'express'
import { createScheduleService } from '../services/schedule/createSchedule.service'
import { iScheduleCreate } from '../interfaces/schedule.interface'
import { listScheduleRealEstateService } from '../services/schedule/listScheduleRealEstate.service'

class SchedulesController {
  async scheduleRs(req: Request, res: Response) {
    const { realEstateId } = req.params

    const schedules = await listScheduleRealEstateService(+realEstateId)

    return res.status(200).json(schedules)
  }

  async create(req: Request, res: Response) {
    const payload: iScheduleCreate = req.body
    const { id: token_id } = req.isAdmin

    const schedule = await createScheduleService(payload, token_id)

    return res.status(201).json(schedule)
  }
}

export const schedulesController = new SchedulesController()
