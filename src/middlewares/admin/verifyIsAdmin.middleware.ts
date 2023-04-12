import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../errors'

export const verifyIsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { admin } = req.isAdmin

  if (admin === false) {
    throw new AppError('Insufficient permission', 403)
  }

  return next()
}
