export const createMutations = () => {
  return {
    addGallery(state, payload) {
      state.gallery = payload;
    },
    addUsersPhotos(state, payload) {
      state.usersGallery = payload;
    },
    loginUser(state, payload) {
      state.user = payload;
    },
    logoutUser(state) {
      state.user = null
    }
  }
}
