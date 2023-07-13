import{_ as e,o,g as l,R as i}from"./chunks/framework.ce5d0843.js";const a="/mm-notes/assets/instasll.cdee8a16.jpg",m=JSON.parse('{"title":"WebStorm 配置","description":"茂茂的 WebStorm 配置，记录扩展插件、使用小技巧","frontmatter":{"description":"茂茂的 WebStorm 配置，记录扩展插件、使用小技巧"},"headers":[],"relativePath":"efficiency/software/webstorm.md","lastUpdated":1689221597000}'),r={name:"efficiency/software/webstorm.md"},t=i('<h1 id="webstorm-配置" tabindex="-1">WebStorm 配置 <a class="header-anchor" href="#webstorm-配置" aria-label="Permalink to &quot;WebStorm 配置&quot;">​</a></h1><h2 id="获取许可证" tabindex="-1">获取许可证 <a class="header-anchor" href="#获取许可证" aria-label="Permalink to &quot;获取许可证&quot;">​</a></h2><p><a href="https://www.jetbrains.com/shop/eform/opensource" target="_blank" rel="noreferrer">使用开源项目免费申请 JetBrains 全家桶开源许可证</a></p><h2 id="常用插件" tabindex="-1">常用插件 <a class="header-anchor" href="#常用插件" aria-label="Permalink to &quot;常用插件&quot;">​</a></h2><ol><li>进入「<code>设置 - Plugins/插件 - Marketplace</code>」</li><li>复制插件名后进行搜索安装</li></ol><ul><li><strong><code>Chinese ​(Simplified)​ Language Pack / 中文语言包</code></strong> 编辑器汉化</li><li><strong><code>GitHub Copilot</code></strong> 代码智能提示</li><li><strong><code>GitToolBox</code></strong> 增强内置的 Git 功能（猪哥推荐）</li><li><strong><code>.env files support</code></strong> <code>.env</code> 文件键值字符串高亮</li><li><strong><code>.ignore</code></strong> <code>.env</code> 提示哪些文件可以被 <code>ignore</code></li><li><strong><code>CodeGlance Pro</code></strong> 在侧边栏显示代码缩略图（猪哥推荐）</li><li><strong><code>WakaTime</code></strong> 统计代码编写时间 (<a href="https://wakatime.com/dashboard" target="_blank" rel="noreferrer">WakaTime 官网</a>)</li></ul><h3 id="插件市场" tabindex="-1">插件市场 <a class="header-anchor" href="#插件市场" aria-label="Permalink to &quot;插件市场&quot;">​</a></h3><ul><li><a href="https://plugins.jetbrains.com/" target="_blank" rel="noreferrer">Plugins | JetBrains</a></li></ul><h2 id="主题美化" tabindex="-1">主题美化 <a class="header-anchor" href="#主题美化" aria-label="Permalink to &quot;主题美化&quot;">​</a></h2><blockquote><p>主题插件</p></blockquote><ul><li><strong><code>Atom Material Icons</code></strong> 图标美化</li><li><strong><code>Atom OneDark Theme</code></strong> Atom OneDark 主题</li><li><strong><code>Material Theme UI</code></strong> Material Design 主题</li><li><strong><code>One Dark theme</code></strong> 暗黑风格主题</li></ul><blockquote><p>配色方案</p></blockquote><ul><li><a href="https://github.com/uloco/webstorm-bluloco-scheme" target="_blank" rel="noreferrer">bluloco 方案</a><ul><li><a href="https://cdn.jsdelivr.net/gh/uloco/webstorm-bluloco-scheme/Bluloco%20Dark.icls" target="_blank" rel="noreferrer">Dark 下载</a></li><li><a href="https://cdn.jsdelivr.net/gh/uloco/webstorm-bluloco-scheme/Bluloco%20Light.icls" target="_blank" rel="noreferrer">Light 下载</a></li></ul></li></ul><blockquote><p>自定义背景图</p></blockquote><ol><li>进入 <code>设置 - 外观和行为 - Appearance</code></li><li>点击 <code>BACKGROUND IMAGE</code></li></ol><h2 id="汉化" tabindex="-1">汉化 <a class="header-anchor" href="#汉化" aria-label="Permalink to &quot;汉化&quot;">​</a></h2><blockquote><p>老版本</p></blockquote><ul><li>方案一 <ul><li>进入 <code>文件 - 设置 - Plugins - Marketplace</code></li><li>搜索 <code>Chinese ​(Simplified)​ Language Pack EAP</code> 下载安装</li></ul></li><li>方案二 <ul><li>打开 <a href="https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack-eap" target="_blank" rel="noreferrer">Chinese ​(Simplified)​ Language Pack EAP</a></li><li>点击 <code>Install to IDE</code> 按钮再选择对应编辑器</li></ul></li><li>方案三 <ul><li>查看本地 <code>WebStorm</code> 版本 <ul><li>进入 <code>帮助 - 关于</code></li><li>找到 <code>Build #WS-</code> 后面的数字</li></ul></li><li>打开 <a href="https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack-eap" target="_blank" rel="noreferrer">Chinese ​(Simplified)​ Language Pack EAP</a></li><li>点击 <code>Versions</code> 选择对应编辑器再搜索对应版本下载（当找不到一样的版本时，可以看列表的第二栏版本范围，找包含你编辑器的版本下载就行）</li><li>通过磁盘安装刚下载的文件</li></ul></li></ul><p><img src="'+a+'" alt="磁盘安装"></p><h2 id="配置-prettier-保存格式化" tabindex="-1">配置 Prettier 保存格式化 <a class="header-anchor" href="#配置-prettier-保存格式化" aria-label="Permalink to &quot;配置 Prettier 保存格式化&quot;">​</a></h2><p><strong>新版本</strong>：</p><ol><li>进入 <code>WebStorm - Settings - 框架和语言 - JavaScript - Prettier</code></li><li>勾选 <code>执行“重新格式化代码”操作时(R)</code> 和 <code>保存时(S)</code></li><li>进入 <code>WebStorm - Settings - 工具 - 保存时的操作</code></li><li>勾选 <code>重新格式化代码</code> 和 <code>运行 Prettier</code></li></ol><p><strong>老版本可使用 File Watchers 方案</strong>：</p><ol><li>进入 <code>文件 - 设置 - 工具 - File Watchers</code></li><li>点击 <code>+</code> 选择 <code>Prettier</code></li><li>将 <code>File type</code> 修改为你需要的文件类型，通用可选 <code>Any</code></li></ol><h2 id="webpack-项目识别-alias" tabindex="-1"><code>webpack</code> 项目识别 <code>alias</code> <a class="header-anchor" href="#webpack-项目识别-alias" aria-label="Permalink to &quot;`webpack` 项目识别 `alias`&quot;">​</a></h2><ol><li>进入 <code>文件 - 设置 - 框架和语言 - JavaScript - Webpack</code></li><li>将 <code>webpack</code> 配置文件地址修改为对应地址 <ol><li><code>vue-cli2.x</code>: 项目地址 + <code>\\build\\webpack.base.conf.js</code></li><li><code>vue-cli3.x 及以上</code>: 项目地址 + <code>\\node_modules\\@vue\\cli-service\\webpack.config.js</code></li></ol></li></ol>',26),c=[t];function d(s,n,h,u,p,b){return o(),l("div",null,c)}const k=e(r,[["render",d]]);export{m as __pageData,k as default};