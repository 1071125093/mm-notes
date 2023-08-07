<script lang="ts" setup>
// #region ********** 库&组件等引入 start **************/
// #endregion ******* 库&组件等引入 ~end~ **************/

// #region ********** 通用部分 start **************/
const xjTest = () => {
  const asd: number[] = [1, 2, 3];
  console.log(asd, '我裂开了');
};
// #endregion ******* 通用部分 ~end~ **************/

// #region ********** 测试区域 start **************/
// #endregion ******* 测试区域 ~end~ **************/
</script>
<template>
  <div class="xj-test">
    我逝世看
    <span @click="xjTest">你动我试试</span>
  </div>
</template>
