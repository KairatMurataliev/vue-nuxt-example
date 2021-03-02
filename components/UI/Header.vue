<template>
  <div class="navigation">
    <nuxt-link to="/" class="nav-link">
      Home
    </nuxt-link>
    <nuxt-link to="/login" class="nav-link">
      Login
    </nuxt-link>
    <nuxt-link to="/register" class="nav-link">
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
  .navigation {
    background: #357ed6;
    width: 100%;
    padding: 20px 20px
  }
  .nav-link {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    margin-right: 20px
  }
</style>
