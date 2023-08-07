# `Vue` 实用技巧

[我的天那](./asd.md)

## `Custom Title` 哎呀

::: danger STOP
Danger zone, do not proceed
:::

## `我是谁` 我也来逝世看

<script setup>
import xjTest from './xjTest.vue'
const getStr = ()=>{
  console.log(123)
}
getStr()
</script>

<xjTest></xjTest>

::: details 我里面是代码

```vue
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
```

:::

## `Vue2` 在父组件中监听子组件的生命周期钩子

```vue
<template>
  <child @hook:mounted="onChildMounted"></child>
</template>
<script>
export default {
  methods: {
    onChildMounted() {},
  },
};
</script>
```

[相关源码](https://github.com/vuejs/vue/blob/dev/src/core/instance/lifecycle.js#L347)

## 在 `methods` 中使用 `debounce` / `throttle`

```vue
<template>
  <div class="container" @click="handleClick"></div>
</template>
<script>
import { debounce } from 'lodash-es';
export default {
  methods: {
    handleClick: debounce(function () {}, 500),
  },
};
</script>
```

[官网例子](https://cn.vuejs.org/v2/guide/migration.html#%E5%B8%A6%E6%9C%89-debounce-%E7%9A%84-v-model%E7%A7%BB%E9%99%A4)
