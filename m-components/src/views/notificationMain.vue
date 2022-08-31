<template>
  <div>
    <notification-menu></notification-menu>
    <br />
    <notification-menu value="30"></notification-menu>
    <br />
    <notification-menu value="50" :max="30"></notification-menu>
    <br />
    <notification-menu :isDot="true"></notification-menu>
    <br />
    <notification-menu :icon="'ChatRound'">
      <template #default>
        <tab-list
          :list="listData"
          :actions="actions"
          @clickItem="clickItem"
          @clickBtn="clickBtn"
        ></tab-list>
      </template>
    </notification-menu>
  </div>
</template>

<script lang="ts" setup>
import { NotificationMenu } from "zqq-components/notificationMenu";
import { TabList } from "zqq-components/tabList";
import { ref } from "vue";
import { listData, actions } from "../assets/data";
import { ListItem, ActionOptions } from "../components/tabList/src/type";
//点击列表的回调
function clickItem(item1: ListItem) {
  console.log(item1);
}
//点击按钮的回调
function clickBtn(action: ActionOptions) {
  console.log(action);
}
</script>
<style lang="scss" scoped></style>
