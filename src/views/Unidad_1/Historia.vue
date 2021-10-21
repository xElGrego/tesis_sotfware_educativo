<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">Historia e Identidad</h2>
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
              Junto a la aparición de la escritura con fines contables, el auge
              de la metalurgia a partir del IV milenio a. C. fue el otro factor
              determinante para el nacimiento de las civilizaciones en el
              Oriente. En la mayor parte de Europa se tardó más en trabajar el
              metal, y fue introducido en un momento en que algunas
              civilizaciones, como la egipcia o la mesopotámica, ya conocían la
              escritura. El oro fue trabajado desde el Neolítico. Luego se
              trabajaron la plata, el plomo y el cobre, que se utilizaban para
              obtener objetos de adorno y eran un símbolo de prestigio. A partir
              del IV milenio a. C., se descubrió el modo de fundir el cobre y
              darle forma mediante moldes. La experiencia con los hornos de
              cerámica seguramente fue útil para descubrir el proceso de
              fundición del metal. El cobre es un material demasiado blando y no
              era muy útil para elaborar herramientas y armas. Así pues, hacia
              el II milenio a. C. se aprendió a fabricar bronce, un producto más
              duro, fruto de la aleación entre el cobre y el estaño. También se
              trabajaba mediante la fundición y se elaboraron jarras, cuencos y
              armas. Cuando consiguieron temperaturas más elevadas en los
              hornos, empezaron a trabajar el hierro, mucho más resistente, que
              se empleó también en herramientas de trabajo. Esto sucedió hacia
              el I milenio a. C. y, a diferencia del cobre y el bronce, el
              hierro se trabajó mediante la forja. Desde el Neolítico se
              trabajaban los metales, pero no fue hasta el IV milenio a. C. que
              se generalizó la fSDV9P Lo forja consiste en calentar el metal y
              golpearlo para darle forma. DCD CS.4.1.5 Impacto de los metales
              Los inicios de la metalurgia favorecieron el desarrollo de las
              civilizaciones por las siguientes razones:
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Mejoras</h3>
                  <div class="subtitle-1 mb-0 text-justify">
                    <span
                      >La mejora de las técnicas agrícolas a través de nuevas
                      herramientas incrementó la producción de alimentos, la
                      acumulación de excedentes y su intercambio por otros
                      alimentos y metales.</span
                    >
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col md="6" cols="12">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Herramientas</h3>
                  <div class="subtitle-1 mb-0 text-justify">
                    <span
                      >Nuevas herramientas también permitieron el desarrollo de
                      la industria naval y con ello el incremento exponencial de
                      los intercambios comerciales y de las campañas de
                      conquista de nuevos territorios.</span
                    >
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col md="6" cols="12">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Trabajo</h3>
                  <div class="subtitle-1 mb-0 text-justify">
                    <span
                      >La especialización del trabajo se amplió al oficio de
                      herrero, que fabricaba las armas y herramientas. Esto
                      también impactó en oficios como el de comerciante, que
                      empezó a transar objetos metálicos, y en el de agricultor,
                      que debía manipular herramientas más pesadas.</span
                    >
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col md="6" cols="12">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Extracción de metales</h3>
                  <div class="subtitle-1 mb-0 text-justify">
                    La metalurgia permitió la fabricación de armas, escudos y
                    armaduras que se emplearon en las guerras de expansión de
                    las civilizaciones antiguas. desigualdad social. El hallazgo
                    de ricos ajuares funerarios en algunas tumbas es una muestra
                    de la existencia de personajes más ricos y con poder.
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-btn
          bottom
          link
          target="_blank"
          href="https://www.youtube.com/watch?v=6zsOJ2PHhZE"
          class="mx-2 mt-6"
          fab
          dark
          small
          color="primary"
        >
          <v-icon dark>
            mdi-youtube
          </v-icon>
        </v-btn>
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
            "https://i2.wp.com/www.archivoshistoria.com/wp-content/uploads/2017/12/agricultura-neolitica.jpg?fit=1458%2C1600&ssl=1",
        },
        {
          src: "https://definicion.mx/wp-content/uploads/2014/08/Neolitico.jpg",
        },

        {
          src:
            "https://www.pastwomen.net/storage/img/F0000000304_espacios_vida.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
