<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">Mesopotamia</h2>
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
              Alrededor del IV milenio a. C., las sociedades ubicadas en el
              Creciente Fértil se desarrollaron y crecieron gracias a la
              agricultura intensiva y al uso de metales. Estos cambios llevaron
              al aparecimiento de las primeras civilizaciones. Mesopotamia es
              una palabra griega que significa ‘tierra entre ríos’. Los griegos
              denominaron así a una región de Oriente Medio situada entre los
              ríos Tigris y Éufrates, en el actual Medio Oriente. Allí, las
              inundaciones periódicas generaban problemas y, por ello, la
              población desarrolló técnicas para evitar que el agua anegara
              zonas cultivadas y pobladas. Se crearon sistemas de drenaje,
              diques y canales. Las mejoras técnicas permitieron tener un
              excedente agrícola; ahora se podía comercializar, lo que también
              implicó un crecimiento poblacional. Las personas se especializaban
              en una sola labor: al irse complejizando la sociedad, aparecieron
              grupos sociales de dirigentes y autoridades que controlaron los
              excedentes y dirigieron el gobierno; ellos serían desde entonces
              los más privilegiados. Así, los poblados paulatinamente pasaron a
              ser ciudades-Estado.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=Ptz0vfOZ12w"
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
            "https://1.bp.blogspot.com/-EDrVG27B5E4/XyHyB67iv3I/AAAAAAAAZ4g/VHeg6-PwdfohQXvmU1HZRK5cnKnLDIQ1wCLcBGAsYHQ/s800/LA%2BMESOPOTAMIA.png",
        },
        {
          src:
            "https://mihistoriauniversal.com/wp-content/uploads/ciudad-antigua-mespotamia.jpg",
        },

        {
          src:
            "https://concepto.de/wp-content/uploads/2019/08/pueblos-de-la-mesopotamia-e1567006533835.jpg",
        },
      ],
    };
  },
};
</script>
