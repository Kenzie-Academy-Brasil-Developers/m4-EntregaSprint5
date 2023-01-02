import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  patchUserController,
} from "../controllers/users.controllers";
import adminVerifyMiddleware from "../middlewares/adminVerify.middlewares";
import idVerifyMiddleware from "../middlewares/idVerify.middlewares";
import patchVerifyMiddlewares from "../middlewares/patchVerify.middlewares";
import tokenVerifyMiddlewares from "../middlewares/tokenVerify.middleware";
import validateDataMiddleware from "../middlewares/validataData.middewares";
import {
  userSerializer,
  userUpdateSerializar,
} from "../serializers/user.serializers";

const userRoutes = Router();

userRoutes.post(
  "",
  validateDataMiddleware(userSerializer),
  createUserController
);

userRoutes.get(
  "",
  tokenVerifyMiddlewares,
  adminVerifyMiddleware,
  listUsersController
);

userRoutes.patch(
  "/:id",
  patchVerifyMiddlewares,
  validateDataMiddleware(userUpdateSerializar),
  idVerifyMiddleware,
  tokenVerifyMiddlewares,
  patchUserController
);

userRoutes.delete(
  "/:id",
  tokenVerifyMiddlewares,
  adminVerifyMiddleware,
  idVerifyMiddleware,
  deleteUserController
);

export default userRoutes;
