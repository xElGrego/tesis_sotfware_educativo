<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">
        Calidad de vida en los continentes
      </h2>
      <v-container>
        <v-row>
          <v-col md="6" cols="12">
            <v-carousel hide-delimiter-background max width="600">
              <v-carousel-item v-for="(item, i) in items" :key="i">
                <v-img
                  position="center"
                  :src="item.src"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                ></v-img
              ></v-carousel-item>
            </v-carousel>
          </v-col>

          <v-col md="6" cols="12">
            <p class="text-justify">
              No solo los datos geográficos nos ayudan a conocer un continente.
              Los factores como el relieve, el clima y la hidrografía suelen
              influir en la calidad de vida de las personas. La calidad de vida
              “es la percepción que un individuo tiene de su lugar en la
              existencia en el contexto de la cultura y del sistema de valores
              en los que vive y en relación con sus objetivos, sus expectativas,
              normas y sus inquietudes”. (Galván, s.f.) Una forma de medir la
              calidad de vida es el índice de desarrollo humano (IDH), un
              indicador elaborado por la Organización para las Naciones Unidas
              que no solo mide el desarrollo económico de los países, que no
              siempre se ve reflejado en el bienestar de la mayoría de
              habitantes. Prohibida su reproducción 137 Calidad de vida en los
              continentes El IDH también toma en cuenta el acceso a: • Salud
              (esperanza de vida al nacer): Se mide utilizando un valor mínimo
              de veinte años de edad y un máximo de 83,57. Si, por ejemplo, en
              un país la esperanza de vida es de 55 años, el índice de
              longevidad para el IDH será de 0,551. • Educación: Mide la
              escolarización en los adultos y en los niños en edad escolar. •
              Vida digna: Se mide el ingreso per cápita y no el producto interno
              bruto.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=YC76paJ1_Zs"
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
          src: "https://i.blogs.es/588ccf/esperanza-de-vida/1366_2000.jpeg",
        },
        {
          src:
            "https://image.slidesharecdn.com/calidaddevidaporcontinentes-151030131032-lva1-app6892/95/calidad-de-vida-por-continentes-2-638.jpg?cb=1446210657",
        },

        {
          src:
            "https://image.slidesharecdn.com/generalidadesdeloscontinentes-110413140910-phpapp01/95/generalidades-de-los-continentes-4-728.jpg?cb=1302704024",
        },
      ],
    };
  },
};
</script>
