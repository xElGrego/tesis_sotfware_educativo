<template>
  <div>
    <section id="contenido">
      <h2 class="my-5 black--text display-3">Egipto</h2>
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
              En el V milenio a. C., la población del norte de África se
              concentró en las orillas del río Nilo, donde poco a poco, se fue
              creando una gran civilización. El Nilo posibilitaba la agricultura
              y la ganadería, bases de la economía egipcia. Las inundaciones
              anuales dejaban una capa de limo negro que fertilizaba el suelo.
              En Egipto se construyeron grandes obras públicas: pirámides,
              templos, canales y diques para controlar el agua y aprovechar la
              tierra cultivable. Las ciudades-Estado, al margen del Nilo, se
              unificaron en dos grandes reinos: el Alto Egipto y el Bajo Egipto.
              En el III milenio a. C. se unificaron los dos reinos e inició el
              esplendor egipcio, que duró hasta el 332 a. C., cuando Alejandro
              Magno los conquistó. Finalmente, en el 30 a. C., pasó a ser
              provincia romana. Se unificaron los reinos del Alto Egipto y el
              Bajo Egipto bajo la figura del rey o faraón, jefe político y
              religioso. La monarquía se consideró divina y la cultura egipcia
              empezó a ser conocida por otros pueblos. Prosperaron la economía y
              la cultura, y se inició la escritura de jeroglíficos. Construyeron
              las pirámides de Guiza. Imperio antiguo Imperio medio Imperio
              nuevo Decadencia Tras un período de inestabilidad interna, el país
              se reunificó de nuevo e invadió otras tierras. Se abrieron nuevas
              rutas comerciales hacia el Oriente Próximo. Se realizaron obras de
              mejora en canalizaciones y drenajes, y se fortificaron las
              fronteras norte y sur. Finalmente, los hicsos, un pueblo
              procedente de Palestina, invadieron el país. Durante este período,
              se alcanzó la máxima expansión territorial, que llegó hasta Nubia,
              Libia y Oriente Medio. Se construyeron varios templos y los
              faraones fueron enterrados en el Valle de los Reyes. Fue un
              período de paz y de enorme desarrollo económico. Época de
              dominación extranjera (libios, asirios, persas, macedonios y
              romanos). Las conquistas del macedonio Alejandro Magno (332 a. C.)
              terminaron con la cultura egipcia clásica. En el año 30 a. C.,
              pasó a ser una provincia romana.
            </p>
            <v-btn
              bottom
              link
              target="_blank"
              href="https://www.youtube.com/watch?v=5qXgipbSuYY"
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
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Egypt.Giza.Sphinx.02.jpg",
        },
        {
          src:
            "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/01/25/600e9f4487e44.r_d.1067-716-0.jpeg",
        },

        {
          src:
            "https://okdiario.com/img/2018/06/15/egipto-vestidos-655x368.jpeg",
        },
      ],
    };
  },
};
</script>
