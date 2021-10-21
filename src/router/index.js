import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/unidad_1",
    name: "Unidad_1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Unidad1" */ "../views/Unidad1.vue"),
  },

  {
    path: "/grecia",
    name: "Grecia",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Grecia" */ "../views/Unidad_1/Grecia.vue"),
  },
  {
    path: "/china",
    name: "China",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "China" */ "../views/Unidad_1/China.vue"),
  },
  {
    path: "/egipto",
    name: "Egipto",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Egipto" */ "../views/Unidad_1/Egipto.vue"),
  },
  {
    path: "/hebreos",
    name: "Hebreos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Hebreos" */ "../views/Unidad_1/Hebreos.vue"),
  },
  {
    path: "/historia",
    name: "Historia",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Historia" */ "../views/Unidad_1/Historia.vue"
      ),
  },
  {
    path: "/india",
    name: "India",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "India" */ "../views/Unidad_1/India.vue"),
  },
  {
    path: "/mesopotamia",
    name: "Mesopotamia",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Mesopotamia" */ "../views/Unidad_1/Mesopotamia.vue"
      ),
  },
  {
    path: "/roma",
    name: "Roma",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Roma" */ "../views/Unidad_1/Roma.vue"),
  },
  {
    path: "/humanos",
    name: "Humanos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Humanos" */ "../views/Unidad_1/Humanos.vue"),
  },
  {
    path: "/calidad",
    name: "Calidad",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Calidad" */ "../views/Unidad_1/Calidad.vue"),
  },
  {
    path: "/convivencia",
    name: "Convivencia",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Convivencia" */ "../views/Unidad_1/Convivencia.vue"
      ),
  },
  {
    path: "/unidad_2",
    name: "Unidad_2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Unidad2" */ "../views/Unidad2.vue"),
  },

  {
    path: "/edad_media",
    name: "EdadMedia",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "EdadMedia" */ "../views/Unidad_2/EdadMedia.vue"
      ),
  },
  {
    path: "/feudalismo",
    name: "Feudalismo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Feudalismo" */ "../views/Unidad_2/Feudalismo.vue"
      ),
  },
  {
    path: "/feudo",
    name: "Feudo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Feudo" */ "../views/Unidad_2/Feudo.vue"),
  },
  {
    path: "/islam",
    name: "Islam",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Islam" */ "../views/Unidad_2/Islam.vue"),
  },
  {
    path: "/reinos_germanicos",
    name: "Reinos_germanicos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ReinosGermanicos" */ "../views/Unidad_2/ReinosGermanicos.vue"
      ),
  },
  {
    path: "/unidad_3",
    name: "Unidad_3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Unidad3" */ "../views/Unidad3.vue"),
  },
  {
    path: "/africa",
    name: "Africa",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Africa" */ "../views/Unidad_3/Africa.vue"),
  },
  {
    path: "/europa",
    name: "Europa",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "europa" */ "../views/Unidad_3/Europa.vue"),
  },
  {
    path: "/comunicacion",
    name: "Comunicacion",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "comunicacion" */ "../views/Unidad_3/Comunicacion.vue"
      ),
  },
  {
    path: "/unidad_4",
    name: "Unidad_4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Unidad4" */ "../views/Unidad4.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
