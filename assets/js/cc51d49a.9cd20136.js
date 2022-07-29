"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[90352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=i,m=u["".concat(d,".").concat(k)]||u[k]||c[k]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"scene_constants_Util",title:"Module: scene/constants/Util",sidebar_label:"scene/constants/Util",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"API/engine/modules/scene_constants_Util",id:"API/engine/modules/scene_constants_Util",title:"Module: scene/constants/Util",description:"Variables",source:"@site/docs/API/engine/modules/scene_constants_Util.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/scene_constants_Util",permalink:"/ethereal-engine-docs/docs/API/engine/modules/scene_constants_Util",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_constants_Util",title:"Module: scene/constants/Util",sidebar_label:"scene/constants/Util",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/constants/SkyTypeEnum",permalink:"/ethereal-engine-docs/docs/API/engine/modules/scene_constants_SkyTypeEnum"},next:{title:"scene/constants/VolumetricPlayMode",permalink:"/ethereal-engine-docs/docs/API/engine/modules/scene_constants_VolumetricPlayMode"}},d={},s=[{value:"Variables",id:"variables",level:2},{value:"cubeTextureLoader",id:"cubetextureloader",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"negx",id:"negx",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"negy",id:"negy",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"negz",id:"negz",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"posx",id:"posx",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"posy",id:"posy",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"posz",id:"posz",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"textureLoader",id:"textureloader",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Functions",id:"functions",level:2},{value:"getPmremGenerator",id:"getpmremgenerator",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"loadCubeMapTexture",id:"loadcubemaptexture",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"loadDDSTexture",id:"loadddstexture",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-10",level:4}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"cubetextureloader"},"cubeTextureLoader"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"cubeTextureLoader"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"CubeTextureLoader")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/scene/constants/Util.ts#L13"},"packages/engine/src/scene/constants/Util.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"negx"},"negx"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"negx"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"/negx.jpg"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/scene/constants/Util.ts#L6"},"packages/engine/src/scene/constants/Util.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"negy"},"negy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"negy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"/negy.jpg"')),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/scene/constants/Util.ts#L7"},"packages/engine/src/scene/constants/Util.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"negz"},"negz"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"negz"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"/negz.jpg"')),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/scene/constants/Util.ts#L8"},"packages/engine/src/scene/constants/Util.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"posx"},"posx"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"posx"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"/posx.jpg"')),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/scene/constants/Util.ts#L9"},"packages/engine/src/scene/constants/Util.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"posy"},"posy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"posy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"/posy.jpg"')),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/scene/constants/Util.ts#L10"},"packages/engine/src/scene/constants/Util.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"posz"},"posz"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"posz"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"/posz.jpg"')),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/scene/constants/Util.ts#L11"},"packages/engine/src/scene/constants/Util.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"textureloader"},"textureLoader"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"textureLoader"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"TextureLoader")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/scene/constants/Util.ts#L16"},"packages/engine/src/scene/constants/Util.ts:16")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"getpmremgenerator"},"getPmremGenerator"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getPmremGenerator"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"PMREMGenerator")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PMREMGenerator")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/scene/constants/Util.ts#L19"},"packages/engine/src/scene/constants/Util.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadcubemaptexture"},"loadCubeMapTexture"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadCubeMapTexture"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onLoad"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onProgress?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onError?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onLoad")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"texture"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"CubeTexture"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onProgress?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"ProgressEvent"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"EventTarget"),">",") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onError?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"ErrorEvent"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/scene/constants/Util.ts#L23"},"packages/engine/src/scene/constants/Util.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadddstexture"},"loadDDSTexture"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadDDSTexture"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onLoad"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onProgress?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onError?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onLoad")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"texture"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"CompressedTexture"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onProgress?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"ProgressEvent"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"EventTarget"),">",") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onError?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"ErrorEvent"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/scene/constants/Util.ts#L45"},"packages/engine/src/scene/constants/Util.ts:45")))}c.isMDXComponent=!0}}]);