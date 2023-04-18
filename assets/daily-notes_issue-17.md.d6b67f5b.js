import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.6198fd23.js";const m=JSON.parse('{"title":"在 vue-cli 中使用 tailwindcss","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-17.md","lastUpdated":null}'),e={name:"daily-notes/issue-17.md"},p=l(`<h1 id="在-vue-cli-中使用-tailwindcss" tabindex="-1">在 vue-cli 中使用 tailwindcss <a class="header-anchor" href="#在-vue-cli-中使用-tailwindcss" aria-label="Permalink to &quot;在 vue-cli 中使用 tailwindcss&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/17" target="_blank" rel="noreferrer">在 vue-cli 中使用 tailwindcss | GitHub</a></p></div><p><a href="https://www.tailwindcss.cn/" target="_blank" rel="noreferrer">Tailwind CSS</a> 是一个高度可定制的基础层 CSS 框架，提供一系列的基础工具类，通过工具类的组合完成样式编写</p><h3 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h3><p><code>tailwindcss</code> 从 2.0 开始使用了 PostCSS 8，但是 vue-cli 自带的为 PostCSS 7，从而需要安装 <code>tailwindcss</code>的兼容版本</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><ol><li>安装依赖</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tailwindcss@npm:@tailwindcss/postcss7-compat</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tailwindcss@npm:@tailwindcss/postcss7-compat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 同时 autoprefixer 的版本必须是 \`9.x\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>创建 <code>tailwind.css</code></li></ol><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@tailwind</span><span style="color:#A6ACCD;"> base</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@tailwind</span><span style="color:#A6ACCD;"> components</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@tailwind</span><span style="color:#A6ACCD;"> utilities</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li><p>在 <code>main.js</code> 引入 <code>tailwind.css</code></p></li><li><p>根目录创建 <code>postcss.config.js</code></p></li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tailwindcss</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">autoprefixer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="修改-tailwind-配置项" tabindex="-1">修改 tailwind 配置项 <a class="header-anchor" href="#修改-tailwind-配置项" aria-label="Permalink to &quot;修改 tailwind 配置项&quot;">​</a></h3><p>根目录创建 <code>tailwind.config.js</code> 文件</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">variants</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><a href="https://www.tailwindcss.cn/docs/configuration" target="_blank" rel="noreferrer">配置项说明</a></p><h3 id="编辑器插件" tabindex="-1">编辑器插件 <a class="header-anchor" href="#编辑器插件" aria-label="Permalink to &quot;编辑器插件&quot;">​</a></h3><p><a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noreferrer">Visual Studio Code - Tailwind CSS IntelliSense</a></p><ol><li>语法提示</li><li>代码高亮</li><li>Linting</li></ol><h3 id="解决-apply-语法错误" tabindex="-1">解决 <code>@apply</code> 语法错误 <a class="header-anchor" href="#解决-apply-语法错误" aria-label="Permalink to &quot;解决 \`@apply\` 语法错误&quot;">​</a></h3><p>将 <code>@apply</code> 改为单行列出，多次调用</p><img width="851" alt="WeChat17d0e6cf8604e0cf180fd509d286fe93" src="https://user-images.githubusercontent.com/24606443/104677545-8662e780-5724-11eb-813d-554a8c66ce8f.png"><p><a href="https://stackoverflow.com/questions/61443484/how-to-solve-semi-colon-expected-csscss-semicolonexpected" target="_blank" rel="noreferrer">stackoverflow</a><a href="https://www.tailwindcss.cn/docs/functions-and-directives#apply" target="_blank" rel="noreferrer">@apply 语法文档</a></p><p><a href="https://tailwindcss.com/docs/installation#post-css-7-compatibility-build" target="_blank" rel="noreferrer">post-css-7-compatibility-build</a></p>`,24),o=[p];function t(i,c,r,d,u,y){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{m as __pageData,D as default};
