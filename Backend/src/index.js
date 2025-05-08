import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from 'cookie-parser';
import {connectDB} from './libs/db.js';
import authRoutes from './routes/auth.route.js'; // Import the auth routes
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes); // Use the auth routes for any requests to /api/auth
app.get("/", (req, res) => {
    res.send("Hello World!");
}
);
app.use(cookieParser());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
connectDB(); // Connect to the database when the server starts
}
); // Start the server on the specified port
// Add a route to handle the POST request from the frontend