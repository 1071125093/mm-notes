import{_ as s,o as n,g as a,R as l}from"./chunks/framework.ce5d0843.js";const F=JSON.parse('{"title":"在 Github Actions 环境变量中传递数组或对象","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-28.md","lastUpdated":null}'),e={name:"daily-notes/issue-28.md"},p=l(`<h1 id="在-github-actions-环境变量中传递数组或对象" tabindex="-1">在 Github Actions 环境变量中传递数组或对象 <a class="header-anchor" href="#在-github-actions-环境变量中传递数组或对象" aria-label="Permalink to &quot;在 Github Actions 环境变量中传递数组或对象&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/28" target="_blank" rel="noreferrer">在 Github Actions 环境变量中传递数组或对象 | GitHub</a></p></div><p>大多数常见下我们只需要传递简单的字符串即可，但是当字段越来越多的时候或者一些特殊场景下，使用对象或数组更好</p><p>通过研究，我们可以通过配置 <code>json</code> 数据 + 环境变量输出到文件来实现数组或对象的传递</p><h2 id="配置-secrets" tabindex="-1">配置 <code>Secrets</code> <a class="header-anchor" href="#配置-secrets" aria-label="Permalink to &quot;配置 \`Secrets\`&quot;">​</a></h2><p><code>Secrets</code> 中的 <code>Name</code> 和 <code>Value</code> 示例格式如下：</p><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>JSON_DATA</td><td><code>json</code> 数据</td></tr></tbody></table><blockquote><p><code>json</code> 数据内容如下</p></blockquote><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">maomao</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">maomao1996</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>需要注意 <code>json</code> 格式。在填写之前建议使用 <a href="https://www.bejson.com/" target="_blank" rel="noreferrer">json 校验工具</a>进行校验。</li></ul><h2 id="在-github-workflows-print-env-yml-配置文件中使用环境变量" tabindex="-1">在 <code>.github/workflows/print-env.yml</code> 配置文件中使用环境变量 <a class="header-anchor" href="#在-github-workflows-print-env-yml-配置文件中使用环境变量" aria-label="Permalink to &quot;在 \`.github/workflows/print-env.yml\` 配置文件中使用环境变量&quot;">​</a></h2><div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Print Env</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bot</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Checkout</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Run Script</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 设置环境变量</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">JSON_DATA</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.JSON_DATA }}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 先将环境变量内容输出到文件，然后执行脚本</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">          echo &quot;$JSON_DATA&quot; &gt; ./config.json</span></span>
<span class="line"><span style="color:#C3E88D;">          npm run install &amp;&amp; node index.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><a href="https://docs.github.com/cn/actions/learn-github-actions/expressions" target="_blank" rel="noreferrer">GitHub Actions 表达式语法</a></p><h2 id="在-index-js-中引入-json-文件" tabindex="-1">在 index.js 中引入 json 文件 <a class="header-anchor" href="#在-index-js-中引入-json-文件" aria-label="Permalink to &quot;在 index.js 中引入 json 文件&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./config.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,15),o=[p];function t(r,c,i,D,y,b){return n(),a("div",null,o)}const d=s(e,[["render",t]]);export{F as __pageData,d as default};