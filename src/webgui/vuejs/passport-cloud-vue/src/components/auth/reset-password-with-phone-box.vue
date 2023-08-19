<template>
  <div>
    <el-input
      class="input-box"
      v-model="username"
      placeholder="手机号"
    ></el-input>

    <VeriCodeInput
      class="input-box"
      v-model="vericode"
      placeholder="短信验证码"
    />

    <el-input
      class="input-box"
      v-model="password"
      type="password"
      placeholder="新密码"
    ></el-input>

    <el-input
      class="input-box"
      v-model="password"
      type="password"
      placeholder="确认新密码"
    ></el-input>

    <el-button class="btn-login" type="primary" @click="handleClickLogin"
      >重设密码</el-button
    >
  </div>
</template>
  
<script>
import VeriCodeInput from "./verification-code-input.vue";

export default {
  name: "reset-password-with-phone-box",

  components: { VeriCodeInput },

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

.input-box {
  margin-top: 0px;
  margin-bottom: 20px;
}
</style>
  