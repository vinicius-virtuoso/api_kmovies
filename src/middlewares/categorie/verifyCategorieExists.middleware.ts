import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../../data-source'
import { Category } from '../../entities/category.entity'
import { AppError } from '../../errors'

export const verifyCategorieExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body

  const categorieRepo = AppDataSource.getRepository(Category)
  const findUser = await categorieRepo.exist({
    where: { name },
  })

  if (findUser) {
    throw new AppError('Category already exists', 409)
  }

  return next()
}
