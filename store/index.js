import Vuex from 'vuex'
import Vue from 'vue';

import {createActions} from './actions'
import {createMutations} from './mutations';

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      gallery: null,
      user: null,
      usersGallery: []
    },
    mutations: createMutations(),
    actions: createActions(),

  })
}

export default createStore;
