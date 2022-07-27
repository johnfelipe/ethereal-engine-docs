"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[81699],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(h,c(c({ref:n},p),{},{components:t})):r.createElement(h,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<l;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={id:"social_channel_channel_service",title:"Module: social/channel/channel.service",sidebar_label:"social/channel/channel.service",custom_edit_url:null},c=void 0,i={unversionedId:"Api/server-core/modules/social_channel_channel_service",id:"Api/server-core/modules/social_channel_channel_service",title:"Module: social/channel/channel.service",description:"Functions",source:"@site/docs/Api/server-core/modules/social_channel_channel_service.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/social_channel_channel_service",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/social_channel_channel_service",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"social_channel_channel_service",title:"Module: social/channel/channel.service",sidebar_label:"social/channel/channel.service",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"social/channel/channel.model",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/social_channel_channel_model"},next:{title:"social/channel-type/channel-type.class",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/social_channel_type_channel_type_class"}},o={},s=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"default"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"app"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"app")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Application"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/cd7ad96/packages/server-core/src/social/channel/channel.service.ts#L17"},"packages/server-core/src/social/channel/channel.service.ts:17")))}u.isMDXComponent=!0}}]);