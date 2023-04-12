import { User } from '../../entities/user.entity'
import { AppDataSource } from '../../data-source'
import { iUserLogin } from '../../interfaces/user.interface'
import { compare, compareSync } from 'bcryptjs'
import { AppError } from '../../errors'
import { sign } from 'jsonwebtoken'

export const loginService = async (payload: iUserLogin) => {
  const { email, password } = payload

  const userRepo = AppDataSource.getRepository(User)
  const userFind = await userRepo.findOneBy({ email: email })

  if (!userFind) {
    throw new AppError('Invalid credentials', 401)
  }

  const comparePassword = await compare(password, userFind.password)

  if (!comparePassword) {
    throw new AppError('Invalid credentials', 401)
  }

  const token: string = sign({ email }, String(process.env.SECRET_KEY), {
    expiresIn: process.env.EXPIRES_IN,
    subject: String(userFind.id),
  })

  return {
    token,
  }
}
