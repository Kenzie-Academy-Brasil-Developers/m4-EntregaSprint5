import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";
import { listUsersSerializer } from "../../serializers/user.serializers";

const listUsersService = async (): Promise<Array<IUser>> => {
  const userRepository = AppDataSource.getRepository(User);

  const usersList = await userRepository.find();

  const responseList = await listUsersSerializer.validate(usersList, {
    stripUnknown: true,
    abortEarly: false,
  });

  return responseList;
};

export default listUsersService;
