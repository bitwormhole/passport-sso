<template>
  <div>
    <div class="session-empty">
      <router-link to="/login">登录</router-link>
      <router-link to="/sign-up">注册</router-link>
    </div>

    <div class="session-ready">
      <ul>
        <li>authorized: {{ authorized }}</li>
        <li>Avatar: {{ avatar }}</li>
        <li>Nickname: {{ nickname }}</li>
        <li>Roles: {{ roles }}</li>
        <li>UserName: {{ username }}</li>
        <li>uid: {{ uid }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "session-info-box",

  computed: {
    authorized() {
      return this.$store.getters["session/authorized"];
    },
    avatar() {
      return this.$store.getters["session/avatar"];
    },
    nickname() {
      return this.$store.getters["session/nickname"];
    },
    roles() {
      return this.$store.getters["session/roles"];
    },
    username() {
      return this.$store.getters["session/username"];
    },
    uid() {
      return this.$store.getters["session/uid"];
    },
  },

  data() {
    return {};
  },

  methods: {
    fetch() {
      this.$store.dispatch("session/fetch");
    },
  },

  mounted() {
    this.fetch();
  },
};
</script>
