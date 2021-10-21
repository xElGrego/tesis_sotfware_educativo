<template>
  <div class="unidad4">
    <body>
      <section class="home" id="home">
        <div class="content">
          <h1>Prevención contra el COVID-19</h1>
          <h3>quédate en casa, quédate seguro</h3>
        </div>
      </section>

      <section class="symptoms" id="symptoms">
        <h1 class="heading">Síntomas del covid-19</h1>

        <div class="column">
          <div class="main-image">
            <img src="@/assets/images/main-symp-img.png" alt="" />
          </div>

          <div class="box-container">
            <div class="box">
              <img src="@/assets/images/symp-a.png" alt="" />
              <h3>Tos seca</h3>
            </div>

            <div class="box">
              <img src="@/assets/images/symp-b.png" alt="" />
              <h3>Dolor de garganta</h3>
            </div>

            <div class="box">
              <img src="@/assets/images/symp-c.png" alt="" />
              <h3>Frío</h3>
            </div>

            <div class="box">
              <img src="@/assets/images/symp-d.png" alt="" />
              <h3>Fiebre</h3>
            </div>

            <div class="box">
              <img src="@/assets/images/symp-e.png" alt="" />
              <h3>Dolor de cabeza</h3>
            </div>

            <div class="box">
              <img src="@/assets/images/symp-f.png" alt="" />
              <h3>Vómito</h3>
            </div>
          </div>
        </div>
      </section>

      <section class="hand-wash" id="hand-wash">
        <h1 class="heading">¿Cómo lavarte las manos?</h1>

        <div class="column">
          <div class="box-container">
            <div class="box">
              <img src="@/assets/images/wash-a.png" alt="" />
              <h3>
                Agua y jabon
              </h3>
            </div>

            <div class="box">
              <img src="@/assets/images/wash-b.png" alt="" />
              <h3>Lavar las manos</h3>
            </div>

            <div class="box">
              <img src="@/assets/images/wash-c.png" alt="" />
              <h3>Entre los dedos</h3>
            </div>

            <div class="box">
              <img src="@/assets/images/wash-d.png" alt="" />
              <h3>Centrarse en los pulgares</h3>
            </div>

            <div class="box">
              <img src="@/assets/images/wash-e.png" alt="" />
              <h3>Atrás de las manos</h3>
            </div>

            <div class="box">
              <img src="@/assets/images/wash-f.png" alt="" />
              <h3>No olvidar la muñeca</h3>
            </div>
          </div>

          <div class="main-image">
            <img src="@/assets/images/main-wash-img.png" alt="" />
          </div>
        </div>
      </section>
    </body>
  </div>
</template>

<style scoped>
:root {
  --blue: #3c6382;
  --dark-blue: #0a3d62;
}

*::selection {
  background: var(--dark-blue);
  color: #fff;
}

html {
  font-size: 32.5rem;
  overflow-x: hidden;
}

section {
  min-height: 100vh;
  padding: 1rem 9%;
  padding-top: 8rem;
}

.heading {
  text-align: center;
  color: var(--blue);
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: normal;
  padding: 1rem;
}

header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 2rem;
}

header .logo {
  font-size: 2.5rem;
  color: var(--dark-blue);
}

header .logo span {
  color: var(--blue);
}

header .navbar a {
  font-size: 1.7rem;
  margin-left: 0.7rem;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  color: var(--dark-blue);
}

header .navbar a.active,
header .navbar a:hover {
  background: var(--blue);
  color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

header.sticky {
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

.home {
  /* background: url("assets/fondo.jpg"); */

  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.home .content {
  text-align: center;
  padding-top: 3rem;
}

.home .content h1 {
  font-size: 5rem;
  color: var(--dark-blue);
}

.home .content h3 {
  font-size: 4rem;
  color: var(--blue);
  font-weight: normal;
}

.home .content .btn {
  display: inline-block;
  padding: 0.7rem 3rem;
  color: #fff;
  background: var(--blue);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  font-size: 1.7rem;
}

.home .content .btn:hover {
  background: var(--dark-blue);
}

.prevent .box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.prevent .box-container .box {
  flex: 1 1 30rem;
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
}

.prevent .box-container .box img {
  height: 12rem;
  padding: 1rem;
}

.prevent .box-container .box h3 {
  color: var(--blue);
  font-size: 2rem;
}

.prevent .box-container .box p {
  color: var(--dark-blue);
  font-size: 1.1rem;
  padding: 1rem;
}

.prevent .box-container .box:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

.symptoms {
  /*   background: url(../images/background-img.jpg) no-repeat; */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.symptoms .column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.symptoms .column .main-image img {
  width: 43vh;
}

.symptoms .column .box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.symptoms .column .box-container .box {
  margin: 1rem;
  text-align: center;
}

.symptoms .column .box-container .box img {
  width: 12rem;
  padding: 1rem;
}

.symptoms .column .box-container .box h3 {
  font-size: 2rem;
  color: var(--blue);
}

.precautions .column {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.precautions .column .box-container {
  margin: 1.5rem;
  flex: 1 1 20rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}

.precautions .column .box-container .title {
  padding: 1.5rem 0.5rem;
  text-align: center;
  font-size: 2.5rem;

  color: #fff;
}

.precautions .column .box-container:last-child .title {
  background: #ff3300;
}

.precautions .column .box-container .box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.precautions .column .box-container .box img {
  width: 15rem;
  padding: 1rem;
}

.precautions .column .box-container .box h3 {
  font-size: 2rem;
  color: var(--blue);
}

.precautions .column .box-container .box p {
  font-size: 1.2rem;
  color: var(--dark-blue);
  padding: 1rem 0;
}

.hand-wash .column {
  display: flex;
  justify-content: center;
}

.hand-wash .column .main-image img {
  width: 15vw;
}

.hand-wash .column .box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.hand-wash .column .box-container .box {
  text-align: center;
  margin: 0.4rem;
}

.hand-wash .column .box-container .box img {
  width: 8rem;
  height: 8rem;
  padding: 0.6rem;
}

.hand-wash .column .box-container .box h3 {
  font-size: 2rem;
  color: var(--blue);
}

.scroll-top {
  position: fixed;
  bottom: 7.5rem;
  right: 1.5rem;
  z-index: 1000;
}

/* media queries  */

@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }
}

@media (max-width: 991px) {
  section {
    padding: 1rem 3%;
    padding-top: 8rem;
  }

  .fa-times {
    transform: rotate(180deg);
  }

  .symptoms .column .main-image img {
    display: none;
  }

  .hand-wash .column .main-image img {
    display: none;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 50%;
  }

  .home .content h1 {
    font-size: 4rem;
  }

  .home .content h3 {
    font-size: 3.5rem;
  }
}

@media (max-width: 450px) {
  .home .content h1 {
    font-size: 3.5rem;
  }

  .home .content h3 {
    font-size: 2.5rem;
  }

  .symptoms .column .box-container .box img {
    width: 14rem;
  }

  .precautions .column .box-container .box {
    flex-flow: column;
    text-align: center;
  }

  .doctor .box-container .box {
    width: 100%;
  }
}
</style>
