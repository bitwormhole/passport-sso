<template>
  <AuthFrame>
    <LoginBox class="login-box" />
  </AuthFrame>
</template>

<script>
import LoginBox from "./login-box.vue";
import AuthFrame from "./frame.vue";

export default {
  name: "auth-login",
  components: { LoginBox, AuthFrame },
};
</script>

<style scoped>

.title {
  color: gray;
}

.other-buttons {
  margin-top: 80px;
  margin-bottom: 20px;
}
</style>
