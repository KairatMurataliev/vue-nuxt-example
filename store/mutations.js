const mutations = {
  setUser(state, user) {
    state.user.username = user.username
    state.user.token = user.token
  },
  logout(state) {
    state.user = {}
  },
  setGallery(state, photos) {
    state.gallery = photos
  }
}

export default mutations
