<template>
  <div class="tab-list">
    <el-tabs>
      <el-tab-pane v-for="(item, index) in list" :label="item.title">
        <el-scrollbar max-height="300px">
          <div
            class="container"
            v-for="(item1, index1) in item.content"
            :key="index1"
            @click="clickItem(item1)"
          >
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="small" :src="item1.avatar"></el-avatar>
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>{{ item1.title }}</div>
                <el-tag v-if="item1.tag" :type="item1.tagType">{{ item1.tag }}</el-tag>
              </div>
              <div class="time" v-if="item1.desc">{{ item1.desc }}</div>
              <div class="time" v-if="item1.time">{{ item1.time }}</div>
            </div>
          </div>
        </el-scrollbar>
        <div class="actions" v-if="actions">
          <div
            class="a-item"
            @click="clickBtn(action)"
            :class="{ border: i !== actions.length }"
            v-for="(action, i) in actions"
            :key="i"
          >
            <div class="a-icon" v-if="action.icon">
              <el-icon><component :is="action.icon"></component></el-icon>
            </div>
            <div class="a-text">{{ action.text }}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType } from "vue";
import { List, ListItem, ActionOptions } from "./type";
import { ElScrollbar, ElIcon, ElTabs, ElTabPane, ElAvatar, ElTag } from "element-plus";
const props = defineProps({
  list: {
    type: Array as PropType<List[]>
  },
  actions: {
    type: Array as PropType<ActionOptions[]>
  }
});
const emits = defineEmits(["clickItem", "clickBtn"]);
function clickItem(item1: ListItem) {
  emits("clickItem", item1);
}
function clickBtn(action: ActionOptions) {
  emits("clickBtn", action);
}
</script>
<style lang="scss" scoped>
.tab-list {
  margin: -12px;
  :global(.el-tabs__item) {
    padding: 0 20px !important;
  }
  :global(.el-tabs__header) {
    margin-bottom: 0;
  }
}
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background: #e6f6ff;
  }
  .avatar {
    width: 24px;
    margin-right: 10px;
  }
  .content {
    flex: 3;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }
}
.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  .a-item {
    height: 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .a-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
}
.border {
  border-right: 1px solid #eee;
}
</style>
