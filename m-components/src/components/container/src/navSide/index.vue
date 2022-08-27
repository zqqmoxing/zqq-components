<template>
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    :collapse="collapse"
    :router="true"
  >
    <el-menu-item index="home" :route="{ path: '/' }">
      <el-icon><HomeFilled /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="chooseIconMain" :route="{ path: '/chooseIconMain' }">
      <el-icon><Check /></el-icon>
      <template #title>图标选择器</template>
    </el-menu-item>
    <el-menu-item index="chooseAreaMain" :route="{ path: '/chooseAreaMain' }">
      <el-icon><Check /></el-icon>
      <template #title>省市区选择</template>
    </el-menu-item>
    <el-menu-item index="trendMain" :route="{ path: '/trendMain' }">
      <el-icon><Check /></el-icon>
      <template #title>趋势标记</template>
    </el-menu-item>
    <el-menu-item index="notificationMain" :route="{ path: '/notificationMain' }">
      <el-icon><Check /></el-icon>
      <template #title>通知菜单</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ElMenuItem, ElMenu, ElIcon } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();
const defaultActive: string = router.currentRoute.value.name as string;

//props
const props = defineProps<{
  collapse: boolean;
}>();
console.log(props);
//methods
</script>
<style lang="scss" scoped></style>
