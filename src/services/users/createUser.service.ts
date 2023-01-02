import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUser, IUserRequest } from "../../interfaces/users";
import { responseUserSerializer } from "../../serializers/user.serializers";

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const newUser = userRepository.create(userData);

    console.log(newUser);

    await userRepository.save(newUser);

    const userResponse = await responseUserSerializer.validate(newUser, {
      stripUnknown: true,
      abortEarly: false,
    });

    return userResponse;
  } catch (error) {
    throw new AppError(
      "User already exists, try again with new informations",
      409
    );
  }
};

export default createUserService;
