<template>
  <div class="header">
    <span @click="toggle">
      <el-icon v-if="collapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ElIcon } from "element-plus";
//props
const props = defineProps<{
  collapse: boolean;
}>();
console.log(props);

//定义可触发的事件
const emits = defineEmits(["update:collapse"]);

//更改父组件的值
function toggle() {
  //触发v-model绑定的事件
  emits("update:collapse", !props.collapse);
}
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
