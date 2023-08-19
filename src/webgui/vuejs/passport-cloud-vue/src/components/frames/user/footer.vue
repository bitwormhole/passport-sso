<template>
  <div class="user-frame-footer">
    (user-frame-footer)

    <pp-timer
      :debug="false"
      enabled
      :delay="1000"
      :interval="5000"
      @ontimer="onTimer"
    />
    <pp-timer debug />
    <pp-timer debug />

    <TokenKeeper />
  </div>
</template>
  
<script>
import TokenKeeper from "@/components/utils/token-keeper.vue";

export default {
  name: "user-frame-footer",

  components: { TokenKeeper },

  methods: {
    onTimer(p) {
      let str = JSON.stringify(p, null, 4);
      console.log("onTimer:" + str);
    },
  },
};
</script>
  