"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[857],{2303:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-5f5e8084",path:"/git/command.html",title:"Git 命令清单",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 新建 git 仓库",slug:"_1-新建-git-仓库",children:[]},{level:2,title:"2. 配置",slug:"_2-配置",children:[]},{level:2,title:"3. 向暂存区添加 / 删除文件",slug:"_3-向暂存区添加-删除文件",children:[]},{level:2,title:"4. 代码提交",slug:"_4-代码提交",children:[]},{level:2,title:"5. 分支",slug:"_5-分支",children:[]},{level:2,title:"6. 标签",slug:"_6-标签",children:[]},{level:2,title:"7. 查看信息",slug:"_7-查看信息",children:[]},{level:2,title:"8. 提交",slug:"_8-提交",children:[]},{level:2,title:"9. 撤销",slug:"_9-撤销",children:[]},{level:2,title:"10. 日志",slug:"_10-日志",children:[]}],filePathRelative:"git/command.md",git:{updatedTime:163895798e4}}},9716:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var p=a(6252);const e=(0,p.uE)('<h1 id="git-命令清单" tabindex="-1"><a class="header-anchor" href="#git-命令清单" aria-hidden="true">#</a> Git 命令清单</h1><h2 id="_1-新建-git-仓库" tabindex="-1"><a class="header-anchor" href="#_1-新建-git-仓库" aria-hidden="true">#</a> 1. 新建 git 仓库</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 在当前目录新建一个 Git 仓库</span>\n<span class="token function">git</span> init\n\n<span class="token comment"># 新建一个目录，将其初始化为 Git 仓库</span>\n<span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>\n\n<span class="token comment"># 下载一个项目和它的整个代码历史</span>\n<span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 显示当前的Git配置</span>\n<span class="token function">git</span> config --list\n\n<span class="token comment"># 设置提交代码时的用户信息</span>\n<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;名称&quot;</span>\n<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;邮箱地址&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_3-向暂存区添加-删除文件" tabindex="-1"><a class="header-anchor" href="#_3-向暂存区添加-删除文件" aria-hidden="true">#</a> 3. 向暂存区添加 / 删除文件</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 添加指定文件或指定目录到暂存区</span>\n<span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>文件路径 / 目录路径<span class="token punctuation">]</span>\n\n<span class="token comment"># 添加所有文件到暂存区</span>\n<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>\n\n<span class="token comment"># 停止追踪指定文件并保留在工作区</span>\n<span class="token function">git</span> <span class="token function">rm</span> --cached <span class="token punctuation">[</span>文件路径<span class="token punctuation">]</span>\n\n<span class="token comment"># 删除工作区文件并且提交到暂存区</span>\n<span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>文件路径<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_4-代码提交" tabindex="-1"><a class="header-anchor" href="#_4-代码提交" aria-hidden="true">#</a> 4. 代码提交</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 提交暂存区到仓库区</span>\n<span class="token function">git</span> commit -m <span class="token punctuation">[</span>提交信息<span class="token punctuation">]</span>\n\n<span class="token comment"># 替换上一次 commit（如无代码改动，就重写上一次 commit 的提交信息）</span>\n<span class="token function">git</span> commit --amend -m <span class="token punctuation">[</span>提交信息<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_5-分支" tabindex="-1"><a class="header-anchor" href="#_5-分支" aria-hidden="true">#</a> 5. 分支</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 列出所有本地分支</span>\n<span class="token function">git</span> branch\n\n<span class="token comment"># 列出所有远程分支</span>\n<span class="token function">git</span> branch -r\n\n<span class="token comment"># 列出所有本地分支和远程分支</span>\n<span class="token function">git</span> branch -a\n\n<span class="token comment"># 新建一个分支，但依然停留在当前分支</span>\n<span class="token function">git</span> branch <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>\n\n<span class="token comment"># 新建一个分支，并切换到该分支</span>\n<span class="token function">git</span> checkout -b <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>\n\n<span class="token comment"># 新建一个分支，指向指定commit</span>\n<span class="token function">git</span> branch <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>\n\n<span class="token comment"># 新建一个分支，与指定的远程分支建立追踪关系</span>\n<span class="token function">git</span> branch --track <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span> <span class="token punctuation">[</span>远程分支名<span class="token punctuation">]</span>\n\n<span class="token comment"># 新建一个空白分支</span>\n<span class="token function">git</span> checkout --orphan <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>\n\n<span class="token comment"># 切换到指定分支，并更新工作区</span>\n<span class="token function">git</span> checkout <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>\n\n<span class="token comment"># 切换到上一个分支</span>\n<span class="token function">git</span> checkout -\n\n<span class="token comment"># 合并指定分支到当前分支</span>\n<span class="token function">git</span> merge <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>\n\n<span class="token comment"># 删除分支</span>\n<span class="token function">git</span> branch -d <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>\n\n<span class="token comment"># 删除远程分支</span>\n<span class="token function">git</span> push origin --delete <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>\n<span class="token function">git</span> branch -dr <span class="token punctuation">[</span>remote/分支名<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_6-标签" tabindex="-1"><a class="header-anchor" href="#_6-标签" aria-hidden="true">#</a> 6. 标签</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 列出所有 tag</span>\n<span class="token function">git</span> tag\n\n<span class="token comment"># 根据当前 commit 创建一个 tag</span>\n<span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>\n\n<span class="token comment"># 根据指定 commit 创建一个 tag</span>\n<span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>\n\n<span class="token comment"># 删除本地 tag</span>\n<span class="token function">git</span> tag -d <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>\n\n<span class="token comment"># 删除远程 tag</span>\n<span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>\n\n<span class="token comment"># 查看 tag 信息</span>\n<span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>\n\n<span class="token comment"># 提交指定tag</span>\n<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>\n\n<span class="token comment"># 提交所有tag</span>\n<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --tags\n\n<span class="token comment"># 新建一个分支，指向某个tag</span>\n<span class="token function">git</span> checkout -b <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_7-查看信息" tabindex="-1"><a class="header-anchor" href="#_7-查看信息" aria-hidden="true">#</a> 7. 查看信息</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 显示变更的文件</span>\n<span class="token function">git</span> status\n\n<span class="token comment"># 显示当前分支的版本历史</span>\n<span class="token function">git</span> log\n\n<span class="token comment"># 显示commit历史，以及每次commit发生变更的文件</span>\n<span class="token function">git</span> log --stat\n\n<span class="token comment"># 搜索提交历史，根据关键词</span>\n<span class="token function">git</span> log -S <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span>\n\n<span class="token comment"># 显示某个文件的版本历史，包括文件改名</span>\n<span class="token function">git</span> log --follow <span class="token punctuation">[</span>文件路径<span class="token punctuation">]</span>\n<span class="token function">git</span> whatchanged <span class="token punctuation">[</span>文件路径<span class="token punctuation">]</span>\n\n<span class="token comment"># 显示指定文件相关的每一次diff</span>\n<span class="token function">git</span> log -p <span class="token punctuation">[</span>文件路径<span class="token punctuation">]</span>\n\n<span class="token comment"># 显示过去5次提交</span>\n<span class="token function">git</span> log -5 --pretty --oneline\n\n<span class="token comment"># 显示所有提交过的用户，按提交次数排序</span>\n<span class="token function">git</span> shortlog -sn\n\n<span class="token comment"># 显示指定文件是什么人在什么时间修改过</span>\n<span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>\n\n<span class="token comment"># 显示暂存区和工作区的差异</span>\n<span class="token function">git</span> <span class="token function">diff</span>\n\n<span class="token comment"># 显示工作区与当前分支最新 commit 之间的差异</span>\n<span class="token function">git</span> <span class="token function">diff</span> HEAD\n\n<span class="token comment"># 显示今天你写了多少行代码</span>\n<span class="token function">git</span> <span class="token function">diff</span> --shortstat <span class="token string">&quot;@{0 day ago}&quot;</span>\n\n<span class="token comment"># 显示当前分支的最近几次提交</span>\n<span class="token function">git</span> reflog\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_8-提交" tabindex="-1"><a class="header-anchor" href="#_8-提交" aria-hidden="true">#</a> 8. 提交</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 下载远程仓库的所有变动</span>\n<span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>\n\n<span class="token comment"># 显示所有远程仓库</span>\n<span class="token function">git</span> remote -v\n\n<span class="token comment"># 显示某个远程仓库的信息</span>\n<span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>\n\n<span class="token comment"># 增加一个新的远程仓库，并命名</span>\n<span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>\n\n<span class="token comment"># 取回远程仓库的变化，并与本地分支合并</span>\n<span class="token function">git</span> pull <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>\n\n<span class="token comment"># 上传本地指定分支到远程仓库</span>\n<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>\n\n<span class="token comment"># 强行推送当前分支到远程仓库，即使有冲突</span>\n<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --force\n\n<span class="token comment"># 推送所有分支到远程仓库</span>\n<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --all\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_9-撤销" tabindex="-1"><a class="header-anchor" href="#_9-撤销" aria-hidden="true">#</a> 9. 撤销</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变</span>\n<span class="token function">git</span> reset <span class="token punctuation">[</span>文件路径<span class="token punctuation">]</span>\n\n<span class="token comment"># 重置暂存区与工作区，与上一次 commit 保持一致</span>\n<span class="token function">git</span> reset --hard\n\n<span class="token comment"># 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变</span>\n<span class="token function">git</span> reset <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>\n\n<span class="token comment"># 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致</span>\n<span class="token function">git</span> reset --hard <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>\n\n<span class="token comment"># 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变</span>\n<span class="token function">git</span> reset --keep <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>\n\n<span class="token comment"># 新建一个 commit，用来撤销指定 commit 后者的所有变化都将被前者抵消，并且应用到当前分支</span>\n<span class="token function">git</span> revert <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>\n\n<span class="token comment"># 暂存操作</span>\n<span class="token comment"># 只暂存被追踪的文件</span>\n<span class="token function">git</span> stash\n<span class="token comment"># 暂存所有文件并添加说明</span>\n<span class="token function">git</span> stash <span class="token punctuation">[</span>save <span class="token string">&#39;说明信息&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-u<span class="token punctuation">]</span>\n<span class="token comment"># 查看 stash 列表</span>\n<span class="token function">git</span> stash list\n<span class="token comment"># 取出最近一次的 stash</span>\n<span class="token function">git</span> stash apply\n<span class="token comment"># 取出 stash 列表里对应数字的暂存</span>\n<span class="token function">git</span> stash apply 数字\n<span class="token comment"># 取出并删除最近一次的 stash</span>\n<span class="token function">git</span> stash pop\n<span class="token comment"># 清空所有 stash</span>\n<span class="token function">git</span> stash <span class="token function">clear</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="_10-日志" tabindex="-1"><a class="header-anchor" href="#_10-日志" aria-hidden="true">#</a> 10. 日志</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 查看提交过的完整日志</span>\n<span class="token function">git</span> log\n\n<span class="token comment"># 查看精简日志（精简版本号和提交信息）</span>\n<span class="token function">git</span> log --oneline\n\n<span class="token comment"># 查看精简日志（完整版本号和提交信息）</span>\n<span class="token function">git</span> log --pretty<span class="token operator">=</span>oneline\n\n<span class="token comment"># 查看所有分支的所有操作记录（包括被删除的 commit 记录和 reset 操作）</span>\n<span class="token function">git</span> reflog\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',21),t={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("参考地址：阮一峰 -- 常用 Git 命令清单"),l={},o=(0,a(3744).Z)(l,[["render",function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,(0,p._)("p",null,[(0,p._)("a",t,[c,(0,p.Wm)(a)])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);