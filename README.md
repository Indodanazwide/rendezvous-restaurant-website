Here's a rewritten `README.md` that includes setup instructions, descriptions of the technologies used, and the functionality of your "Rendezvous Restaurant" project:

---

# Rendezvous Restaurant Website

The **Rendezvous Restaurant Website** is a full-stack web application built to simulate a restaurant ordering system. Users can browse the menu, add items to their cart, and make reservations. The system includes both a frontend for user interaction and a backend for data management using MySQL.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- View a detailed menu categorized into desserts, sandwiches, beverages, etc.
- Add menu items to a shopping cart and manage quantities.
- Make a reservation by providing details such as name, email, date, guests, and special requests.
- Integration with a MySQL database to store menu items, reservations, and cart data.

## Technologies

### Frontend:
- **Vue.js**: A progressive JavaScript framework used for building user interfaces.
- **Axios**: A promise-based HTTP client to interact with the backend API.
- **HTML5 & CSS3**: For the structure and styling of the application.
- **Tailwind CSS**: A utility-first CSS framework for fast styling.

### Backend:
- **Node.js**: JavaScript runtime used to execute server-side code.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MySQL**: A relational database management system to store menu, cart, and reservation data.

### Dev Tools:
- **Vite**: A fast frontend build tool for Vue.js.
- **Postman**: API testing tool.
- **Git**: Version control system.

## Project Structure

```
rendezvous-restaurant-website/
│
├── client/                  # Frontend code
│   ├── src/                 # Vue components and pages
│   ├── public/              # Public assets (images, icons, etc.)
│   └── dist/                # Production build
│
├── server/                  # Backend code
│   ├── routes/              # API routes
│   ├── config/              # Configuration files (e.g., database connection)
│   └── server.js            # Main Express server file
│
├── package.json             # Project metadata and dependencies
├── README.md                # Project documentation
└── .gitignore               # Files and directories to ignore in Git
```

## Installation

### Prerequisites:
- **Node.js** (v14 or later)
- **MySQL** (v8 or later)
- **Git** (for version control)

### 1. Clone the repository:
```bash
git clone https://github.com/Indodanazwide/rendezvous-restaurant-website.git
```

### 2. Install dependencies:

#### Client (Frontend):
```bash
cd rendezvous-restaurant-website/client
npm install
```

#### Server (Backend):
```bash
cd ../server
npm install
```

### 3. Configure Environment Variables:
Create a `.env` file in the `server/` directory and add your MySQL credentials:

```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=mock_db
PORT=5000
```

## Usage

### Run the Backend:
```bash
cd server
npm run start
```

The backend server will run on `http://localhost:5000`.

### Run the Frontend:
```bash
cd ../client
npm run dev
```

The frontend will run on `http://localhost:5173`.

### Access the Application:
- Navigate to `http://localhost:5173` in your browser.
- You can now browse the menu, add items to your cart, and make reservations.

## Database Setup

### MySQL Database

1. **Create the Database:**
   Open your MySQL command line or MySQL Workbench and execute the following script:

```sql
CREATE DATABASE mock_db;
USE mock_db;

-- Create the categories table
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

-- Create the menu_items table with a foreign key reference to categories
CREATE TABLE menu_items (
    menu_item_id INT AUTO_INCREMENT PRIMARY KEY,
    menu_item_name VARCHAR(255) NOT NULL,
    menu_item_price DECIMAL(10, 2) NOT NULL,
    menu_item_image VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
);

-- Create the cart table
CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    menu_item_id INT,
    quantity INT DEFAULT 1,
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(menu_item_id) ON DELETE CASCADE
);

-- Create the reservations table
CREATE TABLE reservations (
    reservation_id INT AUTO_INCREMENT PRIMARY KEY,
    reservation_name VARCHAR(255) NOT NULL,
    reservation_email VARCHAR(255) NOT NULL,
    reservation_date DATETIME NOT NULL,
    reservation_guests INT NOT NULL,
    reservation_special_request TEXT
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
('Chicken Mayonnaise with Chips', 32.00, 'Cheese-Tomato-Chips.jpg', 2),
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

```

2. **Migrate the Tables:**
   Use the SQL script provided in this repository (`/server/database.sql`) to create the necessary tables and insert sample data.

## API Endpoints

### Menu Items:
- **GET /menu**: Fetch all menu items.
- **POST /menu**: Add a new menu item.
  
### Cart:
- **GET /cart**: Fetch all items in the cart.
- **POST /cart**: Add an item to the cart.

### Reservations:
- **POST /reservations**: Create a new reservation.

For detailed documentation of the API routes, refer to the `/server/routes` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---