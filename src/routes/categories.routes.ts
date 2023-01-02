import { Router } from "express";
import {
  categoriesPropertiesController,
  createCategoryController,
  listCategoriesController,
} from "../controllers/categories.controller";
import adminVerifyMiddleware from "../middlewares/adminVerify.middlewares";
import tokenVerifyMiddlewares from "../middlewares/tokenVerify.middleware";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  tokenVerifyMiddlewares,
  adminVerifyMiddleware,
  createCategoryController
);
categoriesRoutes.get("", listCategoriesController);

categoriesRoutes.get("/:id/properties", categoriesPropertiesController);

export default categoriesRoutes;
