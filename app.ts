import { Product } from "./product.model";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

const products = [
  { title: "A carpet", price: 29.99 },
  { title: "A book", price: 19.99 },
];

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
// const p1 = new Product("A book", 12.99);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
