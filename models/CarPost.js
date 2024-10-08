const mongoose = require("mongoose");
const { Schema } = mongoose;

const carPostSchema = new Schema(
  {
    carModel: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    picturesUrls: {
      type: [String],
      required: false,
    },
    createdByUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const CarPost = mongoose.model("CarPost", carPostSchema);

module.exports = CarPost;
