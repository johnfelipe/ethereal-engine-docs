"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[72195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(k,s(s({ref:t},d),{},{components:n})):a.createElement(k,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={id:"scene_functions_loaders_ScreenshareTargetFunctions",title:"Module: scene/functions/loaders/ScreenshareTargetFunctions",sidebar_label:"scene/functions/loaders/ScreenshareTargetFunctions",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"API/engine/modules/scene_functions_loaders_ScreenshareTargetFunctions",id:"API/engine/modules/scene_functions_loaders_ScreenshareTargetFunctions",title:"Module: scene/functions/loaders/ScreenshareTargetFunctions",description:"Variables",source:"@site/docs/API/engine/modules/scene_functions_loaders_ScreenshareTargetFunctions.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/scene_functions_loaders_ScreenshareTargetFunctions",permalink:"/docs/docs/API/engine/modules/scene_functions_loaders_ScreenshareTargetFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_loaders_ScreenshareTargetFunctions",title:"Module: scene/functions/loaders/ScreenshareTargetFunctions",sidebar_label:"scene/functions/loaders/ScreenshareTargetFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/functions/loaders/ScenePreviewCameraFunctions",permalink:"/docs/docs/API/engine/modules/scene_functions_loaders_ScenePreviewCameraFunctions"},next:{title:"scene/functions/loaders/ShadowFunctions",permalink:"/docs/docs/API/engine/modules/scene_functions_loaders_ShadowFunctions"}},o={},c=[{value:"Variables",id:"variables",level:2},{value:"SCENE_COMPONENT_SCREENSHARETARGET",id:"scene_component_screensharetarget",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"SCENE_COMPONENT_SCREENSHARETARGET_DEFAULT_VALUES",id:"scene_component_screensharetarget_default_values",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions",level:2},{value:"deserializeScreenshareTarget",id:"deserializescreensharetarget",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"serializeScreenshareTarget",id:"serializescreensharetarget",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"updateScreenshareTarget",id:"updatescreensharetarget",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"scene_component_screensharetarget"},"SCENE","_","COMPONENT","_","SCREENSHARETARGET"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","SCREENSHARETARGET"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"screensharetarget"')),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/functions/loaders/ScreenshareTargetFunctions.ts#L13"},"packages/engine/src/scene/functions/loaders/ScreenshareTargetFunctions.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scene_component_screensharetarget_default_values"},"SCENE","_","COMPONENT","_","SCREENSHARETARGET","_","DEFAULT","_","VALUES"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","SCREENSHARETARGET","_","DEFAULT","_","VALUES"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/functions/loaders/ScreenshareTargetFunctions.ts#L14"},"packages/engine/src/scene/functions/loaders/ScreenshareTargetFunctions.ts:14")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"deserializescreensharetarget"},"deserializeScreenshareTarget"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deserializeScreenshareTarget"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"componentData"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"componentData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ComponentJson"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/functions/loaders/ScreenshareTargetFunctions.ts#L16"},"packages/engine/src/scene/functions/loaders/ScreenshareTargetFunctions.ts:16")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serializescreensharetarget"},"serializeScreenshareTarget"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"serializeScreenshareTarget"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/functions/loaders/ScreenshareTargetFunctions.ts#L33"},"packages/engine/src/scene/functions/loaders/ScreenshareTargetFunctions.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatescreensharetarget"},"updateScreenshareTarget"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"updateScreenshareTarget"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"properties?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"properties?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/functions/loaders/ScreenshareTargetFunctions.ts#L28"},"packages/engine/src/scene/functions/loaders/ScreenshareTargetFunctions.ts:28")))}p.isMDXComponent=!0}}]);