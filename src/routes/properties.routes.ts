import { Router } from "express";
import {
  createPropertyController,
  listPropertiesController,
} from "../controllers/properties.controller";

const propertiesRoutes = Router();

propertiesRoutes.post("", createPropertyController);
propertiesRoutes.get("", listPropertiesController);

export default propertiesRoutes;
