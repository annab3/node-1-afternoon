const express = require("express");
const app = express();
const products = require("./products.json");
const getProducts = require("./getProducts.js");
const getProduct = require("./getProduct.js");


app.get("/api/products", getProducts);

app.get("/api/product/:id", getProduct);

app.listen(5050, () => console.log("I can hear you! on 5050"));