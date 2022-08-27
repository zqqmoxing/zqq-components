<template>
  <div>二次封装组件</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup(props) {
    console.log(props);
  }
});
</script>
<style lang="scss" scoped></style>
