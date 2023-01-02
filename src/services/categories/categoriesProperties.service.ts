import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";

const categoriesPropertiesService = async (catId: string) => {
  const categoriesRepository = AppDataSource.getRepository(Category);

  const categories = await categoriesRepository
    .createQueryBuilder("categories")
    .innerJoinAndSelect("categories.propertie", "propertie")
    .where("categories.id = :catId", { catId: catId })
    .getMany();

  return categories;
};

export default categoriesPropertiesService;
