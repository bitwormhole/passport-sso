<template>
  <simple-frame>
    <ResetPassword />
  </simple-frame>
</template>

<script>
import ResetPassword from "@/components/auth/reset-password.vue";

export default {
  name: "views-reset-password-view",
  components: { ResetPassword },
};
</script>
