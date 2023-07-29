import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CarrosView from '@/views/CarrosView';
import CarroDetalleComponent from '@/components/CarroDetalleComponent.vue';
import FormularioComponent from '@/components/FormularioComponent.vue';
import NotFoundComponent from '@/components/NotFoundComponent.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/carros',
    name:'carros',
    component: CarrosView
  },
  {
    path:'/detalle/:id',
    name:'detalle',
    props:true,
    component:CarroDetalleComponent
  },
  {
    path:'/contacto',
    name:'contacto',
    component: FormularioComponent
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path:'/:catchAll(.*)',
    name:'notfound',
    component: NotFoundComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
