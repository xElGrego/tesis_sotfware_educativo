<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">Grecia</h2>
      <v-container>
        <v-row>
          <v-col md="6" cols="12">
            <v-carousel hide-delimiter-background>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-col>

          <v-col md="6" cols="12">
            <p class="text-justify">
              Los griegos fueron los creadores de una importante civilización;
              también fueron grandes artistas e iniciadores de la filosofía y
              del método científico. Su pensamiento se ve reflejado en relatos
              míticos como La Ilíada y La Odisea o en las tragedias que
              representaban en los teatros. Sus sistemas políticos, como la
              democracia, y palabras procedentes de su lengua, el griego, están
              presentes veinticinco siglos después en la cultura occidental. En
              cada fase de su desarrollo, la civilización griega hizo destacados
              aportes a la cultura mundial. El origen de la civilización griega
              Los antecedentes de la Grecia antigua están en la isla de Creta y
              en la península del Peloponeso. Allí emergieron dos ricas
              civilizaciones: la cretense y la micénica. • La civilización
              cretense o minoica se desarrolló a partir del 2600 a. C. La base
              de su economía fue la agricultura y ganadería. Al estar ubicada en
              una isla, impulsó el comercio marítimo en el Mediterráneo. De este
              período se conservan los templos de Cnosos y de Festos, en los que
              se observan pinturas al fresco y el arte cerámico que
              desarrollaron. • Hacia el 2000 a. C., Grecia fue invadida por los
              aqueos, procedentes de la actual Ucrania, que se instalaron en el
              Peloponeso. Bajo su dominio nació la civilización micénica.
              Prohibida su reproducción 118 Civilizaciones cretense y micénica
              Homero es el principal poeta griego, autor de La Ilíada y La
              Odisea. Templo de Cnosos, joya de la civilización
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=cknXSvinhJo"
              class="mx-2"
              fab
              dark
              small
              color="primary"
            >
              <v-icon dark>
                mdi-youtube
              </v-icon>
            </v-btn>
            Ver video
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://www.aboutespanol.com/thmb/ixOSWIUQLslPL1DR9i-ZuBHMDn0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/caracteristicas-arte-griego-56a037725f9b58eba4af5f71.jpg",
        },
        {
          src:
            "https://www.poemas-del-alma.com/blog/wp-content/uploads/2021/05/grecia0.jpg",
        },

        {
          src:
            "https://www.historiando.org/wp-content/uploads/2018/07/Antigua-Grecia-1.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  height: 100vh;
}
</style>
