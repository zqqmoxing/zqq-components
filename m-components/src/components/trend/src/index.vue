<template>
  <div class="trend">
    <div class="text">
      <slot v-if="slots.text" name="text"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <el-icon v-if="type === 'up'" :style="{ color: upColor }"><ArrowUp /></el-icon>
      <el-icon v-else :style="{ color: downColor }"><ArrowDown /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { ElIcon } from "element-plus";
const props = defineProps({
  //标记当前趋势是上升还是下将
  type: {
    type: String,
    default: "up"
  },
  //趋势显示的文字
  //1、可以是父组件传过来的数据
  //2、也可以是插槽
  text: {
    type: String,
    default: "text"
  },
  //上升趋势的图标颜色
  upColor: {
    type: String,
    default: "#f5222d"
  },
  //下降趋势的图标颜色
  downColor: {
    type: String,
    default: "#52c41a"
  }
});

const slots = useSlots();
console.log(slots);
</script>
<style lang="scss" scoped>
.trend {
  display: flex;
  .text {
    margin-right: 10px;
  }
}
</style>
