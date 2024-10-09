const mongoose = require("mongoose");

const checklistItemSchema = new mongoose.Schema({
  point: { type: String, required: true },
  condition: { type: String, enum: ["1", "0", "N/A"], default: null },
  remarks: { type: String, default: "" },
});

const checklistSchema = mongoose.Schema(
  {
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    }, // Reference to the Project model
    checklist: [checklistItemSchema],
    status: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Checklist = mongoose.model("Checklist", checklistSchema);

module.exports = Checklist;
