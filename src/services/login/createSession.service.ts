import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import "dotenv/config";
import { AppError } from "../../errors";
import { loginSerializer } from "../../serializers/login.serializers";

const createSessionService = async (
  sessionData: IUserLogin
): Promise<string> => {
  try {
    const validatedData = await loginSerializer.validate(sessionData, {
      stripUnknown: true,
      abortEarly: false,
    });
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({
      email: validatedData.email,
    });

    if (!findUser) {
      throw new AppError("User of password invalid", 403);
    }

    const passwordMatch = await compare(
      validatedData.password,
      findUser.password
    );

    if (!passwordMatch) {
      throw new AppError("User of password invalid", 403);
    }

    const token = jwt.sign(
      {
        isAdm: findUser.isAdm,
        isActive: findUser.isActive,
      },
      process.env.SECRET_KEY,
      {
        subject: findUser.id,
        expiresIn: "24h",
      }
    );

    return token;
  } catch (error) {
    throw new AppError("User of password invalid", 403);
  }
};

export default createSessionService;
