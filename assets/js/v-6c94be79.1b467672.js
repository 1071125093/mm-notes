"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[103],{6255:(e,l,n)=>{n.r(l),n.d(l,{data:()=>a});const a=JSON.parse('{"key":"v-6c94be79","path":"/software/mac.html","title":"Mac 平台","lang":"zh-CN","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"Homebrew","slug":"homebrew","link":"#homebrew","children":[]},{"level":2,"title":"iTerm2","slug":"iterm2","link":"#iterm2","children":[{"level":3,"title":"iTerm2 常用快捷键","slug":"iterm2-常用快捷键","link":"#iterm2-常用快捷键","children":[]},{"level":3,"title":"iTerm2 配色方案","slug":"iterm2-配色方案","link":"#iterm2-配色方案","children":[]},{"level":3,"title":"Fig","slug":"fig","link":"#fig","children":[]}]},{"level":2,"title":"效率神器 Alfred","slug":"效率神器-alfred","link":"#效率神器-alfred","children":[]},{"level":2,"title":"Mac 微信功能拓展","slug":"mac-微信功能拓展","link":"#mac-微信功能拓展","children":[]},{"level":2,"title":"IINA","slug":"iina","link":"#iina","children":[]},{"level":2,"title":"MacZip","slug":"maczip","link":"#maczip","children":[]},{"level":2,"title":"腾讯柠檬清理","slug":"腾讯柠檬清理","link":"#腾讯柠檬清理","children":[]},{"level":2,"title":"截图神器 IShot","slug":"截图神器-ishot","link":"#截图神器-ishot","children":[]},{"level":2,"title":"超级右键 iRightMouse","slug":"超级右键-irightmouse","link":"#超级右键-irightmouse","children":[]},{"level":2,"title":"翻译软件 Bob","slug":"翻译软件-bob","link":"#翻译软件-bob","children":[]},{"level":2,"title":"菜单栏图标管理 Hidden Bar","slug":"菜单栏图标管理-hidden-bar","link":"#菜单栏图标管理-hidden-bar","children":[]},{"level":2,"title":"音量管理 BackgroundMusic","slug":"音量管理-backgroundmusic","link":"#音量管理-backgroundmusic","children":[]},{"level":2,"title":"窗口管理神器 Rectangle","slug":"窗口管理神器-rectangle","link":"#窗口管理神器-rectangle","children":[]},{"level":2,"title":"应用快捷启动神器 Thor Launcher","slug":"应用快捷启动神器-thor-launcher","link":"#应用快捷启动神器-thor-launcher","children":[]},{"level":2,"title":"快捷键提示 CheatSheet","slug":"快捷键提示-cheatsheet","link":"#快捷键提示-cheatsheet","children":[]},{"level":2,"title":"显示器控制 MonitorControl","slug":"显示器控制-monitorcontrol","link":"#显示器控制-monitorcontrol","children":[]}],"git":{"updatedTime":1676563041000},"filePathRelative":"software/mac.md"}')},7547:(e,l,n)=>{n.r(l),n.d(l,{default:()=>ge});var a=n(6808);const s=(0,a.uE)('<h1 id="mac-平台" tabindex="-1"><a class="header-anchor" href="#mac-平台" aria-hidden="true">#</a> Mac 平台</h1><h2 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew" aria-hidden="true">#</a> Homebrew</h2><p>Mac 的软件包管理工具，用于安装、卸载和管理各种软件，包括命令行工具、库和应用程序等</p><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">/bin/bash </span><span style="color:#CE9178;">-c</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 国内源完整版安装</span></span>\n<span class="line"><span style="color:#D4D4D4;">/bin/zsh </span><span style="color:#CE9178;">-c</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;</span></span>\n<span class="line"><span style="color:#6A9955;"># 极速安装（update 功能需要命令修复）</span></span>\n<span class="line"><span style="color:#D4D4D4;">/bin/zsh </span><span style="color:#CE9178;">-c</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">speed</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),t={href:"https://gitee.com/cunkai/HomebrewCN",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/ineo6/homebrew-install",target:"_blank",rel:"noopener noreferrer"},i=(0,a.uE)('<p>常用命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 更新 Homebrew</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">update</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 安装指定的软件包</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">packag</span><span style="color:#D4D4D4;">e&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 卸载指定的软件包</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">uninstall</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">packag</span><span style="color:#D4D4D4;">e&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 搜索可用的软件包，并显示匹配的结果</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">search</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">quer</span><span style="color:#D4D4D4;">y&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 列出已安装的软件包</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">list</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看可以升级的软件包</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">outdated</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 升级所有软件包到最新版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">upgrade</span></span>\n<span class="line"><span style="color:#6A9955;"># 升级指定的软件包到最新版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">upgrade</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">packag</span><span style="color:#D4D4D4;">e&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看指定软件包的信息，包括版本号、安装路径、依赖关系等</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">info</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">packag</span><span style="color:#D4D4D4;">e&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 清理 Homebrew 临时文件和旧版本的软件包</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">cleanup</span></span>\n<span class="line"><span style="color:#6A9955;"># 查看可以清理的 Homebrew 临时文件和旧版本的软件包</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">cleanup</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">-n</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),o={href:"https://github.com/Homebrew",target:"_blank",rel:"noopener noreferrer"},p={href:"https://brew.sh/index_zh-cn",target:"_blank",rel:"noopener noreferrer"},c=(0,a.uE)('<h2 id="iterm2" tabindex="-1"><a class="header-anchor" href="#iterm2" aria-hidden="true">#</a> iTerm2</h2><p>Mac 上最好用的终端</p><ol><li>支持子窗口</li><li>自动补全</li><li>查看粘贴历史</li><li>自定义配置项</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 查看所有的 shell</span></span>\n<span class="line"><span style="color:#D4D4D4;">cat </span><span style="color:#CE9178;">/etc/shells</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看当前窗口使用的 shell</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$SHELL</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看系统用户默认的 shell</span></span>\n<span class="line"><span style="color:#D4D4D4;">cat </span><span style="color:#CE9178;">/etc/passwd</span><span style="color:#D4D4D4;"> | grep </span><span style="color:#CE9178;">sh</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 切换系统默认 shell</span></span>\n<span class="line"><span style="color:#D4D4D4;">chsh </span><span style="color:#CE9178;">-s</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/bin/zsh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),d={href:"https://github.com/gnachman/iTerm2",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.iterm2.com",target:"_blank",rel:"noopener noreferrer"},u=(0,a.uE)('<h3 id="iterm2-常用快捷键" tabindex="-1"><a class="header-anchor" href="#iterm2-常用快捷键" aria-hidden="true">#</a> iTerm2 常用快捷键</h3><table><thead><tr><th style="text-align:left;">操作</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">⌘ + N</td><td style="text-align:left;">新建窗口</td></tr><tr><td style="text-align:left;">⌘ + T</td><td style="text-align:left;">新建 Tab</td></tr><tr><td style="text-align:left;">⌘ + W</td><td style="text-align:left;">关闭 Tab / 窗口</td></tr><tr><td style="text-align:left;">⌘ + ←</td><td style="text-align:left;">切换到上一个 Tab</td></tr><tr><td style="text-align:left;">⌘ + →</td><td style="text-align:left;">切换到下一个 Tab</td></tr><tr><td style="text-align:left;">⌘ + 数字</td><td style="text-align:left;">快速切换 Tab</td></tr><tr><td style="text-align:left;">⌘ + D</td><td style="text-align:left;">垂直分屏</td></tr><tr><td style="text-align:left;">⌘ + Shift + D</td><td style="text-align:left;">水平分屏</td></tr><tr><td style="text-align:left;">⌘ + Enter</td><td style="text-align:left;">切换全屏</td></tr><tr><td style="text-align:left;">⌘ + F</td><td style="text-align:left;">查找</td></tr><tr><td style="text-align:left;">⌘ + /</td><td style="text-align:left;">查看光标的位置</td></tr><tr><td style="text-align:left;">Ctrl + P</td><td style="text-align:left;">上一条命令</td></tr><tr><td style="text-align:left;">Ctrl + R</td><td style="text-align:left;">搜索命令历史</td></tr><tr><td style="text-align:left;">Ctrl + L</td><td style="text-align:left;">清屏</td></tr><tr><td style="text-align:left;">Ctrl + U</td><td style="text-align:left;">清除当前行</td></tr><tr><td style="text-align:left;">Ctrl + W</td><td style="text-align:left;">删除光标前面的一个单词</td></tr><tr><td style="text-align:left;">Ctrl + K</td><td style="text-align:left;">删除光标后面的所有字符</td></tr><tr><td style="text-align:left;">Ctrl + A</td><td style="text-align:left;">移动光标到行首</td></tr><tr><td style="text-align:left;">Ctrl + E</td><td style="text-align:left;">移动光标到行尾</td></tr></tbody></table><h3 id="iterm2-配色方案" tabindex="-1"><a class="header-anchor" href="#iterm2-配色方案" aria-hidden="true">#</a> iTerm2 配色方案</h3>',3),b={href:"https://github.com/mbadolato/iTerm2-Color-Schemes",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/MartinSeeler/iterm2-material-design",target:"_blank",rel:"noopener noreferrer"},g=(0,a.uE)('<h3 id="fig" tabindex="-1"><a class="header-anchor" href="#fig" aria-hidden="true">#</a> Fig</h3><p>终端自动补全命令提示工具</p><ul><li>支持近 300 多种 <code>CLI</code> 工具的补全提示，如 <code>cd git brew npm yarn</code></li><li>支持插件</li><li>支持自定义补全规范</li></ul><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">--cask</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">fig</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>vscode</code> 中使用，需修改 <code>editor.accessibilitySupport</code> 为 <code>&quot;off&quot;</code></p>',6),_={href:"https://github.com/withfig/autocomplete",target:"_blank",rel:"noopener noreferrer"},y={href:"https://fig.io/",target:"_blank",rel:"noopener noreferrer"},v=(0,a._)("h2",{id:"效率神器-alfred",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#效率神器-alfred","aria-hidden":"true"},"#"),(0,a.Uk)(" 效率神器 Alfred")],-1),f=(0,a._)("ol",null,[(0,a._)("li",null,"定位文件、打开文件"),(0,a._)("li",null,"打开网址、书签、App"),(0,a._)("li",null,"自定义搜索"),(0,a._)("li",null,"查看剪贴板历史"),(0,a._)("li",null,[(0,a.Uk)("计算器、查词典、运行 "),(0,a._)("code",null,"shell"),(0,a.Uk)(" 命令")])],-1),k={href:"https://www.alfredapp.com",target:"_blank",rel:"noopener noreferrer"},D=(0,a.uE)('<h2 id="mac-微信功能拓展" tabindex="-1"><a class="header-anchor" href="#mac-微信功能拓展" aria-hidden="true">#</a> Mac 微信功能拓展</h2><ol><li>消息防撤回</li><li>免认证登录与多开</li><li>消息处理增强(表情导出、二维码识别等)</li></ol><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 安装 WeChatTweak-CLI</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">sunnyyoung/repo/wechattweak-cli</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 安装 Tweak</span></span>\n<span class="line"><span style="color:#D4D4D4;">sudo </span><span style="color:#CE9178;">wechattweak-cli</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">--install</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 卸载</span></span>\n<span class="line"><span style="color:#D4D4D4;">sudo </span><span style="color:#CE9178;">wechattweak-cli</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">--uninstall</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),E={href:"https://github.com/Sunnyyoung/WeChatTweak-macOS",target:"_blank",rel:"noopener noreferrer"},w=(0,a._)("h2",{id:"iina",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#iina","aria-hidden":"true"},"#"),(0,a.Uk)(" IINA")],-1),C=(0,a._)("p",null,"视频播放器",-1),x=(0,a._)("ol",null,[(0,a._)("li",null,"界面简洁、美观，契合 macOS 设计风格"),(0,a._)("li",null,"功能强大，设置以播放体验为中心"),(0,a._)("li",null,"支持鼠标和触控板手势"),(0,a._)("li",null,"在线字幕、缩略图预览、画中画等")],-1),U={href:"https://github.com/iina/iina",target:"_blank",rel:"noopener noreferrer"},A={href:"https://iina.io/",target:"_blank",rel:"noopener noreferrer"},W=(0,a._)("h2",{id:"maczip",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#maczip","aria-hidden":"true"},"#"),(0,a.Uk)(" MacZip")],-1),S=(0,a._)("p",null,"专为 macOS 而设计的压缩软件",-1),T=(0,a._)("ol",null,[(0,a._)("li",null,"界面简洁、美观，完美兼容 Mojave"),(0,a._)("li",null,"支持超过 20 种压缩格式"),(0,a._)("li",null,"批量文件加密")],-1),M={href:"https://ezip.awehunt.com",target:"_blank",rel:"noopener noreferrer"},B=(0,a._)("h2",{id:"腾讯柠檬清理",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#腾讯柠檬清理","aria-hidden":"true"},"#"),(0,a.Uk)(" 腾讯柠檬清理")],-1),H=(0,a._)("ol",null,[(0,a._)("li",null,"界面简洁清新"),(0,a._)("li",null,"支持垃圾清理、文件查重、软件卸载"),(0,a._)("li",null,"支持微信、QQ、XCode、Sketch 深度扫描清理")],-1),q={href:"https://lemon.qq.com",target:"_blank",rel:"noopener noreferrer"},L=(0,a._)("h2",{id:"截图神器-ishot",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#截图神器-ishot","aria-hidden":"true"},"#"),(0,a.Uk)(" 截图神器 IShot")],-1),z=(0,a._)("ol",null,[(0,a._)("li",null,"区域截图、窗口截图、多窗口截图、延时截图、长截图、滚动截图"),(0,a._)("li",null,"快速标注(矩形、圆形、横线、箭头、画笔、马赛克、文字标记、序号标签、局部高亮)"),(0,a._)("li",null,"支持截图导圆角、阴影调节"),(0,a._)("li",null,"贴图、取色")],-1),G={href:"https://www.better365.cn/ishot.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://apps.apple.com/cn/app/ishot-%E6%88%AA%E5%9B%BE-%E5%BD%95%E5%B1%8F-2020%E5%85%A8%E6%96%B0%E9%AB%98%E5%BA%A6/id1485844094",target:"_blank",rel:"noopener noreferrer"},N=(0,a._)("h2",{id:"超级右键-irightmouse",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#超级右键-irightmouse","aria-hidden":"true"},"#"),(0,a.Uk)(" 超级右键 iRightMouse")],-1),R=(0,a._)("ol",null,[(0,a._)("li",null,"多种格式的右键新建文件"),(0,a._)("li",null,"快速移动文件"),(0,a._)("li",null,"常用目录设置"),(0,a._)("li",null,"快速打开终端、vscode 等")],-1),F={href:"https://www.better365.cn/irightmouse.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://apps.apple.com/cn/app/irightmouse-%E8%B6%85%E7%BA%A7%E5%8F%B3%E9%94%AE/id1497428978",target:"_blank",rel:"noopener noreferrer"},$=(0,a._)("h2",{id:"翻译软件-bob",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#翻译软件-bob","aria-hidden":"true"},"#"),(0,a.Uk)(" 翻译软件 Bob")],-1),Z=(0,a._)("ol",null,[(0,a._)("li",null,"支持划词、截图、输入翻译"),(0,a._)("li",null,"支持翻译多开"),(0,a._)("li",null,"自动识别语种"),(0,a._)("li",null,"可自定义插件")],-1),P={href:"https://github.com/ripperhe/Bob",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://ripperhe.gitee.io/bob",target:"_blank",rel:"noopener noreferrer"},j=(0,a._)("h2",{id:"菜单栏图标管理-hidden-bar",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#菜单栏图标管理-hidden-bar","aria-hidden":"true"},"#"),(0,a.Uk)(" 菜单栏图标管理 Hidden Bar")],-1),J=(0,a._)("ol",null,[(0,a._)("li",null,"简单易用、支持全局快捷键"),(0,a._)("li",null,"免费开源、支持中文")],-1),K={href:"https://github.com/dwarvesf/hidden",target:"_blank",rel:"noopener noreferrer"},X={href:"https://apps.apple.com/cn/app/hidden-bar/id1452453066",target:"_blank",rel:"noopener noreferrer"},V=(0,a._)("h2",{id:"音量管理-backgroundmusic",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#音量管理-backgroundmusic","aria-hidden":"true"},"#"),(0,a.Uk)(" 音量管理 BackgroundMusic")],-1),Y=(0,a._)("ol",null,[(0,a._)("li",null,"背景音乐管理"),(0,a._)("li",null,"设置各个应用程序的音量"),(0,a._)("li",null,"录制系统音频")],-1),ee={href:"https://github.com/kyleneideck/BackgroundMusic",target:"_blank",rel:"noopener noreferrer"},le=(0,a._)("h2",{id:"窗口管理神器-rectangle",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#窗口管理神器-rectangle","aria-hidden":"true"},"#"),(0,a.Uk)(" 窗口管理神器 Rectangle")],-1),ne=(0,a._)("p",null,"比系统分屏更强大，支持快捷键分屏、支持三个及以上分屏",-1),ae={href:"https://github.com/rxhanson/Rectangle",target:"_blank",rel:"noopener noreferrer"},se={href:"https://rectangleapp.com/",target:"_blank",rel:"noopener noreferrer"},te=(0,a._)("h2",{id:"应用快捷启动神器-thor-launcher",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#应用快捷启动神器-thor-launcher","aria-hidden":"true"},"#"),(0,a.Uk)(" 应用快捷启动神器 Thor Launcher")],-1),re=(0,a._)("p",null,"通过设定快捷键，快速在应用之间切换",-1),ie={href:"https://apps.apple.com/cn/app/thor-launcher/id1120999687",target:"_blank",rel:"noopener noreferrer"},oe=(0,a._)("h2",{id:"快捷键提示-cheatsheet",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#快捷键提示-cheatsheet","aria-hidden":"true"},"#"),(0,a.Uk)(" 快捷键提示 CheatSheet")],-1),pe=(0,a._)("p",null,[(0,a.Uk)("长按 "),(0,a._)("code",null,"Command"),(0,a.Uk)(" 即可查看当前应用的快捷键提示")],-1),ce={href:"https://www.ergonis.com/products/keycue/",target:"_blank",rel:"noopener noreferrer"},de={href:"https://github.com/maomao1996/software-backup/tree/main/mac/CheatSheet",target:"_blank",rel:"noopener noreferrer"},he=(0,a._)("h2",{id:"显示器控制-monitorcontrol",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#显示器控制-monitorcontrol","aria-hidden":"true"},"#"),(0,a.Uk)(" 显示器控制 MonitorControl")],-1),ue=(0,a._)("ol",null,[(0,a._)("li",null,"控制外接显示器的亮度和音量"),(0,a._)("li",null,"支持键盘控制亮度和音量")],-1),be={href:"https://github.com/MonitorControl/MonitorControl",target:"_blank",rel:"noopener noreferrer"},me={},ge=(0,n(8580).Z)(me,[["render",function(e,l){const n=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[s,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("安装教程 "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",t,[(0,a.Uk)("Homebrew 国内安装脚本"),(0,a.Wm)(n)])]),(0,a._)("li",null,[(0,a._)("a",r,[(0,a.Uk)("Homebrew 安装教程"),(0,a.Wm)(n)])])])])]),i,(0,a._)("p",null,[(0,a._)("a",o,[(0,a.Uk)("Github"),(0,a.Wm)(n)]),(0,a._)("a",p,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)])]),c,(0,a._)("p",null,[(0,a._)("a",d,[(0,a.Uk)("Github"),(0,a.Wm)(n)]),(0,a._)("a",h,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)])]),u,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",b,[(0,a.Uk)("iTerm2-Color-Schemes"),(0,a.Wm)(n)])]),(0,a._)("li",null,[(0,a._)("a",m,[(0,a.Uk)("iTerm2-Material-Design"),(0,a.Wm)(n)])])]),g,(0,a._)("p",null,[(0,a._)("a",_,[(0,a.Uk)("Github"),(0,a.Wm)(n)]),(0,a._)("a",y,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)])]),v,f,(0,a._)("p",null,[(0,a._)("a",k,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)])]),D,(0,a._)("p",null,[(0,a._)("a",E,[(0,a.Uk)("Github"),(0,a.Wm)(n)])]),w,C,x,(0,a._)("p",null,[(0,a._)("a",U,[(0,a.Uk)("Github"),(0,a.Wm)(n)]),(0,a._)("a",A,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)])]),W,S,T,(0,a._)("p",null,[(0,a._)("a",M,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)])]),B,H,(0,a._)("p",null,[(0,a._)("a",q,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)])]),L,z,(0,a._)("p",null,[(0,a._)("a",G,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)]),(0,a._)("a",I,[(0,a.Uk)("App Store"),(0,a.Wm)(n)])]),N,R,(0,a._)("p",null,[(0,a._)("a",F,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)]),(0,a._)("a",O,[(0,a.Uk)("App Store"),(0,a.Wm)(n)])]),$,Z,(0,a._)("p",null,[(0,a._)("a",P,[(0,a.Uk)("Github"),(0,a.Wm)(n)]),(0,a._)("a",Q,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)])]),j,J,(0,a._)("p",null,[(0,a._)("a",K,[(0,a.Uk)("Github"),(0,a.Wm)(n)]),(0,a._)("a",X,[(0,a.Uk)("App Store"),(0,a.Wm)(n)])]),V,Y,(0,a._)("p",null,[(0,a._)("a",ee,[(0,a.Uk)("Github"),(0,a.Wm)(n)])]),le,ne,(0,a._)("p",null,[(0,a._)("a",ae,[(0,a.Uk)("Github"),(0,a.Wm)(n)]),(0,a._)("a",se,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)])]),te,re,(0,a._)("p",null,[(0,a._)("a",ie,[(0,a.Uk)("App Store"),(0,a.Wm)(n)])]),oe,pe,(0,a._)("p",null,[(0,a._)("a",ce,[(0,a.Uk)("软件官网"),(0,a.Wm)(n)]),(0,a._)("a",de,[(0,a.Uk)("安装包"),(0,a.Wm)(n)])]),he,ue,(0,a._)("p",null,[(0,a._)("a",be,[(0,a.Uk)("Github"),(0,a.Wm)(n)])])])}]])}}]);