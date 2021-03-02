export default  {
  isAuthenticated(state) {
    return state.auth.isAuthenticated
  },

  authUser(state) {
    return state.user
  },
  getGallery(state) {
    return state.gallery
  }
}
