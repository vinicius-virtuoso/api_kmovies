import { AppDataSource } from '../../data-source'
import { Category } from '../../entities/category.entity'

export const createCategorieService = async (name: string) => {
  const categoryRepo = AppDataSource.getRepository(Category)
  const categoryCreate = categoryRepo.create({ name })

  return await categoryRepo.save(categoryCreate)
}
