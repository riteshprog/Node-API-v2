const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    project_name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    project_location: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
    },
    checklist: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
