<script lang="ts" setup>
import { createApp } from 'vue';

// #region ********** 库&组件等引入 start **************/
// #endregion ******* 库&组件等引入 ~end~ **************/

// #region ********** 通用部分 start **************/
const calcWtf = computed(() => {
  return '我我我';
});
// #endregion ******* 通用部分 ~end~ **************/

// #region ********** 测试区域 start **************/
// #endregion ******* 测试区域 ~end~ **************/
</script>
<template>
  <div class="xj-test">我是组件{{ calcWtf }}</div>
  <n-button type="primary">呜呜呜</n-button>
  <n-input></n-input>
</template>
<style lang="less" scoped>
.xj-test {
}
</style>
