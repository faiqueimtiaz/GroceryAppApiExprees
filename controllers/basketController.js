import express from "express";
import {
  addBasketItem_service,
  getAllBasketItems_service,
  getBasketItemByid_service,
  deleteBasketItemById_service,
  updateBasketItemById_service,
} from "../services/basketService.js";

const handleResponse = (res, status, msg, data = null) => {
  res.status(status).json({ status, msg, data });
};

export const addBasketItem_controller = async (req, res) => {
  const newBasketItem = await addBasketItem_service(req.body);
  handleResponse(res, 201, "New item added", newBasketItem);
};

export const getAllBasketItems_Controller = async (req, res) => {
  const allBasketItems = await getAllBasketItems_service();
  handleResponse(
    res,
    201,
    "basket items fetched successfully.",
    allBasketItems
  );
};

export const getBasketItemById_Controller = async (req, res) => {
  const data = await getBasketItemByid_service(req.params.id);

  if (data === null) {
    handleResponse(res, 404, "No record found.", data);
  } else {
    handleResponse(res, 201, "basket items fetched successfully.", data);
  }
};

export const deleteBasketItemById_Controller = async (req, res) => {
  const data = await deleteBasketItemById_service(req.params.id);

  if (data === null) {
    handleResponse(res, 404, "No record found.", data);
  } else {
    handleResponse(res, 201, "item deleted successfully.", data);
  }
};

export const updateBasketItemById_Controller = async (req, res) => {
  const data = await updateBasketItemById_service(req.params.id, req.body);

  if (data === null) {
    handleResponse(res, 404, "No record found.", data);
  } else {
    handleResponse(res, 201, "item updated successfully.", data);
  }
};
