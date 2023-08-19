<template>
    <div>
      <el-input v-model="username" placeholder="账号 (用户名|手机号|邮箱地址)"></el-input>
      <el-input
        class="input-password"
        v-model="password"
        type="password"
        placeholder="密码"
      ></el-input>
  
      <el-button class="btn-login" type="primary" @click="handleClickLogin"
        >登录</el-button
      >
    </div>
  </template>
  
  <script>
  export default {
    name: "reset-password-with-email-box",
  
    data() {
      return {
        username: "",
        password: "",
      };
    },
  
    methods: {
      handleClickLogin() {},
    },
  };
  </script>
  
  <style scoped>
  .btn-login {
    width: 100%;
  }
  
  .input-password {
    margin-top: 10px;
    margin-bottom: 30px;
  }
  </style>
  