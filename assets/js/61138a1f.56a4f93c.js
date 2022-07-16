"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[55911],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},88171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"route_route_route_docs",title:"Module: route/route/route.docs",sidebar_label:"route/route/route.docs",custom_edit_url:null},i=void 0,d={unversionedId:"Api/server-core/modules/route_route_route_docs",id:"Api/server-core/modules/route_route_route_docs",title:"Module: route/route/route.docs",description:"Variables",source:"@site/docs/Api/server-core/modules/route_route_route_docs.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/route_route_route_docs",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/route_route_route_docs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"route_route_route_docs",title:"Module: route/route/route.docs",sidebar_label:"route/route/route.docs",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"route/route/route.class",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/route_route_route_class"},next:{title:"route/route/route.hooks",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/route_route_route_hooks"}},l={},p=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"definitions")),(0,o.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,o.kt)("inlineCode",{parentName:"td"},"project"),": { ",(0,o.kt)("inlineCode",{parentName:"td"},"description"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"string")," = 'The project to add routes from'; ",(0,o.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"string")," = 'string' } ; ",(0,o.kt)("inlineCode",{parentName:"td"},"route"),": { ",(0,o.kt)("inlineCode",{parentName:"td"},"description"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"string")," = 'The route to enable for this project'; ",(0,o.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"string")," = 'string' }  }")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"definitions.project")),(0,o.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,o.kt)("inlineCode",{parentName:"td"},"description"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"string")," = 'The project to add routes from'; ",(0,o.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"string")," = 'string' }")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"definitions.project.description")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"definitions.project.type")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"definitions.route")),(0,o.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,o.kt)("inlineCode",{parentName:"td"},"description"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"string")," = 'The route to enable for this project'; ",(0,o.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"string")," = 'string' }")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"definitions.route.description")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"definitions.route.type")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/server-core/src/route/route/route.docs.ts#L1"},"packages/server-core/src/route/route/route.docs.ts:1")))}s.isMDXComponent=!0}}]);