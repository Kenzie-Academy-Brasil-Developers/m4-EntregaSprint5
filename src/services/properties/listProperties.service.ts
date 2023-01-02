import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";

const listPropertiesService = async (): Promise<Property[]> => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const properties = await propertyRepository.find({
    relations: {
      address: true,
      category: true,
    },
  });

  return properties;
};

export default listPropertiesService;
