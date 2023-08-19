<template>
  <div>
    <pp-timer
      :enabled="true"
      :delay="5000"
      :interval="20000"
      @ontimer="ontimer"
    />
  </div>
</template>

<script>
import getter from "@/js/getter";

export default {
  name: "utils-token-keeper",

  computed: {
    token0() {
      return this.$store.getters["jwt/token0"];
    },
  },

  methods: {
    fetch() {
      this.$store.dispatch("jwt/fetch");
    },

    renew() {
      this.$store.dispatch("jwt/renew");
    },

    isNeedForFetch() {
      let token0 = this.token0;
      let created_at = getter.Get("created_at", token0);
      let expired_at = getter.Get("expired_at", token0);
      if (created_at == null && expired_at == null) {
        return true;
      }
      if (created_at == 0 && expired_at == 0) {
        return true;
      }
      return false;
    },

    isNeedForRenew() {
      let token0 = this.token0;
      let now = this.now();
      let created_at = getter.Get("created_at", token0, 0);
      let expired_at = getter.Get("expired_at", token0, 0);
      let line = expired_at - 90000;
      return 0 < created_at && line < now;
    },

    now() {
      let d = new Date();
      return d.getTime();
    },

    ontimer() {
      if (this.isNeedForFetch()) {
        this.fetch();
      } else if (this.isNeedForRenew()) {
        this.renew();
      }
    },
  },
};
</script>
