import { AppDataSource } from '../../data-source'
import { Category } from '../../entities/category.entity'

export const listCategoriesService = async () => {
  const categoryRepo = AppDataSource.getRepository(Category)
  const categoriesFind = await categoryRepo.find()

  return categoriesFind
}
