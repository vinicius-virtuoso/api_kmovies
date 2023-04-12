import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../errors'
import { iScheduleCreate } from '../../interfaces/schedule.interface'

export const verifyHoursIsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { hour }: iScheduleCreate = req.body

  if (Number(hour.split(':')[0]) < 8 || Number(hour.split(':')[0]) > 18) {
    throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)
  }

  return next()
}
