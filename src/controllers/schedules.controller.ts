import { Request, Response } from "express";
import { IScheduleRequest } from "../interfaces/schedules";
import propertieScheduleService from "../services/schedules/propertieSchedule.service";
import schedulesService from "../services/schedules/schedulesService.service";

const schedulesController = async (req: Request, res: Response) => {
  const scheduleData: IScheduleRequest = req.body;
  const userId: string = req.user.id;
  const newSchedule = await schedulesService(scheduleData, userId);
  return res.status(201).json(newSchedule);
};

const propertieScheduleController = async (req: Request, res: Response) => {
  const propId: string = req.params.id;
  const propSchedules = await propertieScheduleService(propId);
  return res.status(200).json(propSchedules);
};

export { schedulesController, propertieScheduleController };
