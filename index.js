import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import pizzaRouter from "./router/pizza.router.js";
import usersRourter from "./router/users.router.js";

import { MongoClient } from "mongodb";
dotenv.config();
const app = express();

const PORT = process.env.PORT;
// 
const MONGO_URL = process.env.MONGO_URL;


export const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongo is connected !!!  ");

app.use(express.json());
app.use(cors());
app.use("/",pizzaRouter);
app.use("/",usersRourter);
// const pizzalist = [
//   {
//     name: "Pepper Barbecue Chicken",
//     prices: 350,
//     category: "nonveg",
//     image: "https://www.dominos.co.in//files/items/Pepper_Barbeque_&_Onion.jpg",
//     description: "Pepper Barbecue Chicken I Cheese",
//   },
//   {
//     name: "Non Veg Supreme",

//     prices: 400,

//     category: "nonveg",
//     image:
//       "https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp",
//     description:
//       "The supreme pizza is traditionally topped with pepperoni, sausage, meatballs, mushrooms, green bell peppers, and onions. But not all of them are the same and some restaurants make theirs slightly different.",
//   },
//   {
//     name: "Golden Corn Pizza",

//     prices: 350,
//     category: "veg",
//     image: "https://www.dominos.co.in//files/items/Corn_&_Cheese.jpg",
//     description:
//       "Regardless of how you're preparing it, corn adds a fresh, sweet crunch to mealtime that just can't be replicated by anything else. And it's that inimitable burst of crunchy sweetness that makes corn the perfect pizza topping too",
//   },
//   {
//     name: " Red Paprika Pizza",

//     prices: 200,
//     category: "nonveg",
//     image: "https://www.dominos.co.in//files/items/5_Pepper.jpg",
//     description:
//       "Fresh, tender and deep red color ideal for grilled and roasted cuisines to enhance the extra punch in veg and non veg food. Red paprika is used on pizzas, sandwiches, wraps, etc, it is wonderful on nachos, crackers with cheese and for making chilly cheese toast.",
//   },
//   {
//     name: "Margerita",

//     prices: 400,
//     category: "veg",
//     image:
//       "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza.jpg",
//     description:
//       "Pizza Margherita (pronounced mahr-geh-ree-tah) is basically a Neapolitan pizza, typically made with tomatoes, mozzarella cheese, garlic, fresh basil, and extra-virgin olive oil. I think of it as a sophisticated version of your basic cheese pizza and also a wonderful Caprese salad, but with a crust.",
//   },
//   {
//     name: " Cheese Margerita Pizza ",

//     prices: 350,
//     category: "veg",
//     image:
//       "https://www.dominos.co.in//files/items/Double_Cheese_Margherita.jpg",
//     description:
//       "Our double cheese pizza comes with the goodness of extra cheese. You can see oodles of liquid cheese coming out with every bite, making the pizza all the more delicious.",
//   },
// ];
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

//generate hashed password

