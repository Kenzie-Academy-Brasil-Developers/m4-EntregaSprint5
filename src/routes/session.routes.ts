import { Router } from "express";
import { createSessionController } from "../controllers/session.controller";
import validateDataMiddleware from "../middlewares/validataData.middewares";
import { loginSerializer } from "../serializers/login.serializers";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  validateDataMiddleware(loginSerializer),

  createSessionController
);

export default sessionRoutes;
