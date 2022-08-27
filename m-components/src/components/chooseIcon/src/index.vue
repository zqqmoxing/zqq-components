<template>
  <div class="chooseIcon">
    <el-dialog v-model="dialogTableVisible" :title="title" @close="close">
      <div class="container">
        <ul class="demo-icon-list">
          <li
            class="icon-item"
            v-for="(item, key) in ElementPlusIconsVue"
            :key="key"
            @click="copyIcon(key)"
          >
            <el-icon style="font-size: 20px">
              <!-- currentTab 改变时组件也改变 -->
              <component :is="key"></component>
            </el-icon>
            <div class="text">{{ key }}</div>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import useCopy from "../../../hooks/useCopy";
import { ElDialog, ElIcon } from "element-plus";
//运行时声明
const props = defineProps({
  title: {
    default: "选择图标",
    type: String
  },
  visible: {
    default: false,
    type: Boolean
  }
});

const emits = defineEmits(["update:visible"]);

//不能跟改props的值，这里将props的值复制一份
const dialogTableVisible = ref<boolean>(props.visible);

//监听器
watch(
  () => props.visible, //第一个参数为一个getter函数
  //第二个参数为回调函数
  (current, prev) => {
    dialogTableVisible.value = current;
  }
);
//methods
//弹框关闭的回调
function close() {
  emits("update:visible", false);
}
//点击复制图标
function copyIcon(key: string) {
  useCopy(`<el-icon><${key}/></el-icon>`);
}
</script>
<style lang="scss" scoped>
.chooseIcon {
  .container {
    height: 60vh;
    overflow: auto;
    padding: 0 20px;
    .demo-icon-list {
      overflow: hidden;
      list-style: none;
      padding: 0 !important;
      border-top: 1px solid var(--el-border-color);
      border-left: 1px solid var(--el-border-color);
      border-radius: 4px;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      .icon-item {
        text-align: center;
        color: var(--el-text-color-regular);
        height: 90px;
        font-size: 13px;
        border-right: 1px solid var(--el-border-color);
        border-bottom: 1px solid var(--el-border-color);
        transition: background-color var(--el-transition-duration);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .text {
          margin-top: 6px;
        }
      }
    }
  }
}
</style>
