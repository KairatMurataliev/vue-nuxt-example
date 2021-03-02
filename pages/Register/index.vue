<template>
  <AuthForm
    :title="'Register'"
    :password="password"
    :username="username"
    :register="registerUser"
  />
</template>

<script>
import AuthForm from "~/components/UI/AuthForm";

export default {
  name: "register",
  components: {
    AuthForm
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    registerUser() {
      console.log('s;kgmsf');
      this.$store.dispatch({
        type: 'registerUser',
        username: this.username,
        password: this.password
      })
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>

</style>
