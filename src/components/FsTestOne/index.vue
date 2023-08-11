<!--
 * @Author: XiaoJun
 * @Date: 2023-08-07 15:28:13
 * @LastEditors: XiaoJun
 * @LastEditTime: 2023-08-09 14:04:05
 * @Description: 组件功能
 * @FilePath: /mm-notes/src/components/FsTestOne/index.vue
-->
<script lang="ts" setup>
// #region ********** 库&组件等引入 start **************/
// #endregion ******* 库&组件等引入 ~end~ **************/

// #region ********** 通用部分 start **************/
withDefaults(
  defineProps<{
    name?: string
  }>(),
  {
    name: '我逝世看'
  }
)
// #endregion ******* 通用部分 ~end~ **************/

// #region ********** 测试区域 start **************/
// #endregion ******* 测试区域 ~end~ **************/
</script>
<template>
  <div class="fs-test-two">
    <div class="label">我是FsTestOne</div>
    <n-ellipsis>我接受参数name：{{ name }}</n-ellipsis>
    <n-button type="primary">你动我试试</n-button>
  </div>
</template>
<style lang="less" scoped>
.fs-test-two {
  .label {
    // color: #000;
  }
}
</style>
