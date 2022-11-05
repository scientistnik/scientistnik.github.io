"use strict";(self.webpackChunkscientistnik=self.webpackChunkscientistnik||[]).push([[4798],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),g=a,m=f["".concat(l,".").concat(g)]||f[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5202:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const i={slug:"c-language",title:"\u042f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0421",authors:"scientistnik",tags:["programming","beginner","draft"]},o=void 0,c={permalink:"/blog/c-language",source:"@site/blog/2020-06-10-c-language.md",title:"\u042f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0421",description:"\u0412\u0441\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043d\u0430 assembly \u043f\u0438\u0448\u0443\u0442\u0441\u044f \u043f\u043e\u0434 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440. \u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, \u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430 \u0435\u0441\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440 eax, \u0430 \u0443 \u0434\u0440\u0443\u0433\u043e\u0433\u043e - \u043d\u0435\u0442. \u0418\u043b\u0438 \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440 \u0443\u043c\u0435\u0435\u0442 \u0432\u044b\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c sin \u043e\u0442 \u0447\u0438\u0441\u043b\u0430, \u0430 \u0441\u0442\u0430\u0440\u044b\u0435 - \u043d\u0435\u0442. \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u0430\u044f \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430 eax \u0438\u043b\u0438 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430\u0445. \u0411\u0440\u0430\u0439\u0435\u043d \u041a\u0435\u0440\u043d\u0438\u0433\u0430\u043d \u0438 \u0414\u0435\u043d\u043d\u0438\u0441 \u0420\u0438\u0447\u0438 \u0440\u0435\u0448\u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b\u0439 \u0440\u0435\u0448\u0438\u0442\u044c \u044d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443. \u0422\u0430\u043a \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u044f\u0437\u044b\u043a \u0421\u0438.",date:"2020-06-10T00:00:00.000Z",formattedDate:"June 10, 2020",tags:[{label:"programming",permalink:"/blog/tags/programming"},{label:"beginner",permalink:"/blog/tags/beginner"},{label:"draft",permalink:"/blog/tags/draft"}],readingTime:4.78,hasTruncateMarker:!0,authors:[{name:"scientistnik",title:"author",url:"https://github.com/scientistnik",imageURL:"https://github.com/scientistnik.png",key:"scientistnik"}],frontMatter:{slug:"c-language",title:"\u042f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0421",authors:"scientistnik",tags:["programming","beginner","draft"]},prevItem:{title:'\u041c\u044b\u0441\u043b\u0438 \u043e \u043a\u043d\u0438\u0433\u0435 "\u0414\u0443\u043c\u0430\u0439 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e, \u0440\u0435\u0448\u0430\u0439 \u0431\u044b\u0441\u0442\u0440\u043e"',permalink:"/blog/thinking-fast-and-slow"},nextItem:{title:"\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0441\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f",permalink:"/blog/number-system"}},l={authorsImageUrls:[void 0]},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0412\u0441\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043d\u0430 assembly \u043f\u0438\u0448\u0443\u0442\u0441\u044f \u043f\u043e\u0434 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440."))}p.isMDXComponent=!0}}]);