export default {
  addGallery(state, payload) {
    state.gallery = payload;
  },
  addUsersPhotos(state, payload) {
    state.usersGallery = payload;
  },
  addUser(state, payload) {
    state.user = payload;
    const usr = JSON.stringify(payload);
    window.$nuxt.$cookies.set('user', usr)
  },
  logoutUser(state) {
    state.user = null
  }
}
