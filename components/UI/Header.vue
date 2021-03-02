<template>
  <div>
    <nuxt-link to="/">
      Home
    </nuxt-link>
    <nuxt-link v-if="user" to="/login">
      Login
    </nuxt-link>
    <nuxt-link v-if="user" to="/register">
      Register
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    user: {
      type: Object
    }
  },
}
</script>

<style scoped>

</style>
