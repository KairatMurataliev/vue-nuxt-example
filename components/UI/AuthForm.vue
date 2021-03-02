<template>
  <div>
    <form @submit.prevent="register">
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
      <button>{{ title }}</button>
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
    register: {
      type: Function,
      required: true
    },
    username: {
      type: String
    },
    password: {
      type: String
    },
  }
}
</script>

<style scoped>

</style>
