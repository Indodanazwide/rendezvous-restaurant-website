import express from 'express';
import db from '../database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import router from '../routes/router.js';

dotenv.config();

// inits
const server = express();
const port = process.env.PORT;

// middleware
server.use(express.json());
server.use(cors({ origin: 'http://localhost:5173' }));
 
// router
server.use('/', router)

// start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
