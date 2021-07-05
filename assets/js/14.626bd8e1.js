(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{463:function(t,s,a){"use strict";a.r(s);var n=a(32),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 学习教程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.github.com/cn/github/getting-started-with-github/getting-started-with-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 入门指南"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/git/git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/git-for-windows/git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 版 Github"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://npm.taobao.org/mirrors/git-for-windows/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 版下载镜像站"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/maomao1996/daily-notes/issues/7",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载技巧 - 使用 jsdelivr 加速 Github 仓库资源"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"常用-git-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用-git-命令"}},[t._v("#")]),t._v(" 常用 Git 命令")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("[xxx] 均为可选参数")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝一个 Git 仓库到本地")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone 仓库地址\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone 仓库地址 --depth "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只克隆最近一次的 commit")]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前的 Git 配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置使用 Git 时的用户名称")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"名称"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置使用 Git 时的邮箱地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"邮箱"')]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加所有文件到暂存区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存区到仓库区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提交信息"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增补提交，使用上次的 commit 信息，不添加新的 commit 记录")]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示变更的文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n        -s "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 精简输出")]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有本地分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n        分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支(停留在当前分支)")]),t._v("\n        -r "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有远程分支")]),t._v("\n        -a "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有本地分支和远程分支")]),t._v("\n        -d 分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支")]),t._v("\n        -r "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有远程分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个空白分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --orphan 分支名\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并指定分支到当前分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge 分支名\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取回远程仓库的变化，并与本地分支合并")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传本地指定分支到远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强行推送当前分支到远程仓库，忽略冲突")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --force\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只暂存被追踪的文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n        save "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'说明信息'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加说明信息")]),t._v("\n        -u "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暂存所有文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 stash 列表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取出最近一次的 stash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取出并删除最近一次的 stash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空所有 stash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看提交过的完整日志")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n        --oneline "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看精简日志（精简版本号和提交信息）")]),t._v("\n        --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看精简日志（完整版本号和提交信息）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有分支的所有操作记录（包括被删除的 commit 记录和 reset 操作）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销 commit 操作")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft HEAD~1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git reset --soft commit_id")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销 commit 和 add 操作")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --mixed HEAD~1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git reset --mixed commit_id")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销 commit 和 add 操作同时撤销本地已追踪内容的修改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD~1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git reset --hard commit_id")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"command"}},[t._v("查看完整版 Git 命令")]),t._v(" "),a("a",{attrs:{href:"https://juejin.cn/post/6844904191203213326",target:"_blank",rel:"noopener noreferrer"}},[t._v("三年 Git 使用心得 & 常见问题整理"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/521xueweihan/git-tips",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 命令大全 github"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"commit-常用-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-常用-type"}},[t._v("#")]),t._v(" commit 常用 type")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("feat")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("新功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("fix")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修复 bug")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("docs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修改文档")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("style")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代码格式修改")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("refactor")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重构（即不是新增功能，也不是修复 bug）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("perf")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("更改代码以提高性能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("test")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("增加测试")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("build")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("构建过程或辅助工具的变动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ci")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修改项目持续集成流程")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("chore")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("其他类型的提交")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("revert")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("恢复上一次提交")])])])]),t._v(" "),a("h2",{attrs:{id:"删除-git-中的所有提交历史记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除-git-中的所有提交历史记录"}},[t._v("#")]),t._v(" 删除 Git 中的所有提交历史记录")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("以 "),a("code",[t._v("master")]),t._v(" 分支为例")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 orphan 分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --orphan "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加需要上传文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交更改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Initial"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除需要清空提交记录的分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将当前分支重命名为需要清空提交记录的分支名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制更新存储库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f origin master\n")])])]),a("h2",{attrs:{id:"同步-github-fork-项目上游更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步-github-fork-项目上游更新"}},[t._v("#")]),t._v(" 同步 github fork 项目上游更新")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 添加上游仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://github.com/项目地址\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 拉取上游变动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 合并(以 master 位置为例)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase upstream/master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge upstream/master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. 更新远程 fork 仓库分支(以 master 位置为例)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),a("h2",{attrs:{id:"将代码提交到-github-的-gh-pages-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将代码提交到-github-的-gh-pages-分支"}},[t._v("#")]),t._v(" 将代码提交到 github 的 gh-pages 分支")]),t._v(" "),a("ol",[a("li",[t._v("安装 "),a("code",[t._v("gh-pages")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D gh-pages\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D gh-pages")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在 "),a("code",[t._v("package.json")]),t._v(" 中添加如下脚本")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gh-pages -d dist -m deploy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run build && npm run deploy"')]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("运行 "),a("code",[t._v("deploy")]),t._v(" 脚本")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" deploy\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm run deploy")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用-github-actions-自动部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-github-actions-自动部署"}},[t._v("#")]),t._v(" 使用 GitHub Actions 自动部署")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions"),a("OutboundLink")],1),t._v(" 是 GitHub 的持续集成服务")]),t._v(" "),a("h3",{attrs:{id:"配置-secrets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-secrets"}},[t._v("#")]),t._v(" 配置 Secrets")]),t._v(" "),a("blockquote",[a("p",[t._v("Action 需要有操作仓库的权限")])]),t._v(" "),a("p",[t._v("GitHub 官方的帮助文档："),a("a",{attrs:{href:"https://help.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建用于命令行的个人访问令牌"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("打开需要配置 Actions 的仓库，进入 "),a("code",[t._v("Settings/Secrets")]),t._v(" 页面，配置 "),a("code",[t._v("ACCESS_TOKEN")]),t._v(" 变量，储存内容为刚刚创建的个人访问令牌")]),t._v(" "),a("h3",{attrs:{id:"编写-workflow-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-workflow-文件"}},[t._v("#")]),t._v(" 编写 "),a("code",[t._v("workflow")]),t._v(" 文件")]),t._v(" "),a("ol",[a("li",[t._v("点击仓库的 "),a("code",[t._v("Actions")]),t._v(" 按钮")]),t._v(" "),a("li",[t._v("点击 "),a("code",[t._v("Set up a workflow yourself")]),t._v(" 按钮")]),t._v(" "),a("li",[t._v("复制如下内容")])]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GitHub Actions Build and Deploy\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发条件: push 到 master 分支后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置上海时区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("TZ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Asia/Shanghai\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器环境：最新版 ubuntu")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取代码")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persist-credentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包静态文件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" npm run build\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@releases/v3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GitHub 密钥")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACCESS_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GitHub Pages 读取的分支")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 静态文件所在目录")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FOLDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dist\n")])])]),a("p",[t._v("详细教程可以参考阮一峰老师的"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions 入门教程"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.github.com/cn/actions/reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions 中文文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);