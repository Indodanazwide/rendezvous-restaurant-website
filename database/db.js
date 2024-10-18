import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Database connection
async function initializeDbConnection() {
    try {
        const db = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            queueLimit: 0
        });

        console.log('Database connected');
        return db;
    } catch (error) {
        console.error(`Database connection failed: ${error}`);
        throw error;
    }
}

const db = await initializeDbConnection();

export default db;