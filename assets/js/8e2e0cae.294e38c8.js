"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[89395],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),k=o(a),u=r,N=k["".concat(p,".").concat(u)]||k[u]||s[u]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},91096:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={id:"assets_loaders_gltf_GLTFLoader.GLTFLoaderPlugin",title:"Interface: GLTFLoaderPlugin",sidebar_label:"GLTFLoaderPlugin",custom_edit_url:null},i=void 0,d={unversionedId:"Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTFLoaderPlugin",id:"Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTFLoaderPlugin",title:"Interface: GLTFLoaderPlugin",description:"assets/loaders/gltf/GLTFLoader.GLTFLoaderPlugin",source:"@site/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTFLoaderPlugin.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTFLoaderPlugin",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTFLoaderPlugin",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"assets_loaders_gltf_GLTFLoader.GLTFLoaderPlugin",title:"Interface: GLTFLoaderPlugin",sidebar_label:"GLTFLoaderPlugin",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"GLTF",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF"},next:{title:"GLTFReference",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTFReference"}},p={},o=[{value:"Properties",id:"properties",level:2},{value:"afterRoot",id:"afterroot",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"beforeRoot",id:"beforeroot",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"createNodeAttachment",id:"createnodeattachment",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"extendMaterialParams",id:"extendmaterialparams",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"getMaterialType",id:"getmaterialtype",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-4",level:4},{value:"loadBufferView",id:"loadbufferview",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Defined in",id:"defined-in-5",level:4},{value:"loadMaterial",id:"loadmaterial",level:3},{value:"Type declaration",id:"type-declaration-6",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-6",level:5},{value:"Defined in",id:"defined-in-6",level:4},{value:"loadMesh",id:"loadmesh",level:3},{value:"Type declaration",id:"type-declaration-7",level:4},{value:"Parameters",id:"parameters-6",level:5},{value:"Returns",id:"returns-7",level:5},{value:"Defined in",id:"defined-in-7",level:4},{value:"loadTexture",id:"loadtexture",level:3},{value:"Type declaration",id:"type-declaration-8",level:4},{value:"Parameters",id:"parameters-7",level:5},{value:"Returns",id:"returns-8",level:5},{value:"Defined in",id:"defined-in-8",level:4}],m={toc:o};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_loaders_gltf_GLTFLoader"},"assets/loaders/gltf/GLTFLoader"),".GLTFLoaderPlugin"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"afterroot"},"afterRoot"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"afterRoot"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF"},(0,r.kt)("inlineCode",{parentName:"a"},"GLTF")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"result"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"result")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF"},(0,r.kt)("inlineCode",{parentName:"a"},"GLTF")))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L127"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:127")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"beforeroot"},"beforeRoot"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"beforeRoot"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L126"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:126")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createnodeattachment"},"createNodeAttachment"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"createNodeAttachment"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"nodeIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Event"),">",">"),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"nodeIndex"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Event"),">",">"),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nodeIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Event"),">",">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L136"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:136")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extendmaterialparams"},"extendMaterialParams"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"extendMaterialParams"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"materialIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"materialParams"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),";  }) => ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"materialIndex"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"materialParams"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"materialIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"materialParams")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L133"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:133")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getmaterialtype"},"getMaterialType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"getMaterialType"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"materialIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," typeof ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")),(0,r.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"materialIndex"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," typeof ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"materialIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," typeof ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L132"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:132")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"loadbufferview"},"loadBufferView"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"loadBufferView"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"bufferViewIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),">"),(0,r.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"bufferViewIndex"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),">"),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bufferViewIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h5",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L129"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:129")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"loadmaterial"},"loadMaterial"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"loadMaterial"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"materialIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),">"),(0,r.kt)("h4",{id:"type-declaration-6"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"materialIndex"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),">"),(0,r.kt)("h5",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"materialIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h5",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),">"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L130"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:130")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"loadmesh"},"loadMesh"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"loadMesh"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"meshIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Group")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"SkinnedMesh"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">",">"),(0,r.kt)("h4",{id:"type-declaration-7"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"meshIndex"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Group")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"SkinnedMesh"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">",">"),(0,r.kt)("h5",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"meshIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h5",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Group")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"SkinnedMesh"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">",">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L128"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:128")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"loadtexture"},"loadTexture"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"loadTexture"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"textureIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Texture"),">"),(0,r.kt)("h4",{id:"type-declaration-8"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"textureIndex"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Texture"),">"),(0,r.kt)("h5",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"textureIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h5",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Texture"),">"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts#L131"},"packages/engine/src/assets/loaders/gltf/GLTFLoader.d.ts:131")))}s.isMDXComponent=!0}}]);