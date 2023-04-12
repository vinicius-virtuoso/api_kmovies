import { Request, Response } from 'express'
import { loginService } from '../services/login/login.service'

export class LoginController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body

    const user = await loginService({ email, password })

    return res.status(200).json(user)
  }
}

export const loginController = new LoginController()
