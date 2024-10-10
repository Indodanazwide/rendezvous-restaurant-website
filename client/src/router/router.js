import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Menu from '../pages/Menu.vue'
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import Cart from '../pages/Cart.vue';
import Reservation from '../pages/Reservation.vue';
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/menu',
        component: Menu
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/reservation',
        component: Reservation
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;