import { z } from 'zod'

export const scheduleCreateSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
})
