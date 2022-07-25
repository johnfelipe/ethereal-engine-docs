"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[35134],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(a),c=r,u=m["".concat(s,".").concat(c)]||m[c]||k[c]||l;return a?n.createElement(u,d(d({ref:t},p),{},{components:a})):n.createElement(u,d({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,d=new Array(l);d[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var o=2;o<l;o++)d[o]=a[o];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},24198:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={id:"assets_loaders_gltf_DRACOLoader.DRACOLoader",title:"Class: DRACOLoader",sidebar_label:"DRACOLoader",custom_edit_url:null},d=void 0,i={unversionedId:"Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader",id:"Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader",title:"Class: DRACOLoader",description:"assets/loaders/gltf/DRACOLoader.DRACOLoader",source:"@site/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"assets_loaders_gltf_DRACOLoader.DRACOLoader",title:"Class: DRACOLoader",sidebar_label:"DRACOLoader",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"DDSLoader",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_dds_DDSLoader.DDSLoader"},next:{title:"GLTFLoader",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_GLTFLoader.GLTFLoader"}},s={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getDecoderModule",id:"getdecodermodule",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getEncoderModule",id:"getencodermodule",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"load",id:"load",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"preload",id:"preload",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"setDecoderConfig",id:"setdecoderconfig",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"setDecoderPath",id:"setdecoderpath",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"setWorkerLimit",id:"setworkerlimit",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4}],p={toc:o};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_loaders_gltf_DRACOLoader"},"assets/loaders/gltf/DRACOLoader"),".DRACOLoader"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Loader")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DRACOLoader"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new DRACOLoader"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"manager?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"manager?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LoadingManager"))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,"Loader.constructor"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts#L4"},"packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts:4")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"DRACOLoader"))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"DRACOLoader"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts#L18"},"packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts:18")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getdecodermodule"},"getDecoderModule"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getDecoderModule"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts#L15"},"packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getencodermodule"},"getEncoderModule"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getEncoderModule"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts#L16"},"packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts:16")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"load"},"load"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"load"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onLoad"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onProgress?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onError?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onLoad")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"geometry"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"BufferGeometry"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onProgress?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"ProgressEvent"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget"),">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onError?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"ErrorEvent"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts#L6"},"packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"preload"},"preload"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"preload"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"DRACOLoader"))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"DRACOLoader"))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts#L17"},"packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setdecoderconfig"},"setDecoderConfig"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setDecoderConfig"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"DRACOLoader"))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"DRACOLoader"))),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts#L13"},"packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setdecoderpath"},"setDecoderPath"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setDecoderPath"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),"): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"DRACOLoader"))),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"DRACOLoader"))),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts#L12"},"packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setworkerlimit"},"setWorkerLimit"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setWorkerLimit"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"workerLimit"),"): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"DRACOLoader"))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"workerLimit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_DRACOLoader.DRACOLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"DRACOLoader"))),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts#L14"},"packages/engine/src/assets/loaders/gltf/DRACOLoader.d.ts:14")))}k.isMDXComponent=!0}}]);