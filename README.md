Here's a sample `README.md` for your project based on what we've discussed and the current structure of your project:

---

# Rendezvous Restaurant Web App

This project is a full-stack web application for Rendezvous Restaurant, featuring an interactive menu, cart functionality, reservation system, and more. Built using Vue.js for the frontend and Node.js with Express for the backend, the app connects to a MySQL database for dynamic data management.

## Features

- **Menu Page**: Display a list of menu items fetched from the database.
- **Cart Functionality**: Add and remove menu items to the cart with the option to order.
- **Reservation System**: Allow users to book tables by filling out a reservation form.
- **Order System**: Store cart items in the database upon ordering and proceed to payment.
- **Responsive Design**: Fully styled and optimized for mobile and desktop screens.

## Tech Stack

- **Frontend**: 
  - Vue.js
  - Axios (for API calls)
  - HTML, CSS (with scoped styling)

- **Backend**: 
  - Node.js
  - Express.js
  - MySQL
  - dotenv (for environment variables)
  - cors (for handling cross-origin requests)

- **Database**: MySQL
  - Tables for `menu_items`, `cart`, and `reservations`.

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or above)
- MySQL
- npm (comes with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/Indodanazwide/rendezvous-restaurant-website.git
cd rendezvous-restaurant
```

### 2. Backend Setup (Node.js)

Navigate to the `server` directory:

```bash
cd server
```

Install backend dependencies:

```bash
npm install
```

Create a `.env` file in the `server` directory and add your MySQL connection details:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=restaurant_db
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup (Vue.js)

Navigate to the `client` directory:

```bash
cd ../client
```

Install frontend dependencies:

```bash
npm install
```

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

### 4. Database Setup

Import the provided SQL file (`db/restaurant.sql`) into your MySQL database to create the necessary tables.

```sql
mysql -u root -p restaurant_db < db/restaurant.sql
```

Alternatively, run the following SQL commands to create the tables manually:

```sql
CREATE TABLE menu_items (
  menu_item_id INT AUTO_INCREMENT PRIMARY KEY,
  menu_item_name VARCHAR(255),
  menu_item_price DECIMAL(10, 2),
  menu_item_image VARCHAR(255),
  category_id INT
);

CREATE TABLE cart (
  cart_id INT AUTO_INCREMENT PRIMARY KEY,
  menu_item_id INT,
  quantity INT,
  FOREIGN KEY (menu_item_id) REFERENCES menu_items(menu_item_id)
);

CREATE TABLE reservations (
  reservation_id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255),
  customer_email VARCHAR(255),
  reservation_date DATE,
  reservation_time TIME,
  number_of_guests INT
);
```

### 5. Access the Application

- Backend API: [http://localhost:5000](http://localhost:5000)
- Frontend App: [http://localhost:5173](http://localhost:5173)

## Project Structure

```
rendezvous-restaurant/
│
├── client/                  # Frontend code (Vue.js)
│   ├── public/              # Public assets (images, etc.)
│   ├── src/                 # Vue components and pages
│   ├── services/            # Axios instance for API calls
│   ├── App.vue              # Main Vue app file
│   └── main.js              # Vue entry point
│
├── server/                  # Backend code (Node.js, Express)
│   ├── config/              # Database configuration
│   ├── routes/              # API route handlers (menu, reservations)
│   ├── server.js            # Main server entry point
│   └── .env                 # Environment variables
│
└── db/                      # Database files (SQL scripts)
    └── restaurant.sql       # SQL file to set up database
```

## API Endpoints

- `GET /menu`: Fetch all menu items.
- `POST /cart`: Add items to the cart.
- `POST /reservations`: Book a table.

## License

This project is licensed under the MIT License.

---

Feel free to modify or expand it as needed for your project. Let me know if you need additional details!