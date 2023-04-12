import { AppDataSource } from '../../data-source'
import { Category } from '../../entities/category.entity'

export const listCategorieRealEstateService = async (categoryId: string) => {
  const categoryRepo = AppDataSource.getRepository(Category)
  const categoryFind = await categoryRepo.findOne({
    where: { id: parseInt(categoryId) },
    relations: { realEstate: true },
  })

  return categoryFind
}
