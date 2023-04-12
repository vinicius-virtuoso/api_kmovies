import { Request, Response } from 'express'
import { listCategoriesService } from '../services/categories/listCategories.service'
import { createCategorieService } from '../services/categories/createCategories.service'
import { listCategorieRealEstateService } from '../services/categories/listCategoriesRealEstate.service'

export class CategoriesController {
  async list(req: Request, res: Response) {
    const categories = await listCategoriesService()

    return res.status(200).json(categories)
  }

  async create(req: Request, res: Response) {
    const { name } = req.body

    const categorie = await createCategorieService(name)

    res.status(201).json(categorie)
  }

  async listRealEstate(req: Request, res: Response) {
    const { categoryId } = req.params

    const categorie = await listCategorieRealEstateService(categoryId)

    res.status(200).json(categorie)
  }
}

export const categoriesController = new CategoriesController()
