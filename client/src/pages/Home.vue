<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <article>
        <h1>Rendezvous</h1>

        <hr class="hero-line" />

        <p>Savor the Moment, Anytime, Anywhere!</p>
      </article>
    </section>

    <aside class="aside-menu">
        <article class="menu-intro">
        <h2>Indulge in Our Signature Creations</h2>
        
        <hr class="menu-line" />

        <p>From classic favorites to innovative twists, our menu has something for everyone.</p>
      </article>
    </aside>

    <!-- Featured Menu -->
    <section class="menu">
      <article class="menu-category">
        <ul>
          <li class="item category">
            <img src="../assets/images/jpg/cake.jpg" alt="Tasty Cake" />
          </li>

          <li class="item description">
            <p><strong>Tasty Treats</strong></p>
            <p>Delightful desserts perfect for satisfying your sweet tooth.</p>
          </li>

          <li class="item category">
            <img src="../assets/images/jpg/sandwich.jpg" alt="Sandwich" />
          </li>

          <li class="item description">
            <p><strong>Sandwiches</strong></p>
            <p>Freshly made sandwiches with options for chips on the side.</p>
          </li>

          <li class="item category">
            <img src="../assets/images/jpg/salad.jpg" alt="Salad" />
          </li>

          <li class="item description">
            <p><strong>Light Meals</strong></p>
            <p>Quick, flavorful bites ideal for a lighter meal.</p>
          </li>

          <li class="item category">
            <img src="../assets/images/jpg/golden.jpg" alt="Golden" />
          </li>

          <li class="item description">
            <p><strong>Main Meals</strong></p>
            <p>Hearty, gourmet dishes featuring satisfying flavors and ingredients.</p>
          </li>

          <li class="item category">
            <img src="../assets/images/jpg/drinks.jpg" alt="Drinks" />
          </li>

          <li class="item description">
            <p><strong>Cold Bevarages</strong></p>
            <p>Refreshing cold drinks, juices, and smoothies to cool you down.</p>
          </li>

          <li class="item category">
            <img src="../assets/images/jpg/coffe.jpg" alt="Coffee" />
          </li>

          <li class="item description">
            <p><strong>Hot Bevarages</strong></p>
            <p>Warm, comforting beverages to enjoy with your meal or on their own.</p>
          </li>
        </ul>
      </article>

      <hr class="menu-line" />

      <article class="menu-cta">
        <p>
          Explore our delicious menu and treat yourself to mouth-watering meals and refreshing
          drinks! Order now or reserve your table for an unforgettable dining experience!
        </p>

        <br />

        <RouterLink class="homepage-cta" to="/menu">Explore Our Menu & Order Now!</RouterLink>
      </article>
    </section>

    <!-- About -->
    <section class="about">
      <h2>Rendezvous Restaurent</h2>

      <div class="container">
        <div class="text">
          <p>
            Welcome to <strong>Rendezvous Restaurant</strong>, where culinary excellence meets
            innovation. Nestled within the vibrant Steve Biko Campus at
            <a href="http://dut.ac.za">Durban University of Technology</a>, Rendezvous was born from
            a shared passion for great food, sustainability, and student empowerment. Our story is
            as much about serving delicious meals as it is about fostering a space for creativity,
            education, and community engagement.
          </p>

          <br /><br />

          <RouterLink class="homepage-cta" to="/about">Explore more about us</RouterLink>
        </div>

        <div class="media"></div>
      </div>
    </section>

    <section class="allergy-statement">
      <p>
        At Rendezvous Restaurant, we strive to offer a variety of delicious meals and beverages that
        cater to diverse tastes and preferences. <mark>Please note</mark> that some items on our
        menu may contain or come into contact with <mark>common allergens</mark>, including WHEAT,
        EGGS, PEANUTS, TREE NUTS, MILK, FISH, SHELLFISH, and SOY. We take food safety seriously and
        encourage customers with allergies or specific dietary concerns to
        <mark>inform our staff when placing orders</mark> so we can do our best to accommodate your
        needs.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.hero {
  height: 100vh;
}

.hero article {
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/png/first-layer.png');
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  padding-left: 27rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-line {
  height: 1rem;
  width: 60%;
  border: transparent;
  background: linear-gradient(to right, #b2a43b00 0%, #b2a43b5e 50%, #B2A43B 100%);
}

.aside-menu {
  width: 40vw;
  margin-left: 47%;
  margin-top: -13%;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.2);
}

.menu-intro {
  text-align: center;
}

.menu-line {
  height: 1rem;
  width: 60%;
  margin: 2rem auto 4rem 30%;
  border: transparent;
  background: linear-gradient(to right, #B2A43B 0%, #b2a43b49 50%, #b2a43b00 100%);
}

.menu {
  padding: 6rem 5rem;
}

.menu-category ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  width: 100%;
  padding: 4rem;
}

.menu-category ul li {
  background-color: white;
  width: 100%;
}

.category {
  transition: transform 0.5s;
}

.category:hover {
  transform: scale(1.02);
}

.description {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}

.item img {
  width: 100%;
  box-shadow: 0.125rem 0.125rem 0.5rem 0.0625rem rgba(0, 0, 0, 0.1);
}

.menu-cta {
  padding: 0 7rem;
  text-align: center;
}

.homepage-cta {
  background-color: #B2A43B;
  border-radius: 5rem;
  color: #0f152c;
  padding: 0.7rem 4rem;
  transition: 0.5s;
}

.homepage-cta:hover {
  background-color: #78BF4B;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container div {
  width: 40%;
  margin: 2rem 4rem;
}

.media {
  background-image: url('../assets/images/jpg/restaurant.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 25rem;
  width: 10rem;
  box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
}

.allergy-statement {
  padding: 4rem 8rem;
  text-align: center;
}
</style>