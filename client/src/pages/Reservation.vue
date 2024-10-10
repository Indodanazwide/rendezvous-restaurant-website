<template>
  <div class="reservation-page">
    <div class="banner">
      <h1>Reservation</h1>
    </div>

    <form @submit.prevent="submitReservation" class="reservation-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="reservationData.reservation_name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="reservationData.reservation_email" required />
      </div>

      <div class="form-group">
        <label for="date">Reservation Date</label>
        <input type="datetime-local" v-model="reservationData.reservation_date" required />
      </div>

      <div class="form-group">
        <label for="guests">Number of Guests</label>
        <input type="number" v-model="reservationData.reservation_guests" required />
      </div>

      <div class="form-group">
        <label for="specialRequest">Special Requests</label>
        <textarea v-model="reservationData.reservation_special_request"></textarea>
      </div>

      <button type="submit" class="reservation-button"><h3>Book</h3></button>
    </form>
  </div>
</template>

<script>
import api from '../services/api.js'

export default {
  data() {
    return {
      reservationData: {
        reservation_name: '',
        reservation_email: '',
        reservation_date: '',
        reservation_guests: 1,
        reservation_special_request: ''
      }
    };
  },
  methods: {
    async submitReservation() {
      try {
        // Make POST request to backend with the reservation details
        const response = await api.post('/reservations', this.reservationData);
        if (response.status === 200) {
          alert('Your reservation has been successfully booked!');
          // Optionally reset the form after submission
          this.reservationData = {
            reservation_name: '',
            reservation_email: '',
            reservation_date: '',
            reservation_guests: 1,
            reservation_special_request: ''
          };
        }
      } catch (error) {
        console.error('Error booking reservation:', error);
        alert('Failed to book reservation. Please try again.');
      }
    }
  }
}
</script>

<style scoped>
.reservation-page {
  padding: 15vh 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.reservation-page form {
  margin-block: 5rem;
}

.reservation-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-inline: 15rem;
  padding: 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 2rem;
  width: 100%;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-group input, .form-group textarea {
  padding: 0.8rem;
  border: 1px solid #B2A43B;
  color: #0f152c;
  border-radius: 0.4rem;
  width: 100%;
}

.form-group input:focus, .form-group textarea:focus {
  border: .5px solid #0f152c;
}

.reservation-button {
  background-color: #B2A43B;
  color: #0f152c;
  padding: 0.8rem 3rem;
  border-radius: 3rem;
  border: transparent;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: 0.3s;
  margin-top: 1rem;
}

.reservation-button:hover {
  background-color: #78BF4B;
  color: #0f152c;
}

.reservation-button h3 {
  margin: 0;
}
</style>