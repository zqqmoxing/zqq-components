<template>
  <div>
    <el-popover placement="bottom" :width="400" trigger="click">
      <template #reference>
        <el-badge :value="value" :max="max" :is-dot="isDot" style="cursor: pointer">
          <el-icon>
            <component :is="icon"></component>
          </el-icon>
        </el-badge>
      </template>
      <slot></slot>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { ElBadge, ElIcon, ElPopover } from "element-plus";
const props = defineProps({
  //最大值
  max: {
    type: Number
  },
  //通知的图标
  icon: {
    type: String,
    default: "Bell"
  },
  //通知的数量
  value: {
    type: [String, Number],
    default: ""
  },
  //是否显示小圆点
  isDot: {
    type: Boolean,
    default: false
  }
});
const slots = useSlots();
console.log(props);
</script>
<style lang="scss" scoped></style>
