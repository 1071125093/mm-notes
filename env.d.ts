/// <reference types="vitepress/client" />
/// <reference types="@xj-monorepo/prettier/types" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
