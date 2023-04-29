import express from "express";
import { getPizzas, createPizza } from "../service/pizza.service.js";

const router = express.Router();
router.get("/pizzalist", async function (request, response) {
  const pizzalist = await getPizzas();
  console.log(pizzalist);
  response.send(pizzalist);
});
router.post("/createpizza", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await createPizza(data);
  response.send(result);
});
export default router;
