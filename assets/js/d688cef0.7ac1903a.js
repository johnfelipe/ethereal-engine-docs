"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[25120],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return t?i.createElement(f,l(l({ref:n},c),{},{components:t})):i.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));const r={id:"scene_functions_loaders_VisibleFunctions",title:"Module: scene/functions/loaders/VisibleFunctions",sidebar_label:"scene/functions/loaders/VisibleFunctions",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"Api/engine/modules/scene_functions_loaders_VisibleFunctions",id:"Api/engine/modules/scene_functions_loaders_VisibleFunctions",title:"Module: scene/functions/loaders/VisibleFunctions",description:"Variables",source:"@site/docs/Api/engine/modules/scene_functions_loaders_VisibleFunctions.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_functions_loaders_VisibleFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_VisibleFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_loaders_VisibleFunctions",title:"Module: scene/functions/loaders/VisibleFunctions",sidebar_label:"scene/functions/loaders/VisibleFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/functions/loaders/VideoFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_VideoFunctions"},next:{title:"scene/functions/loaders/VolumetricFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_VolumetricFunctions"}},o={},d=[{value:"Variables",id:"variables",level:2},{value:"SCENE_COMPONENT_VISIBLE",id:"scene_component_visible",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"SCENE_COMPONENT_VISIBLE_DEFAULT_VALUES",id:"scene_component_visible_default_values",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions",level:2},{value:"deserializeVisible",id:"deserializevisible",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"serializeVisible",id:"serializevisible",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"scene_component_visible"},"SCENE","_","COMPONENT","_","VISIBLE"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","VISIBLE"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"visible"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/functions/loaders/VisibleFunctions.ts#L10"},"packages/engine/src/scene/functions/loaders/VisibleFunctions.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scene_component_visible_default_values"},"SCENE","_","COMPONENT","_","VISIBLE","_","DEFAULT","_","VALUES"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","VISIBLE","_","DEFAULT","_","VALUES"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/functions/loaders/VisibleFunctions.ts#L11"},"packages/engine/src/scene/functions/loaders/VisibleFunctions.ts:11")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"deserializevisible"},"deserializeVisible"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"deserializeVisible"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"componentData"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"componentData")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ComponentJson"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/functions/loaders/VisibleFunctions.ts#L13"},"packages/engine/src/scene/functions/loaders/VisibleFunctions.ts:13")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"serializevisible"},"serializeVisible"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"serializeVisible"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/functions/loaders/VisibleFunctions.ts#L18"},"packages/engine/src/scene/functions/loaders/VisibleFunctions.ts:18")))}p.isMDXComponent=!0}}]);