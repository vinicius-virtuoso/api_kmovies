import { DeepPartial, Repository } from 'typeorm'
import { z } from 'zod'
import { User } from '../entities/user.entity'
import { userCreateSchema } from '../schemas'

type iUserCreate = z.infer<typeof userCreateSchema>
type iUserLogin = Pick<User, 'email' | 'password'>
type iUserUpdate = DeepPartial<User>
type iUserRepo = Repository<User>

export { iUserCreate, iUserLogin, iUserUpdate, iUserRepo }
