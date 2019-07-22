import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import collectVuexModules from '../utils/moduleHandler';

const modules = collectVuexModules();

Vue.use(Vuex);

export default new Vuex.Store({
  mutations,
  actions,
  modules: {
    ...modules,
  },
  plugins: [
  ],
});
