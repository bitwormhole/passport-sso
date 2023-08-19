<template>
  <div>
    <el-input
      v-model="username"
      placeholder="账号 (用户名|手机号|邮箱地址)"
    ></el-input>
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
import base64 from "@/js/base64.js";

export default {
  name: "auth-login-box",

  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    handleClickLogin() {
      let user = this.username;
      let password = this.password;
      let password64 = base64.EncodeString(password);

      let method = "POST";
      let type = "auth";
      let id = null;
      let data = {
        auth: {
          account: user,
          secret: password64,
          mechanism: "password",
        },
      };

      this.$store
        .dispatch("rest/execute", { method, type, id, data })
        .then(() => {
          this.jumpToHome();
        });
    },

    jumpToHome() {
      this.$router.push("/");
    },
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
