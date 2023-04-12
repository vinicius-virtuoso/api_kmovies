import { z } from 'zod'
import { DeepPartial, Repository } from 'typeorm'
import { Category } from '../entities/category.entity'
import { categorieCreateSchema } from '../schemas'

type iCategorieCreate = z.infer<typeof categorieCreateSchema>
type iCategorieUpdate = DeepPartial<Category>
type iCategorieRepo = Repository<Category>

export { iCategorieCreate, iCategorieUpdate, iCategorieRepo }
