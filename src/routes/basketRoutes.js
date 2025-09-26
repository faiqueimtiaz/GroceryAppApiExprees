import express from "express";
import {
  addBasketItem_controller,
  getAllBasketItems_Controller,
  getBasketItemById_Controller,
  deleteBasketItemById_Controller,
  updateBasketItemById_Controller,
  updatePurchasedBasketItemById_Controller
} from "../controllers/basketController.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Home");
// });

router.post("/basket/addItem", addBasketItem_controller);

router.get("/basket/items", getAllBasketItems_Controller);

router.get("/basket/item/:id", getBasketItemById_Controller);

router.delete("/basket/deleteItem/:id", deleteBasketItemById_Controller);

router.patch("/basket/updateItem/:id", updateBasketItemById_Controller);

router.patch("/basket/itemPurchased/:id", updatePurchasedBasketItemById_Controller);

export default router;
