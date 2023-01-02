import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import categoriesPropertiesService from "../services/categories/categoriesProperties.service";
import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";

const createCategoryController = async (req: Request, res: Response) => {
  const categoryData: ICategoryRequest = req.body;
  const newCategory = await createCategoryService(categoryData);
  return res.status(201).json(newCategory);
};

const listCategoriesController = async (req: Request, res: Response) => {
  const categoriesList = await listCategoriesService();
  return res.status(200).json(categoriesList);
};

const categoriesPropertiesController = async (req: Request, res: Response) => {
  const catId: string = req.params.id;
  const categoriesProp = await categoriesPropertiesService(catId);
  return res.status(200).json(categoriesProp);
};

export {
  createCategoryController,
  listCategoriesController,
  categoriesPropertiesController,
};
