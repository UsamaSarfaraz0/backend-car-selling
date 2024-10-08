const express = require("express");
const router = express.Router();
const carPostController = require("../controllers/carPostController");
const upload = require("../middleware/multer");

router.post(
  "/sellingpost",
  upload.array("picture", 10),
  carPostController.createCarPost
);

module.exports = router;
