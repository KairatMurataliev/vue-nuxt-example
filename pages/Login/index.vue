<template>
  <div>
    <AuthForm :title="`Login`" @submit="loginUser"/>
  </div>
</template>

<script>
import AuthForm from "../../components/UI/AuthForm";

export default {
  name: "login",
  components: {
    AuthForm
  },
  methods: {
    loginUser({username, password}) {
      this.$store.dispatch({
        type: 'loginUser',
        username,
        password
      })
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped>

</style>
