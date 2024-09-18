import express, { Request, Response } from 'express';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
