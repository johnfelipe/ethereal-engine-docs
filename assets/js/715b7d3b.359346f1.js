"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[6006],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49353:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const i={id:"renderer_WebGLRendererSystem",title:"Module: renderer/WebGLRendererSystem",sidebar_label:"renderer/WebGLRendererSystem",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"Api/engine/modules/renderer_WebGLRendererSystem",id:"Api/engine/modules/renderer_WebGLRendererSystem",title:"Module: renderer/WebGLRendererSystem",description:"Classes",source:"@site/docs/Api/engine/modules/renderer_WebGLRendererSystem.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/renderer_WebGLRendererSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_WebGLRendererSystem",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"renderer_WebGLRendererSystem",title:"Module: renderer/WebGLRendererSystem",sidebar_label:"renderer/WebGLRendererSystem",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/HighlightSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_HighlightSystem"},next:{title:"renderer/components/HighlightComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_components_HighlightComponent"}},d={},s=[{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:s};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"classes"},"Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_WebGLRendererSystem.EngineRenderer"},"EngineRenderer"))),(0,a.kt)("h2",{id:"interfaces"},"Interfaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema"},"EffectComposerWithSchema"))),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"default"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"world")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/renderer/WebGLRendererSystem.ts#L282"},"packages/engine/src/renderer/WebGLRendererSystem.ts:282")))}c.isMDXComponent=!0}}]);