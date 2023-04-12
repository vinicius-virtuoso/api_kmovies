import { RealEstate } from './../../entities/real_estate.entity'
import { AppDataSource } from './../../data-source'

export const listRealEstates = async () => {
  const realEstateRepo = AppDataSource.getRepository(RealEstate)
  const realEstateList = await realEstateRepo.find({
    relations: {
      address: true,
    },
  })

  return realEstateList
}
