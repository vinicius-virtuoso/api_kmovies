import { hash } from 'bcryptjs'
import { User } from '../../entities/user.entity'
import { AppDataSource } from '../../data-source'
import { iUserUpdate } from '../../interfaces/user.interface'
import { updateReturnSchema } from '../../schemas/user.schema'

export const updateUsersService = async (id: string, payload: iUserUpdate) => {
  const usersRepo = AppDataSource.getRepository(User)

  const userFind = await usersRepo.findOne({
    where: { id: parseInt(id) },
    relations: { schedules: true },
  })
  const user = usersRepo.create({
    ...userFind,
    ...payload,
  })

  await usersRepo.save(user)

  const returnUsers = updateReturnSchema.parse(user)

  return returnUsers
}
