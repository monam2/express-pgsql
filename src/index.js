import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// config
const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(cors);

// Routes

// Error Handling middleware

// Server Running
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
