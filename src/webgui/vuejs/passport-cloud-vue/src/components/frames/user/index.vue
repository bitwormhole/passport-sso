<template>
  <div class="user-frame">
    <MyHeader />

    <slot></slot>

    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./header.vue";
import MyFooter from "./footer.vue";

export default {
  name: "user-frame-index",
  components: { MyHeader, MyFooter },
};
</script>
