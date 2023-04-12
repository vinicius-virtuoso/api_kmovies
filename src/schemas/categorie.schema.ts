import { z } from 'zod'

export const categorieCreateSchema = z.object({
  name: z.string().max(45).nonempty(),
})
