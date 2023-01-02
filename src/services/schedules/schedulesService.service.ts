import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import { Schedule } from "../../entities/schedules_users_properties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IScheduleRequest } from "../../interfaces/schedules";

const schedulesService = async (
  scheduleData: IScheduleRequest,
  userId: string
): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const propertyRepository = AppDataSource.getRepository(Property);
  const schaduleRepository = AppDataSource.getRepository(Schedule);

  const property = await propertyRepository.findOneBy({
    id: scheduleData.propertyId,
  });

  if (!property) {
    throw new AppError("Property not found", 400);
  }

  const user = await userRepository.findOneBy({
    id: userId,
  });

  const { date, hour } = schaduleRepository.create(scheduleData);

  const newSchedule = schaduleRepository.save({
    date,
    hour,
    property,
    user,
  });

  console.log(newSchedule);

  return "Scheduling done successfully";
};

export default schedulesService;
