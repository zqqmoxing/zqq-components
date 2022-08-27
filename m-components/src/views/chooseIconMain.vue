<template>
  <div>
    <el-button type="primary" @click="choose">选择图标</el-button>
    <choose-icon title="测试title" v-model:visible="visible"></choose-icon>
  </div>
</template>

<script lang="ts" setup>
// import ChooseIcon from "../components/chooseIcon/src/index.vue";//全局已经注册，所有这里不用注册了
import { ref } from "vue";
let visible = ref<boolean>(false);

//打开弹框
function choose() {
  visible.value = true;
}
</script>
<style lang="scss" scoped></style>
