import express from 'express';
import db from '../config/db.js';

const cartRouter = express.Router();

// Cart POST
cartRouter.post('/', (req, res) => {
    console.log('Posting items in cart ntwana...');
    const cartItems = req.body.cart;

    if (!cartItems || cartItems.length === 0) {
        console.log('Cart i empty boy...')
        return res.status(400).json({ message: 'Cart is empty' });
    }

    // Insert each cart item into the database
    const insertCartItemQuery = 'INSERT INTO cart (menu_item_id, quantity) VALUES (?, ?)';

    cartItems.forEach(item => {
        db.query(insertCartItemQuery, [item.menu_item_id, item.quantity], (err, result) => {
        if (err) {
            console.log('Error inserting cart items:', err);
            return res.status(500).json({ message: 'Error placing order' });
        }
        });
    });

    return res.status(200).json({ message: 'Order placed successfully' });
});

export default cartRouter;