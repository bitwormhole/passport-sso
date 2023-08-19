<template>
  <div>
    <div class="debug" v-show="debug">
      <div>timer</div>
      <div>src.count: {{ count }}</div>
      <div>src.timestamp: {{ timestamp }}</div>
      <div>this.index: {{ index }}</div>
      <div>this.firedAt: {{ firedAt }}</div>
      <div>this.nextAt : {{ deadline }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "utils-timer",

  computed: {
    count() {
      return this.$store.getters["timer/count"];
    },
    timestamp() {
      return this.$store.getters["timer/timestamp"];
    },
  },

  data() {
    return {
      startedAt: 0, // 启动时刻
      firedAt: 0, // 上一次触发时刻
      deadline: 0, // 下一次触发时刻
      index: 0, // 触发计数器
    };
  },

  methods: {
    init() {
      this.$store.dispatch("timer/init");
    },

    ontimer() {
      let count = this.index;
      let timestamp = this.timestamp;
      let name = this.name;
      this.$emit("ontimer", { name, count, timestamp });
    },

    fire(now) {
      const deviationLimit = 1000; // 最大误差
      let delta = this.interval;
      let diff = Math.abs(now - this.deadline); // 当前误差

      if (diff < deviationLimit) {
        this.firedAt = now;
        this.deadline += delta; // 误差较小
      } else {
        this.firedAt = now;
        this.deadline = now + delta; // 误差较大
      }

      if (delta < 1) {
        // once mode
        if (this.index == 0) {
          this.index++;
          this.ontimer();
        }
      } else {
        // loop mode
        this.index++;
        this.ontimer();
      }
    },

    check() {
      if (!this.enabled) {
        return;
      }
      let now = this.now();
      if (this.isTimeToFire(now)) {
        this.fire(now);
      }
    },

    isTimeToFire(now) {
      let offset = 250; // 补偿 250ms
      let dl = this.deadline - offset;
      return dl < now;
    },

    start() {
      let now = this.now();
      this.deadline = now + this.delay;
      this.startedAt = now;
      this.firedAt = now;
      this.index = 0;
    },

    stop() {
      this.deadline = 0;
      this.startedAt = 0;
      this.firedAt = 0;
      this.index = 0;
    },

    now() {
      let now = new Date();
      return now.getTime();
    },
  },

  mounted() {
    this.init();
    this.start();
  },

  props: {
    name: String,
    enabled: Boolean,
    debug: Boolean,
    delay: Number,
    interval: Number, // 如果 interval<=0, 表示为'once'模式；interval>0为循环模式
  },

  watch: {
    enabled(value, older) {
      if (value == older) {
        return;
      }
      if (value) {
        this.start();
      } else {
        this.stop();
      }
    },

    timestamp() {
      this.check();
    },
  },
};
</script>

<style  scoped>
.debug {
  background-color: yellow;
  border-color: black;
  border-width: 10px;
  border-style: solid;
  padding: 3px;
}
</style>
