import Vue from 'vue'
import Vuex from 'vuex'
import datos_landing from './landing_module';
import datos_cars from './cars_module';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    datos_landing,
    datos_cars,
  }
})
