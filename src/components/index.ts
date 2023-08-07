import { Module } from 'vm';
import { Component, DefineComponent, VNode } from 'vue';

/** 获取组件 */
const getComponents = (): Record<
  string,
  {
    default: DefineComponent;
  }
> => {
  return import.meta.glob('./**/*.vue', {
    eager: true,
  });
};
// 转大驼峰，gptcv的 一行没改
function toUpperCamelCase(input: string): string {
  if (!input) {
    return '';
  }

  // 首先，将字符串拆分为单词数组
  const words = input.trim().split(/\s+/);

  // 对每个单词进行首字母大写转换
  const upperCamelCaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // 将单词数组拼接为一个字符串并返回
  return upperCamelCaseWords.join('');
}

export default {
  install(app: App) {
    const components = getComponents();
    for (let key in components) {
      const component = components[key].default;
      let theName = component.__name;
      // 情况1
      // 情况2
      if (theName === 'index') {
        // 情况3
        theName = component.__file?.match(/\/(\w+)\/index.vue$/)?.[1];
      } else {
      }
      if (!theName) return;
      theName = toUpperCamelCase(theName);
      app.component(theName, component);
    }
    // app.component();
  },
};
