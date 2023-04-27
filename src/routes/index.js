import { Router } from "express";
import pizzaRouter from "./pizza.js";
const indexRouter = Router();

const prefix = "/api";

indexRouter.get('/', (req, res) => {
  res.send('Bienvenido');
})
indexRouter.get(prefix, (req, res) =>{
    res.send("api de pizzas");
});

indexRouter.use(`${prefix}/pizza`, pizzaRouter)



export default indexRouter;