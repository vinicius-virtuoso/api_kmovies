import { RealEstate } from './../../entities/real_estate.entity'
import { Address } from './../../entities/address.entity'
import { AppDataSource } from './../../data-source'
import { iRealEstateCreate } from '../../interfaces/realEstate.interface'
import { Category } from '../../entities'

export const createRealStateService = async (realEstate: iRealEstateCreate) => {
  const addressRepo = AppDataSource.getRepository(Address)
  const addressSave = await addressRepo.save({
    street: realEstate.address.street,
    zipCode: realEstate.address.zipCode,
    city: realEstate.address.city,
    state: realEstate.address.state,
    number: realEstate.address.number,
  })

  const categoryRepo = AppDataSource.getRepository(Category)
  const categoryFind = await categoryRepo.findOneBy({
    id: realEstate.categoryId,
  })

  if (addressSave && addressSave.id && categoryFind && categoryFind.id) {
    const realEstateRepo = AppDataSource.getRepository(RealEstate)
    const createRealEstate = realEstateRepo.create({
      sold: realEstate.sold,
      value: realEstate.value,
      size: realEstate.size,
      address: addressSave,
      category: categoryFind,
    })

    const realEstateResult = await realEstateRepo.save(createRealEstate)

    if (realEstateResult) {
      const realEstateQueryRepo = AppDataSource.getRepository(RealEstate)
      const realEstateQueryBuilder =
        realEstateQueryRepo.createQueryBuilder('real_estate')

      const result = await realEstateQueryBuilder
        .select(['real_estate'])
        .innerJoinAndSelect(
          'real_estate.address',
          'address',
          'address.id = :adId',
          {
            adId: realEstateResult.id,
          }
        )
        .innerJoinAndSelect(
          'real_estate.category',
          'category',
          'category.id = :categoryId',
          {
            categoryId: realEstateResult.category.id,
          }
        )
        .where('real_estate.id = :id', { id: realEstateResult.id })
        .getOne()

      return result
    }
  }
}
