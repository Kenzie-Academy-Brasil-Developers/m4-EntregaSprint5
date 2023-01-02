import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";

const propertieScheduleService = async (propId: string) => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const schedules = await propertyRepository
    .createQueryBuilder("properties")
    .innerJoinAndSelect("properties.schedule", "schedule")
    .innerJoinAndSelect("schedule.user", "users")
    .where("properties.id :id_prop", { id_prop: propId })
    .getMany();

  return schedules;
};

export default propertieScheduleService;
