(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{477:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" mysql "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置跳过权限表的加载 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 警告：这就意味着任何用户都能登录进来，并进行任何操作，相当不安全。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"skip-grant-tables"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/mysql/conf.d/docker.cnf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart mysql\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次进入容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" mysql "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录 mysql（无需密码）")]),s._v("\nmysql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新权限")]),s._v("\nflush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改密码")]),s._v("\nalter user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出mysql")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换掉刚才加的跳过权限表的加载参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/skip-grant-tables/ /"')]),s._v(" /etc/mysql/conf.d/docker.cnf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" alter user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nERROR "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1290")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": The MySQL server is running with the --skip-grant-tables option so it cannot execute this statement\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这个时候我们只需要 "),t("code",[s._v("mysql> flush privileges;")])])])}),[],!1,null,null,null);t.default=e.exports}}]);