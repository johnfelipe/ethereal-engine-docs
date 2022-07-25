"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[8978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=o(n),g=r,u=f["".concat(d,".").concat(g)]||f[g]||c[g]||i;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={id:"assets_loaders_gltf_GLTFLoader.GLTF",title:"Interface: GLTF",sidebar_label:"GLTF",custom_edit_url:null},s=void 0,l={unversionedId:"Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF",id:"Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF",title:"Interface: GLTF",description:"assets/loaders/gltf/GLTFLoader.GLTF",source:"@site/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"assets_loaders_gltf_GLTFLoader.GLTF",title:"Interface: GLTF",sidebar_label:"GLTF",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"LoadGLTFResultInterface",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/assets_classes_AssetLoader.LoadGLTFResultInterface"},next:{title:"GLTFLoaderPlugin",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTFLoaderPlugin"}},d={},o=[{value:"Properties",id:"properties",level:2},{value:"animations",id:"animations",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"asset",id:"asset",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"cameras",id:"cameras",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"parser",id:"parser",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"scene",id:"scene",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"scenes",id:"scenes",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"userData",id:"userdata",level:3},{value:"Defined in",id:"defined-in-6",level:4}],p={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_loaders_gltf_GLTFLoader"},"assets/loaders/gltf/GLTFLoader"),".GLTF"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"animations"},"animations"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"animations"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimationClip"),"[]"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L23"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:23")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"asset"},"asset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"asset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"copyright?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"extensions?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"extras?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"generator?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"minVersion?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L27"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cameras"},"cameras"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"cameras"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Camera"),"[]"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L26"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:26")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"parser"},"parser"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"parser"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_loaders_gltf_GLTFLoader.GLTFParser"},(0,r.kt)("inlineCode",{parentName:"a"},"GLTFParser"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L35"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scene"},"scene"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"scene"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Scene")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L24"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scenes"},"scenes"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"scenes"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Scene"),"[]"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L25"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:25")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"userdata"},"userData"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"userData"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L36"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:36")))}c.isMDXComponent=!0}}]);