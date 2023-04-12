import { User } from '../../entities/user.entity'
import { AppDataSource } from '../../data-source'

export const listUsersService = async () => {
  const usersRepo = AppDataSource.getRepository(User)
  const users = await usersRepo.find({
    relations: {
      schedules: true,
    },
  })

  const usersMap = users.map(
    ({ id, name, email, admin, createdAt, updatedAt, deletedAt }) => {
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
  )

  return usersMap
}
