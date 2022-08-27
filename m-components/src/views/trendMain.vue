<template>
  <div>
    <div class="flex">
      <div style="margin-right: 10px">
        <trend type="up" text="hehe" upColor="red">
          <template v-slot:text> 插槽 </template>
        </trend>
      </div>
      <div style="margin-right: 10px">
        <trend type="down" downColor="pink" text="hehe1"></trend>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>
