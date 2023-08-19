<template>
  <simple-frame>
    <Login />
  </simple-frame>
</template>

<script>
import Login from "@/components/auth/login.vue";

export default {
  name: "views-login-view",
  components: { Login },
};
</script>
