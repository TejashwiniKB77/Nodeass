const express = require("express");
const imageRoutes = require("./routes/imageRoutes");

const app = express();

// Middleware
app.use(express.json());

// Image API route
app.use("/images", imageRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
