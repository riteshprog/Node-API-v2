const express = require("express");

const router = express.Router();
const Project = require("../models/projectModal.js");
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController.js");

// Get all products

router.get("/", getProjects);
// Get individual product

router.get("/:id", getProject);
// Create products

router.post("/", createProject);

// update a product
router.put("/:id", updateProject);

// delete a product
router.delete("/:id", deleteProject);

module.exports = router;
