"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[96679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,k=u["".concat(c,".").concat(f)]||u[f]||p[f]||l;return n?a.createElement(k,i(i({ref:t},o),{},{components:n})):a.createElement(k,i({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={id:"scene_classes_PortalEffect.PortalEffect",title:"Class: PortalEffect",sidebar_label:"PortalEffect",custom_edit_url:null},i=void 0,s={unversionedId:"API/engine/classes/scene_classes_PortalEffect.PortalEffect",id:"API/engine/classes/scene_classes_PortalEffect.PortalEffect",title:"Class: PortalEffect",description:"scene/classes/PortalEffect.PortalEffect",source:"@site/docs/API/engine/classes/scene_classes_PortalEffect.PortalEffect.md",sourceDirName:"API/engine/classes",slug:"/API/engine/classes/scene_classes_PortalEffect.PortalEffect",permalink:"/ethereal-engine-docs/docs/API/engine/classes/scene_classes_PortalEffect.PortalEffect",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scene_classes_PortalEffect.PortalEffect",title:"Class: PortalEffect",sidebar_label:"PortalEffect",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"OffScreenIndicator",permalink:"/ethereal-engine-docs/docs/API/engine/classes/scene_classes_OffScreenIndicator.OffScreenIndicator"},next:{title:"Sky",permalink:"/ethereal-engine-docs/docs/API/engine/classes/scene_classes_Sky.Sky"}},c={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"curve",id:"curve",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"numPoints",id:"numpoints",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"splineMesh",id:"splinemesh",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"texture",id:"texture",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"tubeGeometry",id:"tubegeometry",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"tubeMaterial",id:"tubematerial",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"tubeMesh",id:"tubemesh",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Methods",id:"methods",level:2},{value:"createMesh",id:"createmesh",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"deleteMesh",id:"deletemesh",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"updateMaterialOffset",id:"updatematerialoffset",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-11",level:4}],o={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/scene_classes_PortalEffect"},"scene/classes/PortalEffect"),".PortalEffect"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Object3D")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PortalEffect"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new PortalEffect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"texture"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"texture")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Texture"))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,"Object3D.constructor"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L34"},"packages/engine/src/scene/classes/PortalEffect.ts:34")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"curve"},"curve"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"curve"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"CatmullRomCurve3")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L26"},"packages/engine/src/scene/classes/PortalEffect.ts:26")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"numpoints"},"numPoints"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"numPoints"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"200")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L32"},"packages/engine/src/scene/classes/PortalEffect.ts:32")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"splinemesh"},"splineMesh"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"splineMesh"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Line"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L27"},"packages/engine/src/scene/classes/PortalEffect.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"texture"},"texture"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"texture"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L31"},"packages/engine/src/scene/classes/PortalEffect.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tubegeometry"},"tubeGeometry"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"tubeGeometry"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"TubeGeometry")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L29"},"packages/engine/src/scene/classes/PortalEffect.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tubematerial"},"tubeMaterial"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"tubeMaterial"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"MeshBasicMaterial")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L28"},"packages/engine/src/scene/classes/PortalEffect.ts:28")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tubemesh"},"tubeMesh"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"tubeMesh"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L30"},"packages/engine/src/scene/classes/PortalEffect.ts:30")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"createmesh"},"createMesh"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createMesh"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L43"},"packages/engine/src/scene/classes/PortalEffect.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deletemesh"},"deleteMesh"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deleteMesh"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L94"},"packages/engine/src/scene/classes/PortalEffect.ts:94")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"update"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"delta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L102"},"packages/engine/src/scene/classes/PortalEffect.ts:102")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatematerialoffset"},"updateMaterialOffset"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"updateMaterialOffset"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"delta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/engine/src/scene/classes/PortalEffect.ts#L98"},"packages/engine/src/scene/classes/PortalEffect.ts:98")))}p.isMDXComponent=!0}}]);