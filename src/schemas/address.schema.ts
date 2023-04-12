import { z } from 'zod'

export const addressCreateScheme = z.object({
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).nullable().optional().default(null),
  city: z.string().max(20),
  state: z.string().max(2),
})
