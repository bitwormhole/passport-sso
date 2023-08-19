<template>
  <AuthFrame>
    <h2>注册新账号</h2>
    <SignUpWithEmailBox class="auth-box" />
  </AuthFrame>
</template>
  
<script>
import SignUpWithEmailBox from "./sign-up-with-email-box.vue";
import AuthFrame from "./frame.vue";

export default {
  name: "auth-sign-up",

  components: { SignUpWithEmailBox, AuthFrame },

  methods: {
    // handleClickLogin() {},
  },
};
</script>
  
<style scoped>
</style>
