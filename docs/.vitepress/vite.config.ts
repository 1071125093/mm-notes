/*
 * @Author: XiaoJun
 * @Date: 2022-07-07 17:25:21
 * @LastEditors: XiaoJun
 * @LastEditTime: 2023-04-10 17:51:02
 * @Description: 组件功能
 * @FilePath: /xj-vite-pinia/vite.config.ts
 */
// import { defineConfig } from 'vite'
// import Macros from 'unplugin-vue-macros'
// import VueMacros from 'unplugin-vue-macros/vite'
// import DefineOptions from 'unplugin-vue-define-options/vite'
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import FullReload from 'vite-plugin-full-reload';
import { defineConfig } from 'vitepress';
export default {
  plugins: [
    // FullReload(['**/*.md']),
    // visualizer({
    //   emitFile: false,
    //   gzipSize: true,
    //   filename: 'report.html', //分析图生成的文件名
    //   open: true, //如果存在本地服务端口，将在打包后自动展示
    // }),
    AutoImport({
      imports: [
        'vue',
        // '@vueuse/core',
        // 'vue-i18n', ,
      ],
      //需要按需自动引入的依赖包
      dts: '../auto-import.d.ts',
      //选择auto-import.d.ts生成的位置'
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dirs: ['../src/components'],
      dts: '../components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../../src'),
    },
  },
} as ReturnType<typeof defineConfig>['vite'];
