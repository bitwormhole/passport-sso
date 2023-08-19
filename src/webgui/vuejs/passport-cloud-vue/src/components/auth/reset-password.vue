<template>
  <AuthFrame>
    <el-tabs not-type="border-card">
      <el-tab-pane label="eMail">
        <template #label>
          <span class="tab-label" title="通过邮件重设密码">
            <el-icon><message /></el-icon>
          </span>
        </template>
        <h2>通过邮件重设密码</h2>
        <ResetPasswordBoxM />
      </el-tab-pane>
      <el-tab-pane label="Phone">
        <template #label>
          <span class="tab-label" title="通过手机重设密码">
            <el-icon><Cellphone /></el-icon>
          </span>
        </template>
        <h2>通过手机重设密码</h2>
        <ResetPasswordBoxP />
      </el-tab-pane>
    </el-tabs>
  </AuthFrame>
</template>

<script>
import AuthFrame from "./frame.vue";
import ResetPasswordBoxM from "./reset-password-with-email-box.vue";
import ResetPasswordBoxP from "./reset-password-with-phone-box.vue";

export default {
  name: "reset-password",
  components: { AuthFrame, ResetPasswordBoxM, ResetPasswordBoxP },
};
</script>
  
<style scoped>
.tab-label {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
