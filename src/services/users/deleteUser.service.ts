import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";

const deleteUserService = async (id: string) => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      id: id,
    });

    console.log(user);

    if (user === null) {
      throw new AppError("Invalid id!", 404);
    }

    if (!user.isActive) {
      throw new AppError("User is already inactive", 400);
    }

    user.isActive = false;
    await userRepository.save(user);

    return {};
  } catch (error) {
    throw new AppError(error.message, 400);
  }
};

export default deleteUserService;
