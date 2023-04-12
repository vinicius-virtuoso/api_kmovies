import { Request, Response } from 'express'
import { listUsersService } from '../services/users/listUsers.service'
import { createUserService } from '../services/users/createUser.service'
import { iUserCreate } from '../interfaces/user.interface'
import { updateUsersService } from '../services/users/updateUser.service'
import { deleteUserService } from '../services/users/deleteUser.service'

class UsersController {
  async create(req: Request, res: Response) {
    const { name, email, password, admin = false }: iUserCreate = req.body

    const user = await createUserService({ name, email, password, admin })

    return res.status(201).json(user)
  }

  async read(req: Request, res: Response) {
    const users = await listUsersService()

    return res.status(200).json(users)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params

    const user = await updateUsersService(id, req.body)

    return res.status(200).json(user)
  }

  async softDelete(req: Request, res: Response) {
    const { id } = req.params

    const user = await deleteUserService(id)

    return res.status(204).json(user)
  }
}

export const usersController = new UsersController()
