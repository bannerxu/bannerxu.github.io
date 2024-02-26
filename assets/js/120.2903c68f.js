(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{547:function(a,s,t){"use strict";t.r(s);var r=t(0),n=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"安装gitlab-runner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装gitlab-runner"}},[a._v("#")]),a._v(" 安装GitLab Runner")]),a._v(" "),s("h3",{attrs:{id:"_1-拉取gitlab-runner镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-拉取gitlab-runner镜像"}},[a._v("#")]),a._v(" 1. 拉取gitlab-runner镜像")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull gitlab/gitlab-runner:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-添加gitlab-runner-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加gitlab-runner-container"}},[a._v("#")]),a._v(" 2. 添加GitLab Runner container")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" gitlab-runner "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /srv/gitlab-runner/config:/etc/gitlab-runner "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /var/run/docker.sock:/var/run/docker.sock "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  gitlab/gitlab-runner:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"_3-注册-gitlab-runner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-注册-gitlab-runner"}},[a._v("#")]),a._v(" 3. 注册 GitLab Runner")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("gitlab-runner register "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--url")]),a._v(" https://gitlab.com/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --registration-token REGISTRATION_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--executor")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--description")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"My Docker Runner"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --docker-image "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"docker:19.03.12"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --docker-volumes /var/run/docker.sock:/var/run/docker.sock\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://image.xuguoliang.top/2020/07/25/rvx08I_SsCahU.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"_4-定义项目构建流程-gitlab-ci-yml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-定义项目构建流程-gitlab-ci-yml"}},[a._v("#")]),a._v(" 4. 定义项目构建流程 (.gitlab-ci.yml)")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("docker_image:\n  stage: deploy\n  image: docker:stable\n\n  only:\n    - master\n\n  script:\n    - "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" vue-blog "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n    - "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" login "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--username")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("auto_deploy@banner "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${PASSWORD}")]),a._v(" registry.cn-shenzhen.aliyuncs.com\n    - "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" tag vue-blog registry.cn-shenzhen.aliyuncs.com/bannerxu/vue-blog\n    - "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" push registry.cn-shenzhen.aliyuncs.com/bannerxu/vue-blog\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.gitlab.com/ee/ci/docker/using_docker_build.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("使用GitLab CI / CD构建Docker映像"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://docs.gitlab.com/runner/install/osx.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("gitlab-runner 安装"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://docs.gitlab.com/ee/ci/yaml/README.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("gitlab ci yaml 配置"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://gitlab.com/gitlab-org/gitlab-runner",target:"_blank",rel:"noopener noreferrer"}},[a._v("gitlab-ci-multi-runner 详情"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);