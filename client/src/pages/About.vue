<template>
  <div class="about-page">
    <section class="banner">
      <h1>About</h1>
    </section>

    <section class="content">
      <article class="intro">
        <p>
          Welcome to <strong>Rendezvous Restaurant</strong>, where culinary excellence meets
          innovation. Nestled within the vibrant Steve Biko Campus at Durban University of
          Technology (DUT), Rendezvous was born from a shared passion for great food,
          sustainability, and student empowerment. Our story is as much about serving delicious
          meals as it is about fostering a space for creativity, education, and community
          engagement.
        </p>
      </article>

      <article class="body">
        <div class="text">
          <h2>Our Journey</h2>

          <p>
            Established as a student-run restaurant by the Department of Food and Nutrition Consumer
            Sciences, Rendezvous began as a practical training ground for aspiring chefs and food
            experts. Over the years, it has evolved into a cornerstone of the campus dining
            experience, offering a wide range of meals carefully crafted by students and overseen by
            experienced faculty.
          </p>

          <p>
            In 2024, we embraced a new chapter through a rebranding effort that reflects our
            commitment to sustainability and modern dining experiences. We introduced eco-friendly
            packaging and expanded our offerings to include Home Meal Replacements (HMR), perfectly
            suited for today’s fast-paced lifestyle. This rebranding is not just about new menus and
            packaging but about aligning with DUT's ENVISION 2030 strategy, which aims to foster
            financial sustainability and innovation.
          </p>
        </div>

        <div class="vision">
          <div class="media">
            <img src="../assets/images/jpg/door.jpg" alt="Entrance">
          </div>

          <div class="text">
            <h3>Our Vision</h3>

            <p>
              At Rendezvous, we believe in delivering more than just food. Our mission is to provide
              wholesome, high-quality meals that nourish both body and soul. We are deeply committed
              to environmental responsibility and continuously strive to reduce our ecological
              footprint by incorporating sustainable practices into everything we do—from sourcing
              ingredients to minimizing food waste.
            </p>
          </div>
        </div>

        <div class="what-we-offer">
          <h2>What We Offer</h2>

          <p>
            Rendezvous Restaurant is proud to serve the university community and beyond with diverse
            menu options that cater to a wide range of dietary preferences. Whether you're in the
            mood for hearty meals, vegan delights, or convenient takeaways, we’ve got something for
            everyone. Our <strong>Meals on the Go</strong> concept ensures that you can enjoy
            nutritious, ready-to-eat meals wherever you are, whether on or off campus.
          </p>

          <p>
            Our menu is carefully designed to rotate on a four-week cycle, offering a variety of
            seasonal dishes that highlight fresh, local ingredients. With meals prepared by
            students, each dish reflects the creativity, skill, and care of future culinary
            professionals.
          </p>
        </div>

        <div class="empowerment">
          <h2>A Commitment to Student Empowerment</h2>

          <p>
            Rendezvous is more than just a restaurant—it's a training ground for the next generation
            of food industry leaders. We provide real-world experience for students, equipping them
            with the skills they need to succeed in the fast-paced world of food and nutrition. By
            dining with us, you’re not only enjoying great food; you’re supporting the education and
            future careers of DUT’s talented students.
          </p>

          <p>
            The Meals on the Go initiative, managed by our alumna Lihle Nhlebela through the YES
            Programme, is an extension of our commitment to growth, sustainability, and innovation.
            This project not only generates third-stream income for the department but also serves
            as a platform for students to showcase their talents beyond the classroom.
          </p>
        </div>

        <div class="join">
          <h2>Join Us for a Memorable Dining Experience</h2>

          <p>
            Operating from 11 AM to 2 PM on Wednesdays and Thursdays in the first semester, and
            expanding to Fridays in the second semester, Rendezvous offers an inviting atmosphere
            where students, faculty, and visitors can relax, enjoy freshly prepared meals, and
            support student learning. Whether you’re here for a quick takeaway or a sit-down meal,
            we aim to make every visit a memorable one.
          </p>

          <p>
            At Rendezvous, we are constantly evolving, but one thing remains the same: our
            dedication to serving delicious, sustainable food and empowering the next generation of
            food professionals.
          </p>
        </div>
      </article>

      <article class="conclusion">
        <p style="text-align: center">
          <mark>Thank you for being part of our story. We look forward to welcoming you!</mark>
        </p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about-page {
  padding: 15vh 0;
}

.content {
  padding: 5rem 2rem 0;
}

.vision {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vision div {
  width: 30%;
  margin: 4rem;
}

.media img{
  width: 100%;
  height: 100%;
}

.what-we-offer,
.empowerment {
  padding: 1rem 2rem;
  margin-bottom: 4rem;
}

.conclusion {
  margin: 4rem 2rem 0;
}
</style>
