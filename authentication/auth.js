import jwt from 'jsonwebtoken';

export const authenticaToken = (res, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log('Authenticated user:', req.user);
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid token' });
    }
};