import { defineConfig } from 'vitepress'
type GetType<T> = T extends (infer R)[] ? R : never

export function MarkdownTransform(): GetType<Exclude<ReturnType<typeof defineConfig>['vite'], undefined>['plugins']> {
  return {
    name: 'hs-components-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      console.log(id);
      
      if (!id.endsWith('.demo.md')) return code
      code += '\n'
      code += '`'
      code += '`'
      code += '` vue'
      code += `
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
      `
      code += '`'
      code += '`'
      code += '`'
      return code
    }
  }
}
