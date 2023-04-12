import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../errors'
import { iScheduleCreate } from '../../interfaces/schedule.interface'

export const verifyDayIsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date }: iScheduleCreate = req.body

  const formattedDate = new Date(date.split('/').reverse().join('/'))

  if (formattedDate.getDay() === 0 || formattedDate.getDay() === 6) {
    throw new AppError('Invalid date, work days are monday to friday', 400)
  }

  return next()
}
