<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">La convivencia</h2>
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
              En Ecuador el reconocimiento de la diversidad cultural tiene rango
              constitucional. La Constituyente de 1997-1998 definió a Ecuador
              como un país multiétnico y pluricultural y reconoció los derechos
              de los pueblos y nacionalidades indígenas así como de los
              afroecuatorianos. Este sentir se recogió en la Constitución de
              2008, cuyo primer artículo define a Ecuador como intercultural,
              plurinacional y laico. En esta constitución de reafirma el
              reconocimiento de los derechos de los pueblos y nacionalidades.
              Entre los derechos de los pueblos indígenas y comunidades
              afroecuatorianas, encontramos:
            </p>
            <v-col cols="12" sm="12">
              <v-list color="transparent">
                <template v-for="(listita, index) in lista">
                  <v-list-item v-if="listita.action" :key="listita.title">
                    <v-list-item-action>
                      <v-icon>{{ listita.action }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>{{ listita.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-else-if="listita.divider"
                    :key="index"
                    :inset="inset"
                  ></v-divider>
                </template>
              </v-list>
            </v-col>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=RO0rBfGyMAY"
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
            "http://4.bp.blogspot.com/-HHIrj_t7kFU/UWdp9Bkz4lI/AAAAAAAAAAk/6AyR14GMUDQ/s400/MASCOTAS+CONSULTA+PRELEGISLATIVA+2013.jpg",
        },
        {
          src:
            "https://2.bp.blogspot.com/-JySQDz4mlS8/V90L9A_7tPI/AAAAAAAANJ8/EbAg0LKobHk_BtjqW26YPd96rPm-l98JQCLcB/s1600/convivencia-300x297.jpg",
        },

        {
          src:
            "https://www.inclusion.gob.ec/wp-content/uploads/2018/07/Escuela-de-Familias-promueve-la-convivencia-familiar-en-usuarios-de-los-servicios-del-MIES-en-Pastaza.png",
        },
      ],
      inset: true,
      lista: [
        {
          action: "mdi-label",
          title: "No ser objeto de discrimen.",
        },
        {
          divider: true,
        },
        {
          action: "mdi-label",
          title: "Conservar la imprescriptible propiedad de sus tierras.",
        },
        {
          divider: true,
        },
        {
          action: "mdi-label",
          title: "Mantener la posesión ancestral de tierras y territorios.",
        },
        {
          divider: true,
        },
        {
          action: "mdi-label",
          title: "Mantener, desarrollar y fortalecer libremente su identidad. ",
        },
      ],
    };
  },
};
</script>
