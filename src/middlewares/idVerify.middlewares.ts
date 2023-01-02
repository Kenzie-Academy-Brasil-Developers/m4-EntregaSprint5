import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";

const idVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const userRepository = AppDataSource.getRepository(User);

    const verifyId = await userRepository.findOneBy({
      id: id,
    });

    if (!verifyId) {
      throw new AppError("Invalid Id", 404);
    }

    return next();
  } catch (error) {
    throw new AppError("Invalid Id", 404);
  }
};

export default idVerifyMiddleware;
