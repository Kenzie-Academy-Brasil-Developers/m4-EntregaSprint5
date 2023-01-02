import AppDataSource from "../../data-source";
import { Address } from "../../entities/addresses.entity";
import { Category } from "../../entities/categories.entity";
import { Property } from "../../entities/properties.entity";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async (
  addressData: IAddressRequest,
  propertyData: IPropertyRequest
): Promise<Property> => {
  console.log(propertyData);
  const propertyRepository = AppDataSource.getRepository(Property);
  const addressRepository = AppDataSource.getRepository(Address);
  const categoryRepository = AppDataSource.getRepository(Category);

  const newAddress = addressRepository.create(addressData);
  await addressRepository.save(newAddress);

  const newProperty = propertyRepository.create(propertyData);
  await propertyRepository.save(newProperty);

  await propertyRepository.update(
    {
      id: newProperty.id,
    },
    {
      address: newAddress,
    }
  );
  return newProperty;
};

export default createPropertyService;
