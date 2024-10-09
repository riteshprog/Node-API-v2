const Project = require("../models/projectModal");
const asyncHandler = require("express-async-handlr");

// Get all Projects
const getProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Get individual project

const getProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // res.status(500).json({ message: error.message });
  }
});

// Create projects

const createProject = asyncHandler(async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update a product

const updateProject = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body);
    if (!project) {
      res.status(404);
      throw new Error(`can not find any product with Id ${id}`);
    }
    const updatedProject = await Project.findById(id);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// delete a product

const deleteProject = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      res.status(404);
      throw new Error(`can not find any product with Id ${id}`);
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
