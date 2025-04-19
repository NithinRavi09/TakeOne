import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/mongo";
import authRoutes from './interfaces/routers/authRoutes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running');
});
  

app.use('/api/auth', authRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));