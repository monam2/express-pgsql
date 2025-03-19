import {
  createUserService,
  deleteUserService,
  getAllUserService,
  getUserByIdService,
  updateUserService,
} from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createUserService(name, email);
    const message = "User created Successfully";
    handleResponse(res, 201, message, newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUserService();
    const message = "Get All Users Successfully";
    handleResponse(res, 200, message, users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(id);

    if (!user) return handleResponse(res, 404, "User not found", user);

    const message = "Get User Successfully";
    handleResponse(res, 200, message, user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await updateUserService(id, name, email);
    if (!updatedUser)
      return handleResponse(res, 404, "User not found", updatedUser);

    const message = "Update User Successfully";
    handleResponse(res, 200, message, updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserService(id);

    if (!deleteUser)
      return handleResponse(res, 404, "User not found", deleteUser);
    const message = "Delete User Successfully";
    handleResponse(res, 200, message, deletedUser);
  } catch (err) {
    next(err);
  }
};
