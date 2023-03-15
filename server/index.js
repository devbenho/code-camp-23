const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.DB_URL.replace("<PASSWORD>", process.env.DB_PASSWORD), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connection successful!"))
.catch((err) => console.error("MongoDB connection error:", err.message));

// Start the server
const PORT = process.env.PORT || 4050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
