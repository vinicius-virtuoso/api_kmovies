import { listRealEstates } from './../services/realEstate/listRealEstate.service'
import { Request, Response } from 'express'
import { iRealEstateCreate } from '../interfaces/realEstate.interface'
import { createRealStateService } from '../services/realEstate/realEstateCreate.service'

class RealEstateController {
  async list(req: Request, res: Response) {
    const realEstates = await listRealEstates()

    return res.status(200).json(realEstates)
  }

  async create(req: Request, res: Response) {
    const {
      sold = false,
      value,
      size,
      address,
      categoryId,
    }: iRealEstateCreate = req.body

    const realEstate = await createRealStateService({
      sold,
      value,
      size,
      address: {
        city: address.city,
        street: address.street,
        zipCode: address.zipCode,
        state: address.state,
        number: address.number,
      },
      categoryId,
    })

    return res.status(201).json(realEstate)
  }
}

export const realEstateController = new RealEstateController()
