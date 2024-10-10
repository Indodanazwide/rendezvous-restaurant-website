<template>
  <div class="layout">
    <header>
      <!-- Navbrand logo -->
      <img src="./assets/images/png/brand-logo.png" alt="Rendezvous Restaurant" class="navbar-brand-logo"/>

      <Navigation />
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue';

export default {
  components: {
    Navigation,
    Footer,
  }
}
</script>

<style scoped>
.navbar-brand-logo {
  width: 3.5rem;
}
</style>
