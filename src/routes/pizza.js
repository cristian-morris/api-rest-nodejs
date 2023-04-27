import { Router } from "express";

import {
  getpizzas,
  getpizza,
  createpizza,
  updatepizza,
  deletepizza,
  searchpizza,
  searchnamepizza
} from "../controllers/control.js"; 

const pizzaRouter = Router();

pizzaRouter.get("/", getpizzas);

pizzaRouter.get("/:id", getpizza);

pizzaRouter.post("/", createpizza);

pizzaRouter.put("/:id", updatepizza);

pizzaRouter.delete("/:id", deletepizza);

pizzaRouter.get("/buscar/:precio", searchpizza);

pizzaRouter.get("/search/:nombre", searchnamepizza);

export default pizzaRouter;