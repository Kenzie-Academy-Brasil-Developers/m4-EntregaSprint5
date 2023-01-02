import { Request, Response } from "express";
import { IAddressRequest, IPropertyRequest } from "../interfaces/properties";
import createPropertyService from "../services/properties/createProperty.service";
import listPropertiesService from "../services/properties/listProperties.service";

const createPropertyController = async (req: Request, res: Response) => {
  const addressData: IAddressRequest = req.body.address;
  const propertyData: IPropertyRequest = req.body;
  const newProperty = await createPropertyService(addressData, propertyData);
  return res.status(201).json(newProperty);
};

const listPropertiesController = async (req: Request, res: Response) => {
  const propertiesList = await listPropertiesService();
  return res.status(200).json(propertiesList);
};

export { createPropertyController, listPropertiesController };
