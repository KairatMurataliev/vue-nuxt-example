export default {
  async nuxtServerInit({commit, dispatch}, {app, req}) {
    try {
      const photos = await app.$axios.$get('http://localhost:8000/photos');
      commit('setGallery', photos);
      // if (me && me.result) {
      //   commit('setUser', me.result)
      // }
    } catch (e) {
      commit('logout');
    }
  }
}

