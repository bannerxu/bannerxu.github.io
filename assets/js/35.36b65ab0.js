(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{375:function(e,t,s){},398:function(e,t,s){"use strict";s(375)},406:function(e,t,s){"use strict";s.r(t);var i=s(26),r={computed:{headers(){return(this.$page.headers||[]).filter(e=>2===e.level)}},methods:{isLinkActive(e){return Object(i.e)(this.$route,this.$page.path+"#"+e.slug)}},render(e){return e("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:(this.$page.headers||[]).length>0?"12rem":"0"}},[...(this.$page.headers||[]).map(t=>e("li",{class:{active:this.isLinkActive(t),["level-"+t.level]:!0},attr:{key:t.title}},[e("router-link",{class:{"sidebar-link":!0},props:{to:`${this.$page.path}#${t.slug}`}},t.title)]))])}},a=(s(398),s(0)),l=Object(a.a)(r,void 0,void 0,!1,null,"40a3448a",null);t.default=l.exports}}]);