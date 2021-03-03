import axios from "axios";

export const createActions = () => {
  return {
    async fetchGallery({commit}) {
      try {
        const response = await axios.get('http://localhost:8000/photos');
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
    },
    async fetchUsersGallery({commit}, id) {
      try {
        const response = await axios.get(`http://localhost:8000/photos/${id}`);
        commit('addUsersPhotos', response.data);
      } catch(e) {
        console.log(e);
      }
    }
  }
}
