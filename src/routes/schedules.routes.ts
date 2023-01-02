import { Router } from "express";
import {
  propertieScheduleController,
  schedulesController,
} from "../controllers/schedules.controller";
import adminVerifyMiddleware from "../middlewares/adminVerify.middlewares";
import tokenVerifyMiddlewares from "../middlewares/tokenVerify.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post("", tokenVerifyMiddlewares, schedulesController);
schedulesRoutes.get(
  "/properties/:id",
  tokenVerifyMiddlewares,
  adminVerifyMiddleware,
  propertieScheduleController
);

export default schedulesRoutes;
