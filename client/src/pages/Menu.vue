<template>
    <div class="menu-page">
      <div class="banner">
          <h1>Menu</h1>
      </div>
  
      <!-- Menu Items -->
      <div v-if="menuItems.length > 0" class="items-container">
        <div v-for="item in menuItems" :key="item.menu_item_id" class="menu-item">
          <img :src="`/images/menu/${item.menu_item_image}`" :alt="item.menu_item_name" class="menu-item-image">
          <p><strong>{{ item.menu_item_name }}</strong></p>
          <p><strong>R{{ item.menu_item_price }}</strong></p>
          <button @click="addToCart(item)"><strong>Add to cart</strong></button>
        </div>
      </div>
    </div>
</template>

<script>
import api from '../services/api.js'

export default {
    data() {
        return {
            menuItems: [], // All available menu items
            cart: [] // Cart items
        }
    },
    async mounted() {
        try {
            console.log('Ngisa fetch boy...');
            const response = await api.get('/menu');
            this.menuItems = response.data;
            console.log('Moja sbari nakhu...');
        } catch (error) {
            console.error('Error fetching menu');
        }

        // Load cart from localStorage if available
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
        }
    },
    methods: {
        addToCart(item) {
            // Check if item already exists in the cart
            const existingItem = this.cart.find(cartItem => cartItem.menu_item_id === item.menu_item_id);

            if (existingItem) {
                // If item already exists, just increase the quantity
                existingItem.quantity += 1;
            } else {
                // Otherwise, add the new item with quantity 1
                this.cart.push({ ...item, quantity: 1 });
            }

            // Save the cart to localStorage
            localStorage.setItem('cart', JSON.stringify(this.cart));

            alert(`${item.menu_item_name} has been added to your cart.`);
        },
    }
}
</script>

<style scoped>
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
  padding: 0.8rem 1.2rem;
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
</style>