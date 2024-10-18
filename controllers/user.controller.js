import db from "../database/db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// User sign up
export const signUp = async (req, res) => {
    // get data from the database
    const { user_name, user_email, user_password, user_role } = req.body;

    // validate user role
    if (!['admin', 'customer'].includes(user_role)) {
        return res.status(400).json({ error: 'Invalid user role' });
    }

    try {
        console.log('Hashing the password')
        // hash password
        const hashedPassword = await bcrypt.hash(user_password, 10);

        console.log('Inserting the user')
        // insert user into database
        const [result] = await db.execute(
            `INSERT INTO users (user_name, user_email, user_password, user_role) VALUES (?, ?, ?, ?)`,
            [user_name, user_email, hashedPassword, user_role]
        );

        console.log('Creating the token')
        // create JWT token for the user
        const token = jwt.sign({ id: result.insertId, role: user_role }, jwtSecret, { expiresIn: '1h' });

        console.log('Sending feedback')
        // send back the success message with the JWT token
        res.status(201).json({
            message: 'User created successfully',
            token,
            id: result.insertId
        })
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ error: 'User with this email already exists' });
        } else {
            console.error('Error signing up user:', error);
            res.status(500).json({ error: `An error occurred while signing up the user${error}` });
        }
    }
}

// User sign in
export const signIn = async (req, res) => {
    // get data from the database
    const { user_email, user_password } = req.body;

    try {
        // Fetch user from the database
        const [rows] = await db.execute(`SELECT * FROM users WHERE user_email = ?`, [user_email]);


        if (rows.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = rows[0];

        const passwordMatch = await bcrypt.compare(user_password, user.user_password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.user_id, role: user.user_role }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        console.log('Generated Token:', token);

        // Send back the success message with the JWT token and user details
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.user_id,
                name: user.user_name,
                email: user_email,
                role: user.user_role
            }
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'An error occurred while logging in the user' });
    }
}

// User profile
export const getProfile = async (req, res) => {
    // get user id from the token
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token is required' });
    }

    try {
        // verify token and extract user id
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        // fetch user details from the database
        const [rows] = await db.execute(`SELECT user_id, user_name, user_email, user_role FROM users WHERE user_id = ?`, [userId]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'User  not found' });
        }

        const user = rows[0];

        // Send back the user details to the frontend
        res.status(200).json({
            id: user.user_id,
            name: user.user_name,
            email: user.user_email,
            role: user.user_role
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'An error occurred while fetching the user profile' });
    }
}

// Update user profile
export const updateProfile = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token is required' });
    }

    try {
        // Verify token and extract user id
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        // Get updated data from request body
        const { user_name, user_email, user_password } = req.body;

        // Prepare the update query
        let updates = [];
        let values = [];

        if (user_name) {
            updates.push('user_name = ?');
            values.push(user_name);
        }

        if (user_email) {
            updates.push('user_email = ?');
            values.push(user_email);
        }

        if (user_password) {
            const hashedPassword = await bcrypt.hash(user_password, 10);
            updates.push('user_password = ?');
            values.push(hashedPassword);
        }

        // If no updates provided, return an error
        if (updates.length === 0) {
            return res.status(400).json({ error: 'No fields to update' });
        }

        // Add the userId to the values array
        values.push(userId);

        // Execute the update query
        await db.execute(
            `UPDATE users SET ${updates.join(', ')} WHERE user_id = ?`,
            values
        );

        res.status(200).json({ message: 'User  profile updated successfully' });
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ error: 'An error occurred while updating the user profile' });
    }
}

// Delete user profile
export const deleteProfile = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token is required' });
    }

    try {
        // Verify token and extract user id
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        // Execute the delete query
        const [result] = await db.execute(
            `DELETE FROM users WHERE user_id = ?`,
            [userId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User  not found' });
        }

        res.status(200).json({ message: 'User  profile deleted successfully' });
    } catch (error) {
        console.error('Error deleting user profile:', error);
        res.status(500).json({ error: 'An error occurred while deleting the user profile' });
    }
}