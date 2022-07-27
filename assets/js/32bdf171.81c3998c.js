"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[19768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),o=d(n),m=r,k=o["".concat(p,".").concat(m)]||o[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=o;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},88693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"scene_classes_CubemapCapturer.default",title:"Class: default",sidebar_label:"default",custom_edit_url:null},l=void 0,s={unversionedId:"Api/engine/classes/scene_classes_CubemapCapturer.default",id:"Api/engine/classes/scene_classes_CubemapCapturer.default",title:"Class: default",description:"scene/classes/CubemapCapturer.default",source:"@site/docs/Api/engine/classes/scene_classes_CubemapCapturer.default.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/scene_classes_CubemapCapturer.default",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_CubemapCapturer.default",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scene_classes_CubemapCapturer.default",title:"Class: default",sidebar_label:"default",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Clouds",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_Clouds.Clouds"},next:{title:"default",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_EditorDirectionalLightHelper.default"}},p={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"cubeCamera",id:"cubecamera",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"cubeRenderTarget",id:"cuberendertarget",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"height",id:"height",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"renderer",id:"renderer",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"sceneToRender",id:"scenetorender",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"width",id:"width",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"Methods",id:"methods",level:2},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-7",level:4}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_CubemapCapturer"},"scene/classes/CubemapCapturer"),".default"),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new default"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"renderer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sceneToRender"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resolution"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"renderer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"WebGLRenderer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sceneToRender")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Scene"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resolution")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/engine/src/scene/classes/CubemapCapturer.ts#L11"},"packages/engine/src/scene/classes/CubemapCapturer.ts:11")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"cubecamera"},"cubeCamera"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"cubeCamera"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"CubeCamera")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/engine/src/scene/classes/CubemapCapturer.ts#L7"},"packages/engine/src/scene/classes/CubemapCapturer.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cuberendertarget"},"cubeRenderTarget"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"cubeRenderTarget"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"WebGLCubeRenderTarget")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/engine/src/scene/classes/CubemapCapturer.ts#L8"},"packages/engine/src/scene/classes/CubemapCapturer.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"height"},"height"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"height"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/engine/src/scene/classes/CubemapCapturer.ts#L5"},"packages/engine/src/scene/classes/CubemapCapturer.ts:5")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"renderer"},"renderer"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"renderer"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"WebGLRenderer")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/engine/src/scene/classes/CubemapCapturer.ts#L6"},"packages/engine/src/scene/classes/CubemapCapturer.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scenetorender"},"sceneToRender"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"sceneToRender"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Scene")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/engine/src/scene/classes/CubemapCapturer.ts#L9"},"packages/engine/src/scene/classes/CubemapCapturer.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"width"},"width"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"width"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/engine/src/scene/classes/CubemapCapturer.ts#L4"},"packages/engine/src/scene/classes/CubemapCapturer.ts:4")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"update"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"position"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"WebGLCubeRenderTarget")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"position")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WebGLCubeRenderTarget")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/engine/src/scene/classes/CubemapCapturer.ts#L27"},"packages/engine/src/scene/classes/CubemapCapturer.ts:27")))}c.isMDXComponent=!0}}]);