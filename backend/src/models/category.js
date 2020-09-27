const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    parentId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
