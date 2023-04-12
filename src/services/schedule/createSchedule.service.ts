import { Schedule } from './../../entities/schedule.entity'
import { AppDataSource } from '../../data-source'
import { iScheduleCreate } from '../../interfaces/schedule.interface'
import { RealEstate, User } from '../../entities'

export const createScheduleService = async (
  payload: iScheduleCreate,
  token_id: string
) => {
  const userRepo = AppDataSource.getRepository(User)
  const user = await userRepo.findOneBy({ id: parseInt(token_id) })

  const realEstateRepo = AppDataSource.getRepository(RealEstate)
  const realEstateId = await realEstateRepo.findOneBy({
    id: payload.realEstateId,
  })

  const scheduleRepo = AppDataSource.getRepository(Schedule)
  const schedule = scheduleRepo.create({
    date: payload.date,
    hour: payload.hour,
    realEstate: realEstateId!,
    user: user!,
  })
  await scheduleRepo.save(schedule)

  return { message: 'Schedule created' }
}
