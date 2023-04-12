import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { iUserCreate } from '../../interfaces/user.interface'

export const createUserService = async (payload: iUserCreate) => {
  const userRepo = AppDataSource.getRepository(User)

  const userCreate = userRepo.create(payload)

  const { id, name, email, admin, createdAt, updatedAt, deletedAt } =
    await userRepo.save(userCreate)

  return {
    id,
    name,
    email,
    admin,
    createdAt,
    updatedAt,
    deletedAt,
  }
}
