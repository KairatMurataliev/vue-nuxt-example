import axios from "axios";

export default {
  async fetchGallery({commit}) {
    try {
      const response = await axios.get('http://localhost:8000/photos');
      commit('addGallery', response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async registerUser({commit}, {username, password}) {
    try {
      const response = await axios.post('http://localhost:8000/users/register', {username, password});
      commit('addUser', response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async loginUser({commit}, {username, password}) {
    try {
      const response = await axios.post('http://localhost:8000/users/sessions', {username, password});
      commit('addUser', response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async fetchUsersGallery({commit}, id) {
    try {
      const response = await axios.get(`http://localhost:8000/photos/${id}`);
      commit('addUsersPhotos', response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async createPhoto({commit}, data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    try {
      const headers = {'Token': this.getters.getUser.user.token};
      await axios.post('http://localhost:8000/photos/add-photo', formData, {headers});
    } catch (e) {
      console.log(e);
    }
  },
  async deletePhoto({commit, dispatch}, id) {
    try {
      const headers = {'Token': this.getters.getUser.user.token};
      await axios.delete(`http://localhost:8000/photos/${id.id}`, {headers});
      dispatch({type: 'fetchGallery'})
    } catch(e) {
      console.log(e);
    }
  }
}
