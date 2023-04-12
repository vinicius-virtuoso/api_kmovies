import { AppDataSource } from '../../data-source'
import { NextFunction, Request, Response } from 'express'
import { Schedule } from '../../entities'
import { AppError } from '../../errors'
import { iScheduleCreate } from '../../interfaces/schedule.interface'

export const verifyScheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, hour }: iScheduleCreate = req.body
  const { id: token_id } = req.isAdmin

  const scheduleRepo = AppDataSource.getRepository(Schedule)

  const scheduleUserFind = await scheduleRepo
    .createQueryBuilder('schedules')
    .innerJoinAndSelect('schedules.user', 'user')
    .where('user.id = :userId', {
      userId: token_id,
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
      'User schedule to this real estate at this date and time already exists',
      409
    )
  }

  return next()
}
