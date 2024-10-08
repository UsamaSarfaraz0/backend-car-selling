const CarPost = require("../models/CarPost");
const mongoose = require("mongoose");

exports.createCarPost = async (req, res) => {
  try {
    const { carModel, price, phoneNumber, city, createdByUser } = req.body;

    if (!createdByUser || !mongoose.Types.ObjectId.isValid(createdByUser)) {
      return res
        .status(400)
        .json({ error: "createdByUser must be a valid user ID." });
    }

    const picturesUrls = req.files.map((file) => file.path);

    const newCarPost = new CarPost({
      carModel,
      price,
      phoneNumber,
      city,
      picturesUrls,
      createdByUser,
    });

    await newCarPost.save();

    res.status(201).json({
      message: "Car post created successfully!",
      carPost: newCarPost,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
