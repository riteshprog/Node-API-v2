const express = require("express");

const router = express.Router();
const Product = require("../models/productModal.js");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController.js");

// Get all products

router.get("/", getProducts);
// Get individual product

router.get("/:id", getProduct);
// Create products

router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
