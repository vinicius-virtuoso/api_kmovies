import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../errors'

export const verifyUpdateIsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  const { admin, id: token_id } = req.isAdmin

  if (id !== token_id) {
    if (admin === false) {
      throw new AppError('Insufficient permission', 403)
    }
  }

  return next()
}
