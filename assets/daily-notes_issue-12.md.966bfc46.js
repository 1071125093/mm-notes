import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.6198fd23.js";const C=JSON.parse('{"title":"使用 URLSearchParams 解析 URL 的查询字符串","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-12.md","lastUpdated":null}'),p={name:"daily-notes/issue-12.md"},o=l(`<h1 id="使用-urlsearchparams-解析-url-的查询字符串" tabindex="-1">使用 URLSearchParams 解析 URL 的查询字符串 <a class="header-anchor" href="#使用-urlsearchparams-解析-url-的查询字符串" aria-label="Permalink to &quot;使用 URLSearchParams 解析 URL 的查询字符串&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/12" target="_blank" rel="noreferrer">使用 URLSearchParams 解析 URL 的查询字符串 | GitHub</a></p></div><p><code>URLSearchParams</code> 接口定义了一些实用的方法来处理 <code>URL</code> 的查询字符串</p><h2 id="语法和使用" tabindex="-1">语法和使用 <a class="header-anchor" href="#语法和使用" aria-label="Permalink to &quot;语法和使用&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// const url = &#39;https://github.com/search?o=desc&amp;q=URLSearchParams&amp;s=stars&amp;type=Repositories&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">o=desc&amp;q=URLSearchParams&amp;s=stars&amp;type=Repositories</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 实例化</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> searchParams </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URLSearchParams</span><span style="color:#A6ACCD;">(url)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// toString 返回搜索参数组成的字符串并进行编码</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// o=desc&amp;q=URLSearchParams&amp;s=stars&amp;type=Repositories</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取指定搜索参数的第一个值</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">q</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;URLSearchParams&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maomao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取指定搜索参数的所有值，返回是一个数组。</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAll</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// [&quot;Repositories&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAll</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maomao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否存在指定的搜索参数</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">q</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maomao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 插入一个新搜索参数，添加相同 key 不会替换之前的</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">year</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1996</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">year</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1996</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;o=desc&amp;q=URLSearchParams&amp;s=stars&amp;type=Repositories&amp;year=1996&amp;year=1996&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置和搜索参数相关联的值，如果之前存在将会删除</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maomao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;maomao&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maomao1996</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;maomao1996&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 删除指定名称的所有搜索参数</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">year</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;o=desc&amp;q=URLSearchParams&amp;s=stars&amp;type=Repositories&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将键/值对进行排序并返回 undefined 排序顺序是根据键的 Unicode</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;o=desc&amp;q=URLSearchParams&amp;s=stars&amp;type=Repositories&amp;a=1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;a=1&amp;o=desc&amp;q=URLSearchParams&amp;s=stars&amp;type=Repositories&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回一个 iterator，遍历器允许遍历对象中包含的所有键</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#A6ACCD;">()) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回一个 iterator，遍历器允许遍历对象中包含的所有值</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">values</span><span style="color:#A6ACCD;">()) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回一个 iterator，遍历器允许遍历对象中包含的所有值</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#A6ACCD;">()) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h3 id="冷知识" tabindex="-1">冷知识 <a class="header-anchor" href="#冷知识" aria-label="Permalink to &quot;冷知识&quot;">​</a></h3><p>query 上的 <code>&quot;&quot;</code> key</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> searchParams </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URLSearchParams</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">?=maomao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">searchParams</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;maomao&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams" target="_blank" rel="noreferrer">MDN 详细介绍点这里</a></p><h2 id="相关-polyfill" tabindex="-1">相关 polyfill <a class="header-anchor" href="#相关-polyfill" aria-label="Permalink to &quot;相关 polyfill&quot;">​</a></h2><ul><li><a href="https://github.com/zloirock/core-js" target="_blank" rel="noreferrer">core-js</a></li></ul><p><code>core-js@2.x</code> 未包含 <code>URLSearchParams</code></p><ul><li><a href="https://github.com/jerrybendy/url-search-params-polyfill" target="_blank" rel="noreferrer">url-search-params-polyfill</a></li></ul>`,13),e=[o];function r(c,t,y,D,i,A){return a(),n("div",null,e)}const m=s(p,[["render",r]]);export{C as __pageData,m as default};
