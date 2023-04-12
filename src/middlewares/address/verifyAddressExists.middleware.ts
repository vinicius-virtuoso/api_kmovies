import { AppDataSource } from '../../data-source'
import { Address } from '../../entities/address.entity'
import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../errors'

export const verifyAddressExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { address } = req.body

  const addressRepo = AppDataSource.getRepository(Address)
  const addressFind = await addressRepo.findOneBy({ zipCode: address.zipCode })

  if (addressFind) {
    throw new AppError('Address already exists', 409)
  }

  return next()
}
