"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[38377],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(i),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return i?n.createElement(f,a(a({ref:t},d),{},{components:i})):n.createElement(f,a({ref:t},d))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},90594:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const o={id:"src_systems_ui_LoadingDetailView",title:"Module: src/systems/ui/LoadingDetailView",sidebar_label:"src/systems/ui/LoadingDetailView",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"API/client-core/modules/src_systems_ui_LoadingDetailView",id:"API/client-core/modules/src_systems_ui_LoadingDetailView",title:"Module: src/systems/ui/LoadingDetailView",description:"Functions",source:"@site/docs/API/client-core/modules/src_systems_ui_LoadingDetailView.md",sourceDirName:"API/client-core/modules",slug:"/API/client-core/modules/src_systems_ui_LoadingDetailView",permalink:"/ethereal-engine-docs/docs/API/client-core/modules/src_systems_ui_LoadingDetailView",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"src_systems_ui_LoadingDetailView",title:"Module: src/systems/ui/LoadingDetailView",sidebar_label:"src/systems/ui/LoadingDetailView",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"src/systems/ui/EmoteDetailView",permalink:"/ethereal-engine-docs/docs/API/client-core/modules/src_systems_ui_EmoteDetailView"},next:{title:"src/systems/ui/LoadingDetailView/SimpleProgressBar",permalink:"/ethereal-engine-docs/docs/API/client-core/modules/src_systems_ui_LoadingDetailView_SimpleProgressBar"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"createLoaderDetailView",id:"createloaderdetailview",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"createloaderdetailview"},"createLoaderDetailView"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createLoaderDetailView"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"XRUI"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"State"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"LoadingUIState"),", {}",">",">",">"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"XRUI"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"State"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"LoadingUIState"),", {}",">",">",">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/677eebf/packages/client-core/src/systems/ui/LoadingDetailView/index.tsx#L20"},"client-core/src/systems/ui/LoadingDetailView/index.tsx:20")))}u.isMDXComponent=!0}}]);