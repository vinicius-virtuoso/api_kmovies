import { RealEstate } from '../../entities/real_estate.entity'
import { AppDataSource } from '../../data-source'
import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../errors'

export const verifyRealEstateExistsParams = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { realEstateId } = req.params

  const realEstateRepo = AppDataSource.getRepository(RealEstate)
  const realEstateFind = await realEstateRepo.exist({
    where: { id: parseInt(realEstateId) },
  })

  if (!realEstateFind) {
    throw new AppError('RealEstate not found', 404)
  }

  return next()
}
