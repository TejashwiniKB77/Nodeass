const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// GET /images/:imageName
router.get("/:imageName", (req, res) => {
    const imageName = req.params.imageName;

    // Security check
    if (imageName.includes("..")) {
        return res.status(400).json({ message: "Invalid file name" });
    }

    const imagePath = path.join(__dirname, "..", "images", imageName);

    // Check if image exists
    if (!fs.existsSync(imagePath)) {
        return res.status(404).json({ message: "Image not found" });
    }

    // Send image file
    res.sendFile(imagePath);
});

module.exports = router;
