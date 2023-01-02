import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async (
  categoryData: ICategoryRequest
): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categoryVerify = await categoryRepository.findOneBy({
    name: categoryData.name,
  });

  if (categoryVerify) {
    throw new AppError("category already exists", 409);
  }

  const newCategory = categoryRepository.create(categoryData);
  await categoryRepository.save(newCategory);

  return newCategory;
};
export default createCategoryService;
