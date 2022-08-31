<template>
  <div>
    <choose-area @change="changeArea"></choose-area>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { ChooseArea } from "zqq-components/chooseArea";
import { Data } from "../components/chooseArea/src/index.vue";

export interface Area {
  provice: Data;
  city: Data;
  area: Data;
}
console.log(ChooseArea);
function changeArea(data: Area) {
  //更改区域时触发
  console.log(data);
}
</script>
<style lang="scss" scoped></style>
