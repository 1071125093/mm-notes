import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.6198fd23.js";const b=JSON.parse('{"title":"语义化版本控制","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-10.md","lastUpdated":null}'),e={name:"daily-notes/issue-10.md"},p=l(`<h1 id="语义化版本控制" tabindex="-1">语义化版本控制 <a class="header-anchor" href="#语义化版本控制" aria-label="Permalink to &quot;语义化版本控制&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/10" target="_blank" rel="noreferrer">语义化版本控制 | GitHub</a></p></div><h2 id="语义化版本说明" tabindex="-1">语义化版本说明 <a class="header-anchor" href="#语义化版本说明" aria-label="Permalink to &quot;语义化版本说明&quot;">​</a></h2><ul><li>标准版本号表示: X.Y.Z <ul><li>X: 表示主版本号，在有任何不兼容的修改时递增</li><li>Y: 表示次版本号，在有向下兼容的新功能出现时递增</li><li>Z: 表示修订版本号，在只做了向下兼容的修正时才递增</li></ul></li><li>先行版本号，在修订版本号使用连接号加上一连串以句点分隔的标识符来修饰。 <ul><li>先行版本号则表示这个版本并非稳定而且可能无法满足预期的兼容性需求</li><li>例子: 1.0.0-alpha 1.0.0-beta</li></ul></li><li>版本号优先级 <ul><li>主版本号、次版本号及修订版本号以数值比较</li><li>当主版本号、次版本号及修订版本号都相同时</li></ul></li></ul><h3 id="版本号优先级排序" tabindex="-1">版本号优先级排序 <a class="header-anchor" href="#版本号优先级排序" aria-label="Permalink to &quot;版本号优先级排序&quot;">​</a></h3><ol><li>要将版本号拆分为主版本号、次版本号、修订版本号及先行版本号</li><li>由左到右依序比较每个标识符(主版本号、次版本号及修订版本号直接以数值比较)</li><li>当主版本号、次版本号及修订版本号都相同时，以先行版本号来判断</li><li>先行版本号判断通过由左到右的每个被句点分隔的标识符来比较，直到找到一个差异值后决定：只有数字的标识符以数值高低比较，有字母或连接号时则逐字以 ASCII 的排序来比较</li></ol><p>🌰 1.0.0-alpha &lt; 1.0.0-alpha.1 &lt; 1.0.0-alpha.beta &lt; 1.0.0-beta &lt; 1.0.0-beta.2 &lt; 1.0.0-beta.11 &lt; 1.0.0-rc.1 &lt; 1.0.0</p><h2 id="使用-standard-version" tabindex="-1">使用 standard-version <a class="header-anchor" href="#使用-standard-version" aria-label="Permalink to &quot;使用 standard-version&quot;">​</a></h2><p><a href="https://github.com/conventional-changelog/standard-version" target="_blank" rel="noreferrer">standard-version</a> 可以进行语义化版本发布和 CHANGELOG 生成</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">standard-version</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--save-dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">standard-version</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>在 <code>package.json</code> 的 <code>scripts</code> 配置 <code>&quot;release&quot;: &quot;standard-version&quot;</code></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 发布第一版</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">release</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--first-release</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Pre-Release</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">release</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--prerelease</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># alpha / beta / rc</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">release</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--prerelease</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alpha</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># major minor patch</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">release</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--release-as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">major</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定版本</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">release</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--release-as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">x.y.z</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="相关资料" tabindex="-1">相关资料 <a class="header-anchor" href="#相关资料" aria-label="Permalink to &quot;相关资料&quot;">​</a></h3><p><a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noreferrer">语义化版本 2.0.0</a><a href="https://github.com/npm/node-semver" target="_blank" rel="noreferrer">语义版本控制程序 semver</a></p>`,16),o=[p];function r(t,c,i,C,d,y){return a(),n("div",null,o)}const h=s(e,[["render",r]]);export{b as __pageData,h as default};
