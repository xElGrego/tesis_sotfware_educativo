<template>
  <div class="unidad1">
    <div justify="center" class="mb-10">
      <h1>Los antiguos imperios de Oriente</h1>
    </div>
    <v-container>
      <v-row>
        <v-col sm="4" v-for="tema in temas" :key="tema.id">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="tema.imagen" height="200px"></v-img>

            <v-card-title>
              {{ tema.titulo }}
            </v-card-title>

            <v-card-actions>
              <v-btn :to="tema.url" color="orange lighten-2" text
                >> Ver más
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="tema.show = !tema.show">
                <v-icon>{{
                  tema.show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="tema.show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ tema.mini_concepto }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    temas: [
      {
        titulo: "Historia e identidad ",
        url: "/historia",
        show: false,
        imagen:
          "https://i2.wp.com/www.mavipastor.com/wp-content/uploads/2020/03/poblado-neolc3adtico-prehistoria.jpg?fit=1200%2C770&ssl=1",
        mini_concepto:
          "Junto a la aparición de la escritura con fines contables, el auge de la metalurgia a partir del IV milenio a. C. fue el otro factor determinante para el nacimiento de las civilizaciones en el Oriente.",
      },
      {
        titulo: "Mesopotamia",
        url: "/mesopotamia",
        show: false,
        imagen:
          "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/01/21/16112216320811.jpg",
        mini_concepto:
          "Alrededor del IV milenio a. C., las sociedades ubicadas en el Creciente Fértil se desarrollaron y crecieron gracias a la agricultura intensiva y al uso de metales.",
      },
      {
        titulo: "Egipto",
        url: "/egipto",
        show: false,
        imagen:
          "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/01/25/600e9f4487e44.r_d.1067-716-0.jpeg",
        mini_concepto:
          "En el V milenio a. C., la población del norte de África se concentró en las orillas del río Nilo, donde poco a poco, se fue creando una gran civilización.",
      },
      {
        titulo: "Hebreos y Fenicios ",
        url: "/hebreos",
        show: false,
        imagen:
          "https://encolombia.com/wp-content/uploads/2019/11/Civilización-Hebrea.jpg",
        mini_concepto:
          "Los hebreos eran un conjunto de tribus de pastores seminómadas con una organización patriarcal, es decir, la autoridad residía en el cabeza de la familia y de la tribu (patriarca).",
      },
      {
        titulo: "China",
        url: "/china",
        show: false,
        imagen:
          "https://data.viaje-a-china.com/kcfinder/upload/vac/ly/29613b0acd374aa1a5ebe6f7(1).jpg",
        mini_concepto:
          "China, cuyo nombre significa ‘país de en medio, es un extenso país que se encuentra en el centro-este de Asia.",
      },
      {
        titulo: "India",
        url: "/india",
        show: false,
        imagen:
          "https://image.slidesharecdn.com/disertaciondesociedaddindia-100606181902-phpapp02/95/la-india-antigua-1-728.jpg?cb=1275848410",
        mini_concepto:
          "En la cordillera del Himalaya, en el centro sur de Asia, nacen los ríos Ganges e Indo, que convierten un extenso territorio, conocido como la península del Decán.",
      },
      {
        titulo: "Grecia",
        url: "/grecia",
        show: false,
        imagen:
          "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/01/21/16112216320811.jpg",
        mini_concepto:
          "Los griegos fueron los creadores de una importante civilización; también fueron grandes artistas e iniciadores de la filosofía y del método científico.",
      },

      {
        titulo: "Roma",
        url: "/roma",
        show: false,
        imagen:
          "https://curiosidades.com/wp-content/uploads/2017/02/Senado-romano-680x350.jpg",
        mini_concepto:
          "En el siglo VIII a. C., la península itálica estaba habitada por diferentes pueblos: latinos, etruscos y griegos.",
      },
      {
        titulo: "Antiguedad de los humanos",
        url: "/humanos",
        show: false,
        imagen:
          "https://4.bp.blogspot.com/-eqzXhu9naHw/V4xgIiDboPI/AAAAAAAAua4/UPz9g7gCxUQ9sMZ2ps9Qlyh-YFlgIxYNwCLcB/s1600/Culturas-de-la-antiguedad-que-practicaban-sacrificios-humanos.jpg",
        mini_concepto:
          "América El continente americano se extiende desde el océano Glacial Ártico hasta el océano Glacial Antártico.",
      },
      {
        titulo: "Calidad de vida en continentes",
        url: "/calidad",
        show: false,
        imagen:
          "https://2.bp.blogspot.com/-UVTdyqmkTf0/WTXsjEBzqjI/AAAAAAAAAAo/YESMZtWKZvwXhqMNNzed6MCFWG9A9fZpwCLcB/s640/indicadores%2Bde%2Bcalidad%2Bde%2Bvida.gif",
        mini_concepto:
          "No solo los datos geográficos nos ayudan a conocer un continente. Los factores como el relieve, el clima y la hidrografía suelen influir en la calidad de vida de las personas.",
      },
      {
        titulo: "La convivencia",
        url: "/convivencia",
        show: false,
        imagen:
          "https://lahora.com.ec/contenido/cache/6f/estudiantes-y-padres-de-familia-cuestionan-codigos-de-convivencia-escolares-imagen-1-_2018047094814-2000x2000.jpg",
        mini_concepto:
          "En Ecuador el reconocimiento de la diversidad cultural tiene rango constitucional. La Constituyente de 1997-1998 definió a Ecuador como un país multiétnico y pluricultural.",
      },
    ],
  }),
};
</script>
