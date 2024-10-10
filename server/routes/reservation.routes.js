import express from 'express';
import db from '../config/db.js';

const reservationRouter = express.Router();

// POST request to make a reservation
reservationRouter.post('/', (req, res) => {
  const { reservation_name, reservation_email, reservation_date, reservation_guests, reservation_special_request } = req.body;

  if (!reservation_name || !reservation_email || !reservation_date || !reservation_guests) {
    return res.status(400).json({ message: 'All required fields must be filled' });
  }

  const insertReservationQuery = `
    INSERT INTO reservations (reservation_name, reservation_email, reservation_date, reservation_guests, reservation_special_request)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(insertReservationQuery, [reservation_name, reservation_email, reservation_date, reservation_guests, reservation_special_request], (err, result) => {
    if (err) {
      console.error('Error inserting reservation:', err);
      return res.status(500).json({ message: 'Failed to book reservation' });
    }
    res.status(200).json({ message: 'Reservation booked successfully!' });
  });
});

export default reservationRouter;