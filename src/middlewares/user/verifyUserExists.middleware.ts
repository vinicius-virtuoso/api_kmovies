import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors'

export const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body

  if (email) {
    const userRepo = AppDataSource.getRepository(User)
    const findUser = await userRepo.exist({
      where: { email },
    })

    if (findUser) {
      throw new AppError('Email already exists', 409)
    }
  }

  return next()
}
