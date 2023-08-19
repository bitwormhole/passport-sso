<template>
  <el-input class="input-box">
    <template #append>
      <el-button :disabled="sendCodeDisabled" @click="handleClickSendCode">
        {{ sendCodeText }}
      </el-button>
    </template>
  </el-input>
</template>
  
<script>
export default {
  name: "verification-code-input",

  data() {
    return {
      sendCodeDisabled: false,
      sendCodeText: "",
      resetSendButtonAt: 0,
    };
  },

  methods: {
    handleClickSendCode() {
      this.startTimer();
      this.$emit("send");
    },

    reset() {
      this.sendCodeText = "发送验证码";
      this.sendCodeDisabled = false;
    },

    startTimer() {
      let maxAge = 60 * 1000; // 60s
      let now = this.now();
      this.sendCodeDisabled = true;
      this.resetSendButtonAt = now + maxAge;
      this.setTimer();
    },

    setTimer() {
      let t0 = this.resetSendButtonAt;
      let now = this.now();
      if (t0 <= now) {
        this.reset();
        return;
      }
      let sec = (t0 - now) / 1000;
      this.sendCodeText = Math.floor(sec + 0.5); // + " 秒后重发";
      setTimeout(() => {
        this.setTimer();
      }, 1000);
    },

    now() {
      let now = new Date();
      return now.getTime();
    },
  },

  mounted() {
    this.reset();
  },
};
</script>
  
<style scoped>
</style>
