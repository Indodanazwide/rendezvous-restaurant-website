<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/menu">Menu</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>

    <ul class="management-links">
      <li>
        <RouterLink to="/cart" class="cartlink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-basket-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"
            />
          </svg>
        </RouterLink>
      </li>
      <li class="nav-cta-btn">
        <RouterLink to="/reservation">Book Table</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav,
nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul li {
  margin-inline: 1rem;
}

nav ul li a {
  color: #0f152c;
}

nav ul li a:hover {
  color: #78BF4B;
}

nav ul {
  margin-inline: 2rem;
}

.nav-cta-btn a {
  background-color: #B2A43B;
  color: #0f152c;
  padding: 0.8rem 1.2rem;
  border-radius: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: 0.3s;
}

.nav-cta-btn a:hover {
  background-color: #78BF4B;
  color: #0f152c;
}

.cartlink svg {
  transition: transform 0.5s;
}

.cartlink:hover svg {
  transform: scale(1.2);
}
</style>
