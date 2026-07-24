const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },

    data: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },

    order: {
        type: Number,
        default: 0,
    },
    },
    {
        _id: false,
    }
);

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    blocks: [blockSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Page", pageSchema);