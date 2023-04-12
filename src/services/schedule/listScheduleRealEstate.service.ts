import { AppDataSource } from '../../data-source'
import { RealEstate, Schedule } from '../../entities'

export const listScheduleRealEstateService = async (realEstateId: number) => {
  const realEstateRepo = AppDataSource.getRepository(RealEstate)
  const realEstate = await realEstateRepo.findOne({
    where: { id: realEstateId },
    relations: {
      address: true,
      category: true,
      schedules: {
        user: true,
      },
    },
  })

  return realEstate
}
