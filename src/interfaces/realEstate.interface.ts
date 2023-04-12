import { z } from 'zod'
import { DeepPartial, Repository } from 'typeorm'
import { RealEstate } from './../entities/real_estate.entity'
import { realEstateCreateSchema } from '../schemas'

type iRealEstateCreate = z.infer<typeof realEstateCreateSchema>
type iRealEstateUpdate = DeepPartial<RealEstate>
type iRealEstateRepo = Repository<RealEstate>

export { iRealEstateCreate, iRealEstateUpdate, iRealEstateRepo }
