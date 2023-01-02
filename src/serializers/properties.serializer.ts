import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../interfaces/properties";

const propertySchema = yup.object().shape({
  value: yup.number(),
  size: yup.number(),
  categoryId: yup.string(),
  address: yup.string(),
});

export { propertySchema };
