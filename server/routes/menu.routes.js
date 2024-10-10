import express from 'express';
import db from '../config/db.js';

const menuRouter = express.Router();

// Fetch all menu items
menuRouter.get('/', (req, res) => {
    console.log('Fetching ntwana...');

    const fetchAllQuery = 'SELECT * FROM menu_items';

    db.query(fetchAllQuery, (err, allItems) => {
        if (err) {
            console.log('Ngithola i error dawg');
            res.status(500).send('Error fetching all menu items');
        } else {
            console.log('Ay kuright dawg');
            res.json(allItems);
        }
    });
});

// Cart POST
menuRouter.post('/cart', (req, res) => {
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

export default menuRouter;