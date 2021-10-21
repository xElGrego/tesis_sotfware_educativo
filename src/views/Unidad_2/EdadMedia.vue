<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">Edad Media</h2>
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
              La ocupación de Roma por parte de una tribu germánica (476 d. C.)
              es es el suceso que marca el inicio de la Edad Media en Europa.
              Aunque la crisis del Imperio romano se empezó a gestar mucho
              antes, este hecho señala el fin definitivo de una rica
              civilización urbana que creció en la cuenca mediterránea, y el
              inicio de una nueva era caracterizada por la sucesiva llegada de
              pueblos germanos que fueron creando reinos en Europa. Estos
              pueblos, llamados bárbaros por los romanos, iniciaron un nuevo
              tipo de relaciones políticas y económicas en una sociedad más
              ruralizada, que fueron la base del feudalismo, propio de la Edad
              Media. Algunos consideran que el fin de la Edad Media fue marcado
              por la toma de Constantinopla, capital del Imperio romano de
              Oriente, por parte de los otomanos en 1453, mientras que para
              otros la referencia es la llegada de los españoles a América en
              1492. Por mucho tiempo, se consideró a la Edad Media como un largo
              y oscuro período, pero en realidad fue prolífica en el surgimiento
              de estructuras sociales y políticas que perduran en la actualidad.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=NtK45tmldrw"
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
            <v-btn
              class="ma-2"
              color="secondary"
              target="_blank"
              href="https://es.educaplay.com/recursos-educativos/10596739-edad_media.html"
            >
              Actividad
            </v-btn>
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
            "https://mihistoriauniversal.com/wp-content/uploads/edad-media.jpg",
        },
        {
          src:
            "https://www.caracteristicas.co/wp-content/uploads/2017/04/shutterstock_268358363-e1567207383979.jpg",
        },

        {
          src:
            "https://www.compartirpalabramaestra.org/sites/default/files/5-peliculas-para-hablar-de-la-edad-media-en-el-aula-de-clase.jpg",
        },
      ],
    };
  },
};
</script>
