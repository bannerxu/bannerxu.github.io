(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{510:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"关联远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联远程仓库"}},[s._v("#")]),s._v(" 关联远程仓库")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@gitee.com:xglxgl_admin/Utils.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[s._v("#")]),s._v(" 查看分支")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"删除本地分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除本地分支"}},[s._v("#")]),s._v(" 删除本地分支")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" xxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"回滚分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回滚分支"}},[s._v("#")]),s._v(" 回滚分支")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" 0be6f96\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin base_v1.1.7_merge "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"删除远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[s._v("#")]),s._v(" 删除远程分支")]),s._v(" "),a("blockquote",[a("p",[s._v("在Git v1.7.0 之后，可以使用这种语法删除远程分支：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("删除tag这么用：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tagname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("否则，可以使用这种语法，推送一个空分支到远程分支，其实就相当于删除远程分支：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git push origin :<branchName>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("这是删除tag的方法，推送一个空tag到远程tag：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git tag -d <tagname>\ngit push origin :refs/tags/<tagname>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"创建本地分支并切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建本地分支并切换"}},[s._v("#")]),s._v(" 创建本地分支并切换")]),s._v(" "),a("p",[a("code",[s._v("git checkout -b xxx")])]),s._v(" "),a("h2",{attrs:{id:"合并本地分支-推送到远程-以合并dev到master-并推送到远程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并本地分支-推送到远程-以合并dev到master-并推送到远程"}},[s._v("#")]),s._v(" 合并本地分支，推送到远程（以合并dev到master，并推送到远程）")]),s._v(" "),a("p",[a("code",[s._v("git checkout mastergit merge devgit push origin master")])]),s._v(" "),a("h2",{attrs:{id:"重命名远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重命名远程分支"}},[s._v("#")]),s._v(" 重命名远程分支")]),s._v(" "),a("blockquote",[a("p",[s._v("在git中重命名远程分支，其实就是先删除远程分支，然后重命名本地分支，再重新提交一个远程分支。例如下面的例子中，我需要把 devel 分支重命名为 develop 分支：")])]),s._v(" "),a("p",[s._v("查看详情："),a("code",[s._v("git branch -av")]),s._v("\n删除远程分支："),a("code",[s._v("git push --delete origin devel")]),s._v("\n重命名本地分支："),a("code",[s._v("git branch -m devel develop")]),s._v("\n推送本地分支："),a("code",[s._v("git push origin develop")])]),s._v(" "),a("p",[s._v("然而，在 github 上操作的时候，我在删除远程分支时碰到这个错误：")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" origin develremote: \nerror: refusing to delete the current branch: refs/heads/develTo git@github.com:zrong/quick-cocos2d-x.git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote rejected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" devel "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("deletion of the current branch prohibited"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nerror: failed to push some refs to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git@github.com:zrong/quick-cocos2d-x.git'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这是由于在 github 中，devel是项目的默认分支。要解决此问题，这样操作：")]),s._v(" "),a("ul",[a("li",[s._v("进入 github 中该项目的 Settings 页面；")]),s._v(" "),a("li",[s._v("设置 Default Branch 为其他的分支（例如 master）；")]),s._v(" "),a("li",[s._v("重新执行删除远程分支命令。")])]),s._v(" "),a("h2",{attrs:{id:"tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[s._v("#")]),s._v(" tag")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" v1.1.1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" “xxx”\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show v1.1.1\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" v1.1.1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# delete tag")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v1.1.1  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# push tag")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin —tags  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# push all tags")]),s._v("\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);