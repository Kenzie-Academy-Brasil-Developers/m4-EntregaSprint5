import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserRequest, IUserUpdate } from "../interfaces/users";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
  isAdm: yup.boolean().required(),
});

const responseUserSerializer: SchemaOf<IUser> = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string().email(),
  isAdm: yup.boolean(),
  isActive: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

const listUsersSerializer = yup.array(responseUserSerializer);

const userUpdateSerializar: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
});

export {
  userSerializer,
  responseUserSerializer,
  listUsersSerializer,
  userUpdateSerializar,
};
