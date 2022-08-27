<template>
  <div>
    <el-select v-model="provice" class="m-2" placeholder="请选择省份" :clearable="true">
      <el-option v-for="item in areas" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select
      :clearable="true"
      v-model="city"
      class="m-2"
      placeholder="请选择城市"
      :disabled="!provice"
      style="margin: 0 10px"
    >
      <el-option v-for="item in cityArr" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select
      v-model="area"
      class="m-2"
      placeholder="请选择区域"
      :disabled="!city"
      :clearable="true"
    >
      <el-option v-for="item in areaArr" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, ComputedRef, watch } from "vue";
import areas from "../lib/pca-code.json";
import { ElSelect, ElOption } from "element-plus";
export interface AreaItem {
  code: string;
  name: string;
  children?: AreaItem[];
}
export interface Data {
  code: string;
  name: string;
}
const provice = ref<string>(""); //省
const city = ref<string>(""); //市
const area = ref<string>(""); //区
//计算属性
//城市数组
const cityArr: ComputedRef<AreaItem[]> = computed(() => {
  city.value = "";
  let arr = areas.find(item => {
    return item.code === provice.value;
  });
  if (arr) return arr.children;
  return [];
});
//区域数组
const areaArr: ComputedRef<AreaItem[]> = computed(() => {
  area.value = "";
  let arr = cityArr.value.find(item => {
    return item.code === city.value;
  });
  if (arr) return arr.children!;
  return [];
});
//事件
const $emits = defineEmits(["change"]);
watch(area, val => {
  let proviceName = "",
    cityName = "",
    areaName = "";
  if (provice.value) {
    proviceName = areas.find(item => {
      return item.code === provice.value;
    })!.name;
  }
  if (city.value) {
    cityName = cityArr.value.find(item => {
      return item.code === city.value;
    })!.name;
  }
  if (area.value) {
    areaName = areaArr.value.find(item => {
      return item.code === area.value;
    })!.name;
  }
  const d = {
    provice: {
      name: proviceName,
      code: provice.value
    },
    city: {
      name: cityName,
      code: city.value
    },
    area: {
      name: areaName,
      code: area.value
    }
  };
  $emits("change", d);
});
</script>
<style lang="scss" scoped></style>
