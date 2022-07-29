"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[85712],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>k});var i=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},o=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=u(t),k=s,b=d["".concat(p,".").concat(k)]||d[k]||f[k]||r;return t?i.createElement(b,a(a({ref:n},o),{},{components:t})):i.createElement(b,a({ref:n},o))}));function k(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var u=2;u<r;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=t(87462),s=(t(67294),t(3905));const r={id:"assets_superbuffer_views",title:"Module: assets/superbuffer/views",sidebar_label:"assets/superbuffer/views",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"API/engine/modules/assets_superbuffer_views",id:"API/engine/modules/assets_superbuffer_views",title:"Module: assets/superbuffer/views",description:"Variables",source:"@site/docs/API/engine/modules/assets_superbuffer_views.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/assets_superbuffer_views",permalink:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_views",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"assets_superbuffer_views",title:"Module: assets/superbuffer/views",sidebar_label:"assets/superbuffer/views",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"assets/superbuffer/utils",permalink:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_utils"},next:{title:"assets/threejs-various/ConvexGeometry",permalink:"/ethereal-engine-docs/docs/API/engine/modules/assets_threejs_various_ConvexGeometry"}},p={},u=[{value:"Variables",id:"variables",level:2},{value:"boolean",id:"boolean",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"float32",id:"float32",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"float64",id:"float64",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"int16",id:"int16",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"int32",id:"int32",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"int64",id:"int64",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"int8",id:"int8",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"string",id:"string",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"uint16",id:"uint16",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"uint32",id:"uint32",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"uint64",id:"uint64",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"uint8",id:"uint8",level:3},{value:"Defined in",id:"defined-in-11",level:4}],o={toc:u};function f(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"variables"},"Variables"),(0,s.kt)("h3",{id:"boolean"},"boolean"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"boolean"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"boolean"),": True (1) and false (0) (1 byte)"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L102"},"packages/engine/src/assets/superbuffer/views.ts:102")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"float32"},"float32"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"float32"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"float32"),": ","[1.2\xd710-38, 3.4\xd71038]"," (7 significant digits) (4 bytes)"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L84"},"packages/engine/src/assets/superbuffer/views.ts:84")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"float64"},"float64"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"float64"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"float64"),": ","[5.0\xd710-324, 1.8\xd710308]"," (16 significant digits) (8 bytes)"),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L89"},"packages/engine/src/assets/superbuffer/views.ts:89")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"int16"},"int16"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"int16"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"int16"),": ","[-32768, 32767]"," (2 bytes)"),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L22"},"packages/engine/src/assets/superbuffer/views.ts:22")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"int32"},"int32"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"int32"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"int32"),": ","[-2147483648, 2147483647]"," (4 bytes)"),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L27"},"packages/engine/src/assets/superbuffer/views.ts:27")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"int64"},"int64"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"int64"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"bigint"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"int64"),": ","[-2^63, 2^63-1]"," (8 bytes)"),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L65"},"packages/engine/src/assets/superbuffer/views.ts:65")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"int8"},"int8"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"int8"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"int8"),": ","[-128, 127]"," (1 byte)"),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L17"},"packages/engine/src/assets/superbuffer/views.ts:17")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"string"},"string"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"string"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"string"),": UTF-8 encoding (variable byte length of Uint8Array)"),(0,s.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L94"},"packages/engine/src/assets/superbuffer/views.ts:94")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"uint16"},"uint16"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"uint16"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"uint16"),": ","[0, 65535]"," (2 bytes)"),(0,s.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L46"},"packages/engine/src/assets/superbuffer/views.ts:46")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"uint32"},"uint32"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"uint32"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"uint32"),": ","[0, 4294967295]"," (4 bytes)"),(0,s.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L51"},"packages/engine/src/assets/superbuffer/views.ts:51")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"uint64"},"uint64"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"uint64"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"bigint"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"uint64"),": ","[0, 2^64-1]"," (8 bytes)"),(0,s.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L70"},"packages/engine/src/assets/superbuffer/views.ts:70")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"uint8"},"uint8"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"uint8"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#bufferview"},(0,s.kt)("inlineCode",{parentName:"a"},"BufferView")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"uint8"),": ","[0, 255]"," (1 byte)"),(0,s.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/assets/superbuffer/views.ts#L41"},"packages/engine/src/assets/superbuffer/views.ts:41")))}f.isMDXComponent=!0}}]);