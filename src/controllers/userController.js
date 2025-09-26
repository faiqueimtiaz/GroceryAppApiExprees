import {
  createUser_Service,
  getAllUsers_Service,
  getUserById_Service,
  updateUserById_service,
  deleteUserById_service,
} from "../services/userService.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({ status, message, data });
};

export const createUser_Controller = async (req, res, next) => {
  const newUser = await createUser_Service(req.body);
  handleResponse(res, 201, "User created successfully", newUser);
};

export const getAllUsers_Controller = async (req, res, next) => {
  const data = await getAllUsers_Service();
  handleResponse(res, 200, "Users fetched successfully", data);
};

export const getUserById_Controller = async (req, res, next) => {
  const data = await getUserById_Service(req.params.id);
  if (data === null) {
    handleResponse(res, 404, "Recor not found.", data);
  } else {
    handleResponse(res, 200, "User fetched successfully", data);
  }
};

export const deleteUserById_Controller = async (req, res) => {
  const data = await deleteUserById_service(req.params.id);

  if (data === null) {
    handleResponse(res, 404, "No record found.", data);
  } else {
    handleResponse(res, 201, "item deleted successfully.", data);
  }
};

export const updateUserItemById_Controller = async (req, res) => {
  const data = await updateUserById_service(req.params.id, req.body);

  if (data === null) {
    handleResponse(res, 404, "No record found.", data);
  } else {
    handleResponse(res, 201, "item updated successfully.", data);
  }
};
