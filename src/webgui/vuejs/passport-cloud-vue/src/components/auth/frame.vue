<template>
  <div class="">
    <div class="mid-col">
      <AuthHeader />

      <div class="auth-box">
        <slot> </slot>
      </div>

      <AuthFooter />
    </div>
  </div>
</template>

<script>
import AuthHeader from "./header.vue";
import AuthFooter from "./related-page-links.vue";

export default {
  name: "auth-frame",
  components: { AuthHeader, AuthFooter },
};
</script>

<style scoped>
.mid-col {
  width: 99%;
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
}

.auth-box {
  border-width: 1px;
  border-color: rgb(221, 221, 221);
  border-style: solid;
  padding: 10px;
  border-radius: 5px;
}
</style>
