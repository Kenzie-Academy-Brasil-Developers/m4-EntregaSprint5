import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const adminVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdmin = req.user.isAdm;

  if (!isAdmin) {
    throw new AppError("Missing Admin authorization", 403);
  }

  return next();
};

export default adminVerifyMiddleware;
