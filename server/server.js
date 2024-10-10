import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/db.js';
import menuRoutes from './routes/menu.routes.js';
import cartRouter from './routes/cart.routes.js';
import reservationRoutes from './routes/reservation.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

// Middleware to handle JSON and URL-encoded req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173' }));

// Routes
app.use('/menu', menuRoutes);
app.use('/cart', cartRouter);
app.use('/reservations', reservationRoutes);

// Get __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Server static files from Vue.js build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Fallback for serving Vue's index.html for all unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});