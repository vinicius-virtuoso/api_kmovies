import { AppDataSource } from '../../data-source'
import { NextFunction, Request, Response } from 'express'
import { Schedule } from '../../entities'
import { AppError } from '../../errors'
import { iScheduleCreate } from '../../interfaces/schedule.interface'

export const verifyExistScheduleRs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { realEstateId, date, hour }: iScheduleCreate = req.body

  const scheduleRepo = AppDataSource.getRepository(Schedule)

  const scheduleUserFind = await scheduleRepo
    .createQueryBuilder('schedules')
    .innerJoinAndSelect('schedules.realEstate', 'rs')
    .where('rs.id = :rsId', {
      rsId: realEstateId,
    })
    .andWhere('schedules.date = :dateD', {
      dateD: date,
    })
    .andWhere('schedules.hour = :hourH', {
      hourH: hour,
    })
    .getOne()

  if (scheduleUserFind) {
    throw new AppError(
      'Schedule to this real estate at this date and time already exists',
      409
    )
  }

  return next()
}
