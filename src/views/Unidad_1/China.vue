<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">China</h2>
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
              China, cuyo nombre significa ‘país de en medio, es un extenso país
              que se encuentra en el centro-este de Asia. Por el norte, limita
              con Mongolia y el desierto de Gobi; por el sur, con Indochina; al
              este se encuentra el mar Amarillo y el océano Pacífico; al oeste
              está el Tíbet. El origen racial de los chinos está en grupos
              procedentes de Asia Central y Mongolia. El territorio chino ha
              sido agrícola por excelencia, pues cuenta con importantes ríos
              (Huang-Ho, Yang-Tsé-Kiang y Si-Kiang), y constantes lluvias,
              provocadas por los vientos monzones, que mantienen inundadas
              grandes extensiones de terreno. Esas características del clima han
              creado condiciones idóneas para el cultivo de arroz, y de otros
              cereales y verduras. En este contexto, varios pequeños estados
              culturalmente similares que con frecuencia entraban en guerra por
              el dominio de la zona, pero también enfrentaban enemigos externos
              más lejanos atraídos por sus riquezas, se aliaron a finales del
              siglo II a. C., lo que dio origen al Imperio chino y a su primera
              dinastía. Shang Tang, primer rey de la dinastía Shang Mapa de la
              antigua civilización china Geografía e Historia 1. España Aportes
              culturales e invenciones de China Entre los mencionados aportes
              culturales y tecnológicos realizados podemos encontrar: El papel,
              la imprenta y sus tipos móviles, la tinta, la seda, la brújula, la
              sombrilla, los fuegos artificiales, el papel moneda, la cometa,
              los tallarines, la escritura en pictogramas, la escritura china,
              el té, la acupuntura, el cultivo de arroz. Períodos históricos
              Familia china en la antigüedad Shang (2000 a. C.) Han (206 a. C.)
              Chou (1122 a 249 a. C.) Se estableció en la ribera del río
              Huang-Ho y se le atribuye la invención de la escritura jeroglífica
              china. Era un Estado esclavista con comunidades agrarias dedicadas
              también a la caza, la pesca y la ganadería. Esta dinastía
              configuró la nacionalidad china. Se avocó a ejecutar obras civiles
              en beneficio del pueblo, se fortalecieron las administraciones
              jurídica, económica y militar, y el transporte vivió un enorme
              auge con la construcción de caminos y el establecimiento del gran
              camino de la seda. Sometieron a los pueblos de la dinastía Shang.
              Lograron la primera gran unificación con el rígido control de 36
              provincias. Esta dinastía estableció la esclavitud contraída por
              deudas o delitos cometidos. Fueron los Chou quienes construyeron
              la Gran Muralla China para defenderse de invasiones extranjeras
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=uvzztI5t4x4"
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
            "https://encolombia.com/wp-content/uploads/2013/08/Civilizacion-China.jpg",
        },
        {
          src:
            "https://mihistoriauniversal.com/wp-content/uploads/gran-muralla-china.jpg",
        },

        {
          src:
            "https://chinaantigua.com/wp-content/uploads/2017/10/Escuela-china-min.jpg",
        },
      ],
    };
  },
};
</script>
