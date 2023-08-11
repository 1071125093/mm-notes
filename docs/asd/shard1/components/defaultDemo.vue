<!--
 * @Author: XiaoJun
 * @Date: 2023-08-09 14:02:05
 * @LastEditors: XiaoJun
 * @LastEditTime: 2023-08-09 14:03:51
 * @Description: 我逝世看
 * @FilePath: /mm-notes/docs/asd/shard1/example/defaultDemo.vue
-->
<script lang="ts" setup>
import { reactive } from 'vue'

// #region ********** 库&组件等引入 start **************/
// #endregion ******* 库&组件等引入 ~end~ **************/

// #region ********** 通用部分 start **************/
const bobo = reactive({
  name: '我是来自bobo的参数'
})
// #endregion ******* 通用部分 ~end~ **************/

// #region ********** 测试区域 start **************/
// #endregion ******* 测试区域 ~end~ **************/
</script>
<template>
  <div class="default-demo">
    啊呀呀呀呀感受一下强度
    <FsTestOne :name="bobo.name"></FsTestOne>
  </div>
</template>
<style lang="less" scoped></style>
