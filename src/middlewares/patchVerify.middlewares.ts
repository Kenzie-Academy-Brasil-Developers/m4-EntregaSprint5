import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const patchVerifyMiddlewares = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const patchData = req.body;

    const hasId = patchData.hasOwnProperty("id");
    const hasIsAdm = patchData.hasOwnProperty("isAdm");
    const hasIsActive = patchData.hasOwnProperty("isActive");

    if (hasId || hasIsAdm || hasIsActive) {
      throw new AppError("You can't atualize this fields, try againd", 401);
    }

    next();
  } catch (error) {
    throw new AppError("You can't atualize this fields, try againd", 401);
  }
};

export default patchVerifyMiddlewares;
