<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">Feudo</h2>
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
              El término feudalismo se desprende de la palabra feudo, que era un
              extenso territorio que pertenecía a un noble, llamado señor
              feudal. El feudo se componía de un castillo o monasterio
              fortificado, en torno a él estaba la aldea, los campos de cultivo
              en los que los siervos trabajaban, y un bosque del que sacar leña
              y carne de caza, a la que solo el señor feudal tenía derecho. El
              feudo era un espacio autosuficiente; en su interior se producía
              todo lo que la población necesitaba, de ahí que el comercio fuera
              casi innecesario.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=6gf9XiGDthQ"
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
            "https://fotos.perfil.com/2020/09/20/trim/950/534/20200920feudalismosubditoscedocg-1035600.jpg",
        },
        {
          src:
            "https://hablemosdeculturas.com/wp-content/uploads/2019/01/Sistema-feudal-5-1024x613.jpg",
        },

        {
          src: "https://s03.s3c.es/imag/_v0/640x450/a/8/2/490x_feudo-venta.jpg",
        },
      ],
    };
  },
};
</script>
