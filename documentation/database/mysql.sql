-- Create the database and use it
CREATE DATABASE Rendezvous_DB;
USE Rendezvous_DB;

-- Create the users table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL, -- Store password hashes using bcrypt
    user_role ENUM('customer', 'admin') NOT NULL DEFAULT 'customer', -- Role can be 'customer' or 'admin'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Track when the user was created
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Track when user details are updated
);

-- Create the categories table
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL UNIQUE, -- Make sure categories are unique
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the menu_items table with a foreign key reference to categories
CREATE TABLE menu_items (
    menu_item_id INT AUTO_INCREMENT PRIMARY KEY,
    menu_item_name VARCHAR(255) NOT NULL,
    menu_item_price DECIMAL(10, 2) NOT NULL,
    menu_item_image VARCHAR(255) NOT NULL,
    category_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
);

-- Create the cart table
CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT, -- Reference to the user who owns the cart
    menu_item_id INT, -- Reference to the menu item
    quantity INT DEFAULT 1 CHECK (quantity > 0), -- Ensure quantity is greater than 0
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(menu_item_id) ON DELETE CASCADE
);

-- Create the notifications table
CREATE TABLE notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT, -- The user receiving the notification
    notification_message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE, -- Track if the notification has been read
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Create the orders table
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT, -- Reference to the user who made the order
    total_amount DECIMAL(10, 2) NOT NULL,
    payment_status ENUM('pending', 'paid', 'failed') DEFAULT 'pending', -- Payment tracking
    order_status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending', -- Track order status
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Create the order_items table to link orders with menu items
CREATE TABLE order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT, -- Reference to the order
    menu_item_id INT, -- Reference to the menu item
    quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0), -- Ensure valid quantity
    item_price DECIMAL(10, 2) NOT NULL, -- Store the price at the time of ordering
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(menu_item_id) ON DELETE CASCADE
);

-- Create the reservations table
CREATE TABLE reservations (
    reservation_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT, -- Reference to the user making the reservation
    reservation_name VARCHAR(255) NOT NULL,
    reservation_email VARCHAR(255) NOT NULL,
    reservation_date DATETIME NOT NULL,
    reservation_guests INT NOT NULL CHECK (reservation_guests > 0), -- Ensure guest count is positive
    reservation_special_request TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Insert data into categories
INSERT INTO categories (category_name) VALUES
('Desserts'),
('Sandwiches'),
('Light Meals'),
('Main Meals'),
('Cold Beverages'),
('Hot Beverages');

-- Insert data into menu_items
INSERT INTO menu_items (menu_item_name, menu_item_price, menu_item_image, category_id) VALUES
-- Desserts
('Delectable Chocolate Cake', 30.00, 'chocolate-cake.jpg', 1),
('Moist & Spicy Carrot Cake', 35.00, 'carrot-cake.jpg', 1),
('Delicious, Colourful Fruit Tart', 18.00, 'fruit-tart.jpg', 1),
('Decadent Chocolate Mousse', 25.00, 'chocolate-mousse.jpg', 1),

-- Sandwiches
('Cheese & Tomato', 22.00, 'Cheese-Tomato.jpg', 2),
('Cheese & Tomato with Chips', 30.00, 'Cheese-Tomato-Chips.jpg', 2),
('Chicken Mayonnaise', 25.00, 'Chicken-Mayonnaise.jpg', 2),
('Chicken Mayonnaise with Chips', 32.00, 'Chicken-Mayonnaise-Chips.jpg', 2),
('Spicy Chips', 25.00, 'Spicy-Chips.jpg', 2),

-- Light Meals
('Tasty Beef Quesadilla served with Sour Cream and Salsa', 35.00, 'Beef-Quesadilla.jpg', 3),

-- Main Meals
('Creamy Chicken Fettuccine with Parmesan Cheese and Parsley', 45.00, 'Chicken-Fettuccine.jpg', 4),
('Stuffed Portobella Mushrooms with Goat Cheese and Herbs', 45.00, 'Stuffed-Portobella-Mushrooms.jpg', 4),

-- Cold Beverages
('Cool-drinks', 17.00, 'drinks.jpg', 5),
('Grapetiser (Red)', 20.00, 'Grapetiser.jpg', 5),
('Appletiser (White)', 20.00, 'appletiser.jpg', 5),
('Liqui-Fruit Juice', 18.00, 'Liqui-Fruit.jpg', 5),
('Water: Still', 13.00, 'still.jpg', 5),
('Water: Sparkling', 13.00, 'sparkling.jpg', 5),
('Milkshake (Large) Strawberry', 30.00, 'Milkshake.jpg', 5),
('Dairy Smoothie (Large) Mixed Berry', 35.00, 'Smoothie.jpg', 5),

-- Hot Beverages
('Espresso', 15.00, 'Espresso.jpg', 6),
('Double Espresso', 20.00, 'Double-Espresso.jpg', 6),
('Americano', 20.00, 'Americano.jpg', 6),
('Cappuccino', 20.00, 'Cappuccino.jpg', 6),
('Café Latte', 20.00, 'Latte.jpg', 6),
('Café Mocha', 23.00, 'Mocha.jpg', 6),
('Hot Chocolate', 23.00, 'Hot-Chocolate.jpg', 6),
('Tea: 5 Roses/Rooibos', 16.00, 'Tea.jpg', 6),
('Coffee (Nescafé)', 13.00, 'Nescafé.jpg', 6);
