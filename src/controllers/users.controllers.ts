import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import patchUserService from "../services/users/patchUser.services";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const data = await createUserService(userData);
  return res.status(201).json(data);
};

const listUsersController = async (req: Request, res: Response) => {
  const data = await listUsersService();
  return res.status(200).json(data);
};

const patchUserController = async (req: Request, res: Response) => {
  const newData: IUserUpdate = req.body;
  const userId = req.user.id;
  const patchUserId = req.params.id;
  const data = await patchUserService(newData, userId, patchUserId);
  return res.json(data);
};

const deleteUserController = async (req: Request, res: Response) => {
  const deleteUserId = req.params.id;
  await deleteUserService(deleteUserId);
  return res.status(204).json();
};

export {
  createUserController,
  listUsersController,
  patchUserController,
  deleteUserController,
};
