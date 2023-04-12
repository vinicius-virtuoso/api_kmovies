import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../../data-source'
import { Category } from '../../entities/category.entity'
import { AppError } from '../../errors'

export const verifyCategorieNotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { categoryId } = req.params

  const categorieRepo = AppDataSource.getRepository(Category)
  const findUser = await categorieRepo.exist({
    where: { id: parseInt(categoryId) },
  })

  if (!findUser) {
    throw new AppError('Category not found', 404)
  }

  return next()
}
