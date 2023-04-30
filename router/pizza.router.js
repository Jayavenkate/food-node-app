import express from "express";
import { getPizzas, createPizza } from "../service/pizza.service.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();
router.get("/pizzalist",auth, async function (request, response) {
  try{
    const pizzalist = await getPizzas();
    // console.log(pizzalist);
    response.send(pizzalist);
  }catch(err){
    response.status(401).send({message:err});
  }

});
router.post("/createpizza", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await createPizza(data);
  response.send(result);
});
export default router;
