import { User } from '../../entities/user.entity'
import { AppDataSource } from '../../data-source'

export const deleteUserService = async (id: string) => {
  const usersRepo = AppDataSource.getRepository(User)
  await usersRepo.softRemove({ id: parseInt(id) })

  return []
}
