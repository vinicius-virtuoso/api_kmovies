import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors'

export const verifyUserNotExistsId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  const userRepo = AppDataSource.getRepository(User)
  const findUser = await userRepo.exist({
    where: { id: parseInt(id) },
  })

  if (!findUser) {
    throw new AppError('User not found', 404)
  }

  return next()
}
