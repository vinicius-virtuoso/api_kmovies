import { z } from 'zod'
import { addressCreateScheme } from './address.schema'

export const realEstateCreateSchema = z.object({
  sold: z.boolean().default(false),
  value: z.number().positive().or(z.string()),
  size: z.number().positive(),
  address: addressCreateScheme,
  categoryId: z.number(),
})
