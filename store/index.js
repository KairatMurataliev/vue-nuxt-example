import Vuex from 'vuex'
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      gallery: null,
      user: null
    },
    mutations: {
      addGallery(state, payload) {
        state.gallery = payload
      },
      loginUser(state, payload) {
        state.user = payload
      },
      logoutUser(state) {
        state.user = null
      }
    },
    actions: {
      async fetchGallery({commit}) {
        try {
          const response = await axios.get('http://localhost:8000/photos');
          console.log(response.data);
          commit('addGallery', response.data);
        } catch(e) {
          console.log(e);
        }
      },
      async registerUser({commit}, {username, password}) {
        try {
          const response = await axios.post('http://localhost:8000/users/register', {username, password});
          commit('loginUser', response.data);
        } catch (e) {
          console.log(e);
        }
      }
    }
  })
}

export default createStore;
