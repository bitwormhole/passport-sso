<template>
  <div>
    <ul>
      <li><router-link to="/login"> 登录 </router-link></li>
      <li><router-link to="/sign-up"> 注册账号 </router-link></li>
      <li><router-link to="/reset-password"> 重设密码 </router-link></li>
    </ul>
  </div>
</template>
  
<script>
export default {
  name: "related-page-links",

  data() {
    return {};
  },

  methods: {},
};
</script>
  
<style scoped>
</style>
