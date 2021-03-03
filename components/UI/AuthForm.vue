<template>
  <div>
    <form @submit.prevent="submit">
      <label for="username">Username</label>
      <input
        id="username"
        v-model.trim="username"
        name="username"
        type="text"
        placeholder="username"
      >
      <label for="password">Password</label>
      <input
        id="password"
        v-model.trim="password"
        name="password"
        type="text"
        placeholder="password"
      >
      <button type="submit">{{ title }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  props: {
    title: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit() {
      this.$emit('submit', {username: this.username, password: this.password})
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style scoped>

</style>
