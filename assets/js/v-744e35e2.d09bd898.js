"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[934],{9225:(s,n,l)=>{l.r(n),l.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-744e35e2","path":"/vue/","title":"Vue","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"在父组件中监听子组件的生命周期钩子","slug":"在父组件中监听子组件的生命周期钩子","link":"#在父组件中监听子组件的生命周期钩子","children":[]},{"level":2,"title":"在 methods 中使用 debounce / throttle","slug":"在-methods-中使用-debounce-throttle","link":"#在-methods-中使用-debounce-throttle","children":[]}],"git":{"updatedTime":1676563041000},"filePathRelative":"vue/README.md"}')},6810:(s,n,l)=>{l.r(n),l.d(n,{default:()=>c});var a=l(6808);const e=(0,a.uE)('<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><h2 id="在父组件中监听子组件的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#在父组件中监听子组件的生命周期钩子" aria-hidden="true">#</a> 在父组件中监听子组件的生命周期钩子</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#F44747;">child</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">@hook:mounted</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;onChildMounted&quot;</span><span style="color:#808080;">&gt;&lt;/</span><span style="color:#F44747;">child</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">methods:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onChildMounted</span><span style="color:#D4D4D4;">() {}</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),o={href:"https://github.com/vuejs/vue/blob/dev/src/core/instance/lifecycle.js#L347",target:"_blank",rel:"noopener noreferrer"},p=(0,a.uE)('<h2 id="在-methods-中使用-debounce-throttle" tabindex="-1"><a class="header-anchor" href="#在-methods-中使用-debounce-throttle" aria-hidden="true">#</a> 在 methods 中使用 debounce / throttle</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;container&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">@click</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;handleClick&quot;</span><span style="color:#808080;">&gt;&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">debounce</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;lodash-es&#39;</span></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">methods:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">handleClick:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">debounce</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {}, </span><span style="color:#B5CEA8;">500</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),t={href:"https://cn.vuejs.org/v2/guide/migration.html#%E5%B8%A6%E6%9C%89-debounce-%E7%9A%84-v-model%E7%A7%BB%E9%99%A4",target:"_blank",rel:"noopener noreferrer"},r={},c=(0,l(8580).Z)(r,[["render",function(s,n){const l=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[e,(0,a._)("p",null,[(0,a._)("a",o,[(0,a.Uk)("相关源码"),(0,a.Wm)(l)])]),p,(0,a._)("p",null,[(0,a._)("a",t,[(0,a.Uk)("官网例子"),(0,a.Wm)(l)])])])}]])}}]);