(self.webpackChunkjianzhe_gu=self.webpackChunkjianzhe_gu||[]).push([[524],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function u(t,r,l){return o()?(e.exports=u=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),u=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||u(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),u=r(9713),l=r(7316),a=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),f=r(4983).mdx,p=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=l(e,a),c=p(t),m=s.useMemo((function(){if(!r)return null;var e=i({React:s,mdx:f},c),t=Object.keys(e),u=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,t]);return s.createElement(m,i({},u))}},8878:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(7294),o=r(6725),u=r(5444),l=r(8665),a=function(e){var t=e.pageTitle,r=e.children;return n.createElement("div",{className:l.nC},n.createElement("title",null,t),n.createElement("nav",null,n.createElement("ul",{className:l.navLinks},n.createElement("li",{className:l.navLinkItem},n.createElement(u.rU,{to:"/",className:l.navLinkText},"Home")),n.createElement("li",{className:l.navLinkItem},n.createElement(u.rU,{to:"/about",className:l.navLinkText},"About")),n.createElement("li",{className:l.navLinkItem},n.createElement(u.rU,{to:"/blog",className:l.navLinkText},"Blog")))),n.createElement("main",null,n.createElement("h1",{className:l.heading},t),r))},c=function(e){var t=e.data;return n.createElement(a,{pageTitle:"My Blog Posts"},t.allMdx.nodes.map((function(e){return n.createElement("article",{key:e.id},n.createElement("h2",null,e.frontmatter.title),n.createElement("p",null,"Posted: ",e.frontmatter.date),n.createElement(o.MDXRenderer,null,e.body))})))}},8665:function(e,t,r){"use strict";r.d(t,{Md:function(){return n},nC:function(){return o},jZ:function(){return u},hd:function(){return l},r0:function(){return a},mf:function(){return c},t7:function(){return i},A:function(){return s},Ok:function(){return f},KK:function(){return p},uB:function(){return m},iV:function(){return d},Xm:function(){return y},qS:function(){return x},k7:function(){return v},gF:function(){return b},wQ:function(){return j},Mv:function(){return h}});var n="layout-module--page--jZGkj",o="layout-module--container--eLBMS",u="layout-module--about--WQ-15",l="layout-module--photo--QCv9x",a="layout-module--photoImage--8qHvC",c="layout-module--intro--6-fXZ",i="layout-module--myName--n4Sej",s="layout-module--bio--Rp7u-",f="layout-module--links--IGJ1F",p="layout-module--research--qcFql",m="layout-module--sectionTitleRow--SA62q",d="layout-module--project--yx24i",y="layout-module--projectImage--u7syE",x="layout-module--projectInfo--HJ9nv",v="layout-module--projectTitle--rRHYi",b="layout-module--projectAbstract--7Ao6d",j="layout-module--projectLinks--ZjyB5",h="layout-module--footer--rX0Dt"}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-5c0c1b4b4ae219605104.js.map