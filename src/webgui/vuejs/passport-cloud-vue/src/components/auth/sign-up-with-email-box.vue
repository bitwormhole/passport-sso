<template>
  <div>
    <el-input
      class="input-box"
      v-model="email"
      placeholder="邮箱地址"
    ></el-input>

    <InputVeriCode
      v-model="vericode"
      placeholder="邮件验证码"
      @send="handleClickSendCode"
    />

    <el-input
      class="input-box"
      v-model="password"
      type="password"
      placeholder="新账号的密码"
    ></el-input>

    <el-input
      class="input-box"
      v-model="password2"
      type="password"
      placeholder="再次输入密码"
    ></el-input>

    <el-button class="btn-auth" type="primary" @click="handleClickSignUp"
      >注册</el-button
    >
  </div>
</template>
  
<script>
import base64 from "@/js/base64.js";
import getter from "@/js/getter.js";
import InputVeriCode from "./verification-code-input.vue";

export default {
  name: "sign-up-with-email-box",

  components: { InputVeriCode },

  data() {
    return {
      uuid: "",
      email: "",
      vericode: "",
      password: "",
      password2: "",
    };
  },

  methods: {
    handleClickSendCode() {
      let addr = this.email;
      let body = {
        auth: {
          account: addr,
          mechanism: "email",
        },
      };
      let p = {
        method: "POST",
        type: "auth",
        id: "send-code",
        data: body,
      };
      this.$store.dispatch("rest/execute", p).then((res) => {
        this.handleResponseOfSendCode(res);
      });
    },

    handleResponseOfSendCode(res) {
      this.uuid = getter.Get("auth.parameters.uuid", res.data, "");
    },

    handleClickSignUp() {
      let addr = this.email;
      let uuid = this.uuid;
      let code = base64.EncodeString(this.vericode);
      let password = base64.EncodeString(this.password);
      let body = {
        auth: {
          account: addr,
          mechanism: "email",
          secret: code,
          parameters: { uuid, password },
        },
      };
      let p = {
        method: "POST",
        type: "auth",
        id: "sign-up",
        data: body,
      };
      this.$store.dispatch("rest/execute", p);
    },
  },
};
</script>
  
  <style scoped>
.btn-auth {
  margin-top: 30px;
  width: 100%;
}

.input-box {
  margin-bottom: 10px;
}
</style>
  