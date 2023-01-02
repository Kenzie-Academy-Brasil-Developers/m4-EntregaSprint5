import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Category } from "../entities/categories.entity";
import { AppError } from "../errors";
import { ICategoryRequest } from "../interfaces/categories";

const categorieVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const catName: ICategoryRequest = req.body;

    const categoriesRepository = AppDataSource.getRepository(Category);

    const verifyCategory = await categoriesRepository.findOneBy({
      name: catName.name,
    });

    if (verifyCategory) {
      throw new AppError("Category already exists", 409);
    }

    return next();
  } catch (error) {
    throw new AppError("Category already exists", 409);
  }
};

export default categorieVerifyMiddleware;
