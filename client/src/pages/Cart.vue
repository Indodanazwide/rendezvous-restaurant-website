<template>
  <main class="menu-page">
    <div class="banner">
      <h1>Cart</h1>
    </div>

    <!-- Cart Items -->
    <div v-if="cart.length > 0" class="items-container">
      <div v-for="item in cart" :key="item.menu_item_id" class="menu-item">
        <img :src="`/images/menu/${item.menu_item_image}`" :alt="item.menu_item_name" class="menu-item-image">
        <p><strong>{{ item.menu_item_name }}</strong></p>
        <p><strong>R{{ item.menu_item_price }}</strong></p>
        <button @click="removeFromCart(item)">Remove from Cart</button>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty</p>
    </div>

    <hr class="cart-line">

    <button @click="placeOrder" class="order-button"><h3>Place Order</h3></button> <!-- Order button -->
  </main>
</template>

<script>
import api from '../services/api.js'

export default {
  data() {
    return {
      cart: []
    };
  },
  mounted() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  },
  methods: {
    removeFromCart(item) {
      const itemIndex = this.cart.findIndex(cartItem => cartItem.menu_item_id === item.menu_item_id);
      if (itemIndex > -1) {
        if (this.cart[itemIndex].quantity > 1) {
          this.cart[itemIndex].quantity -= 1;
        } else {
          this.cart.splice(itemIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(this.cart));
        alert(`${item.menu_item_name} has been removed from your cart.`);
      }
    },
    async placeOrder() {
      try {
        // Send cart to the backend to be stored in the database
        const response = await api.post('/cart', { cart: this.cart });

        if (response.status === 200) {
          alert('Order placed successfully!');
          localStorage.removeItem('cart'); // Clear cart after successful order
          // Redirect to payment page (can be handled by router)
        }
      } catch (error) {
        console.error('Error placing order:', error);
      }
    }
  }
};
</script>

<style scoped>
.menu-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.items-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  margin-top: 4rem;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 1rem;
  height: 30rem;
  text-align: center;
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
}

.menu-item img {
  width: 100%;
  height: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.menu-item button {
  background-color: #B2A43B;
  color: #0f152c;
  padding: 1rem 3rem;
  border-radius: 3rem;
  border: transparent;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: 0.3s;
}

.menu-item button:hover {
  background-color: #78BF4B;
  color: #0f152c;
}

.order-button h3 {
  margin-bottom: 0;
}

.order-button {
  background-color: #B2A43B;
  color: #0f152c;
  padding: 0.8rem 1.2rem;
  border-radius: 3rem;
  border: transparent;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: 0.3s;
  margin: 2rem auto;
}

.order-button:hover {
  background-color: #78BF4B;
  color: #0f152c;
}

.cart-line {
  height: 1rem;
  width: 60%;
  margin: 4rem 5rem;
  border: transparent;
  background: linear-gradient(to right, #B2A43B 0%, #b2a43bab 25%, #b2a43b8c 50%, #b2a43b3f 75%, #b2a43b00 100%);
}
</style>