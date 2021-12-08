"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[934],{9225:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-744e35e2",path:"/vue/",title:"Vue",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"在父组件中监听子组件的生命周期钩子",slug:"在父组件中监听子组件的生命周期钩子",children:[]},{level:2,title:"在 methods 中使用 debounce / throttle",slug:"在-methods-中使用-debounce-throttle",children:[]}],filePathRelative:"vue/README.md",git:{updatedTime:1638971131e3}}},3095:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(6252);const p=(0,t.uE)('<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><h2 id="在父组件中监听子组件的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#在父组件中监听子组件的生命周期钩子" aria-hidden="true">#</a> 在父组件中监听子组件的生命周期钩子</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name"><span class="token namespace">@hook:</span>mounted</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChildMounted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">onChildMounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',3),e={href:"https://github.com/vuejs/vue/blob/dev/src/core/instance/lifecycle.js#L347",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("相关源码"),c=(0,t.uE)('<h2 id="在-methods-中使用-debounce-throttle" tabindex="-1"><a class="header-anchor" href="#在-methods-中使用-debounce-throttle" aria-hidden="true">#</a> 在 methods 中使用 debounce / throttle</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> debounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lodash-es&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    handleClick<span class="token operator">:</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',2),l={href:"https://cn.vuejs.org/v2/guide/migration.html#%E5%B8%A6%E6%9C%89-debounce-%E7%9A%84-v-model%E7%A7%BB%E9%99%A4",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("官网例子"),r={},i=(0,a(3744).Z)(r,[["render",function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[(0,t._)("a",e,[o,(0,t.Wm)(a)])]),c,(0,t._)("p",null,[(0,t._)("a",l,[u,(0,t.Wm)(a)])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);