import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import {connectDB} from './libs/db.js';
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
}
);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
connectDB(); // Connect to the database when the server starts
}
); // Start the server on the specified port
// Add a route to handle the POST request from the frontend