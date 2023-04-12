import { z } from 'zod'

export const userCreateSchema = z.object({
  name: z.string().max(45).nonempty(),
  email: z.string().email().max(45).nonempty(),
  password: z.string().max(120).min(1),
  admin: z.boolean().optional().default(false),
})

export const userUpdateSchema = z.object({
  email: z.string().email().max(45).nonempty().optional(),
  name: z.string().max(45).nonempty().optional(),
  password: z.string().max(120).min(1).nonempty().optional(),
})

export const updateReturnSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  admin: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
})
