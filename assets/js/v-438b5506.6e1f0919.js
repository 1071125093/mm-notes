"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[448],{2103:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-438b5506","path":"/css/sass.html","title":"Sass","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"常用的 mixins","slug":"常用的-mixins","link":"#常用的-mixins","children":[{"level":3,"title":"元素大小","slug":"元素大小","link":"#元素大小","children":[]},{"level":3,"title":"flex 居中","slug":"flex-居中","link":"#flex-居中","children":[]},{"level":3,"title":"显示省略号","slug":"显示省略号","link":"#显示省略号","children":[]},{"level":3,"title":"滚动","slug":"滚动","link":"#滚动","children":[]},{"level":3,"title":"清除浮动","slug":"清除浮动","link":"#清除浮动","children":[]},{"level":3,"title":"扩展点击区域","slug":"扩展点击区域","link":"#扩展点击区域","children":[]},{"level":3,"title":"安全距离","slug":"安全距离","link":"#安全距离","children":[]}]},{"level":2,"title":"常用的 function","slug":"常用的-function","link":"#常用的-function","children":[{"level":3,"title":"移除单位","slug":"移除单位","link":"#移除单位","children":[]},{"level":3,"title":"转换为 rem","slug":"转换为-rem","link":"#转换为-rem","children":[]}]}],"git":{"updatedTime":1676563041000},"filePathRelative":"css/sass.md"}')},4757:(s,n,a)=>{a.r(n),a.d(n,{default:()=>y});var l=a(6808);const e=(0,l.uE)('<h1 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> Sass</h1><blockquote><p>记录 Sass 的语法和一些常用小技巧</p></blockquote><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>Sass</code> 是一款强化 <code>CSS</code> 的辅助工具（即 <code>CSS</code> 预处理器或 <code>CSS</code> 预编译语言），它在 <code>CSS</code> 语法的基础上增加了变量 (<code>variables</code>)、嵌套 (<code>nested rules</code>)、混合 (<code>mixins</code>)、导入 (<code>inline imports</code>) 等高级功能，这些拓展令 <code>CSS</code> 更加强大与优雅。</p>',4),p={href:"https://sass-lang.com",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.sassmeister.com",target:"_blank",rel:"noopener noreferrer"},D=(0,l.uE)('<h2 id="常用的-mixins" tabindex="-1"><a class="header-anchor" href="#常用的-mixins" aria-hidden="true">#</a> 常用的 mixins</h2><h3 id="元素大小" tabindex="-1"><a class="header-anchor" href="#元素大小" aria-hidden="true">#</a> 元素大小</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">@mixin</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">size</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$width</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">$height</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$width</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">width</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$width</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">height</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$height</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-居中" tabindex="-1"><a class="header-anchor" href="#flex-居中" aria-hidden="true">#</a> flex 居中</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">@mixin</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">flex-center</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$direction</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">row</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">flex</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$direction</span><span style="color:#D4D4D4;"> != </span><span style="color:#CE9178;">row</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">flex-direction</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$direction</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">justify-content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">center</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">align-items</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">center</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示省略号" tabindex="-1"><a class="header-anchor" href="#显示省略号" aria-hidden="true">#</a> 显示省略号</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">/* 单行省略号 */</span></span>\n<span class="line"><span style="color:#C586C0;">@mixin</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">ellipsis</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">hidden</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">text-overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ellipsis</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">white-space</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">nowrap</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;">/* 多行省略号 */</span></span>\n<span class="line"><span style="color:#C586C0;">@mixin</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">multi-ellipsis</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$row</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@if</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">type-of</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$row</span><span style="color:#D4D4D4;">) != </span><span style="color:#CE9178;">&#39;number&#39;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">@error</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;$row 必须是一个有效的数字&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">display</span><span style="color:#D4D4D4;">: -webkit-box;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">-webkit-line-clamp</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$row</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* autoprefixer: ignore next */</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">-webkit-box-orient</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">vertical</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">hidden</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">text-overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ellipsis</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;">/* 组合写法 */</span></span>\n<span class="line"><span style="color:#C586C0;">@mixin</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">ellipsis</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$row</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@if</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">type-of</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$row</span><span style="color:#D4D4D4;">) != </span><span style="color:#CE9178;">&#39;number&#39;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">@error</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;$row 必须是一个有效的数字&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$row</span><span style="color:#D4D4D4;"> == </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">white-space</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">nowrap</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">@else </span><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">display</span><span style="color:#D4D4D4;">: -webkit-box;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">-webkit-line-clamp</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$row</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">/* autoprefixer: ignore next */</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">-webkit-box-orient</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">vertical</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">hidden</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">text-overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ellipsis</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="滚动" tabindex="-1"><a class="header-anchor" href="#滚动" aria-hidden="true">#</a> 滚动</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">@mixin</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">scroll</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;y&#39;</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$type</span><span style="color:#D4D4D4;"> == </span><span style="color:#CE9178;">&#39;x&#39;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">overflow-x</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">auto</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">overflow-y</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">hidden</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">@else if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$type</span><span style="color:#D4D4D4;"> == </span><span style="color:#CE9178;">&#39;y&#39;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">overflow-x</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">hidden</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">overflow-y</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">auto</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">@else </span><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">overflow</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">auto</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">-webkit-overflow-scrolling</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">touch</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">@mixin</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">clearfix</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">&amp;</span><span style="color:#D7BA7D;">::after</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">display</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">block</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">clear</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">both</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#D7BA7D;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展点击区域" tabindex="-1"><a class="header-anchor" href="#扩展点击区域" aria-hidden="true">#</a> 扩展点击区域</h3><p>常用于移动端，毕竟总有一些作妖小图标按钮不好点击</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">/* 移除单位 */</span></span>\n<span class="line"><span style="color:#C586C0;">@function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">strip-unit</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;"> / (</span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;"> * </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">@mixin</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">extend-click</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$size</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">strip-unit</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$size</span><span style="color:#D4D4D4;">) * </span><span style="color:#B5CEA8;">-1px</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">position</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">relative</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">&amp;</span><span style="color:#D7BA7D;">::before</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#D7BA7D;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">position</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">absolute</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">top</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">left</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">right</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">bottom</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#%E7%A7%BB%E9%99%A4%E5%8D%95%E4%BD%8D">strip-unit</a></p><h3 id="安全距离" tabindex="-1"><a class="header-anchor" href="#安全距离" aria-hidden="true">#</a> 安全距离</h3><p>iPhone X 以上手机添加安全距离</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">@mixin</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">safe-area</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$direction</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@if</span><span style="color:#D4D4D4;"> not </span><span style="color:#DCDCAA;">index</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">top</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">right</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">bottom</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">left</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">$direction</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">@error</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;$direction 必须为 `top`, `right`, `bottom`, `left`&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    padding-</span><span style="color:#9CDCFE;">#{$direction}</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    padding-</span><span style="color:#9CDCFE;">#{$direction}</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">calc</span><span style="color:#D4D4D4;">(</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">constant</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">safe-area-inset-#{$direction}</span><span style="color:#D4D4D4;">) + </span><span style="color:#9CDCFE;">#{$value}</span></span>\n<span class="line"><span style="color:#D4D4D4;">    );</span></span>\n<span class="line"><span style="color:#D4D4D4;">    padding-</span><span style="color:#9CDCFE;">#{$direction}</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">calc</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">env</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">safe-area-inset-#{$direction}</span><span style="color:#D4D4D4;">) + </span><span style="color:#9CDCFE;">#{$value}</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">@else </span><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">    padding-</span><span style="color:#9CDCFE;">#{$direction}</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">constant</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">safe-area-inset-#{$direction}</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">    padding-</span><span style="color:#9CDCFE;">#{$direction}</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">env</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">safe-area-inset-#{$direction}</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用的-function" tabindex="-1"><a class="header-anchor" href="#常用的-function" aria-hidden="true">#</a> 常用的 function</h2><h3 id="移除单位" tabindex="-1"><a class="header-anchor" href="#移除单位" aria-hidden="true">#</a> 移除单位</h3><ul><li><code>1px =&gt; 1</code></li><li><code>2em =&gt; 2</code></li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">@function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">strip-unit</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;"> / (</span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;"> * </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;">/* math 函数版本（个人不太喜欢） */</span></span>\n<span class="line"><span style="color:#C586C0;">@function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">strip-unit</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">math</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">div</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;"> * </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">));</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转换为-rem" tabindex="-1"><a class="header-anchor" href="#转换为-rem" aria-hidden="true">#</a> 转换为 rem</h3>',23),c={href:"https://github.com/cuth/postcss-pxtorem",target:"_blank",rel:"noopener noreferrer"},r=(0,l._)("code",null,"rem",-1),i=(0,l.uE)('<div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#9CDCFE;">$rem-base</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">16px</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">!default</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">@function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">to-rem</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">$base:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$rem-base</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">$result</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">strip-unit</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$value</span><span style="color:#D4D4D4;">) / </span><span style="color:#DCDCAA;">strip-unit</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$base</span><span style="color:#D4D4D4;">) * </span><span style="color:#B5CEA8;">1rem</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@if</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$result</span><span style="color:#D4D4D4;"> == </span><span style="color:#CE9178;">&#39;0rem&#39;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">@return</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">@return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$result</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),t={},y=(0,a(8580).Z)(t,[["render",function(s,n){const a=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[e,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",p,[(0,l.Uk)("Sass 官网"),(0,l.Wm)(a)])]),(0,l._)("li",null,[(0,l._)("a",o,[(0,l.Uk)("Sass Playground"),(0,l.Wm)(a)])])]),D,(0,l._)("p",null,[(0,l.Uk)("一般情况下使用 "),(0,l._)("a",c,[(0,l.Uk)("postcss-pxtorem"),(0,l.Wm)(a)]),(0,l.Uk)(" 处理就行，但是有些神坑项目里面存在几套 "),r,(0,l.Uk)(" 标准")]),i])}]])}}]);