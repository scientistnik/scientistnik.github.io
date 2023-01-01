"use strict";(self.webpackChunkscientistnik=self.webpackChunkscientistnik||[]).push([[6031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),g=i,f=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={slug:"compiler-and-interpreter",title:"\u041a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440 \u0438 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0442\u043e\u0440",authors:"scientistnik",tags:["programming","beginner"]},a=void 0,c={permalink:"/en/blog/compiler-and-interpreter",source:"@site/blog/2017-07-17-compiler-and-interpreter.md",title:"\u041a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440 \u0438 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0442\u043e\u0440",description:"\u0412\u0430\u0436\u043d\u044b\u043c \u043e\u0442\u043b\u0438\u0447\u0438\u0435\u043c \u0432\u0441\u0435\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0430\u043c\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b. \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u043c \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440 \u0438 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0442\u043e\u0440!",date:"2017-07-17T00:00:00.000Z",formattedDate:"July 17, 2017",tags:[{label:"programming",permalink:"/en/blog/tags/programming"},{label:"beginner",permalink:"/en/blog/tags/beginner"}],readingTime:.1,hasTruncateMarker:!0,authors:[{name:"scientistnik",title:"author",url:"https://github.com/scientistnik",imageURL:"https://github.com/scientistnik.png",key:"scientistnik"}],frontMatter:{slug:"compiler-and-interpreter",title:"\u041a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440 \u0438 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0442\u043e\u0440",authors:"scientistnik",tags:["programming","beginner"]},prevItem:{title:"\u041f\u0430\u0440\u0430\u0434\u0438\u0433\u043c\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",permalink:"/en/blog/programming-paradigms"},nextItem:{title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",permalink:"/en/blog/what-is-programming"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0412\u0430\u0436\u043d\u044b\u043c \u043e\u0442\u043b\u0438\u0447\u0438\u0435\u043c \u0432\u0441\u0435\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0430\u043c\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b. \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u043c \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440 \u0438 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0442\u043e\u0440!","\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=bXYKFblG1fA"},"https://www.youtube.com/watch?v=bXYKFblG1fA")))}u.isMDXComponent=!0}}]);