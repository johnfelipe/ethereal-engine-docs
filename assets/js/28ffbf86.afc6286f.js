"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[93510],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(k,l(l({ref:t},o),{},{components:a})):n.createElement(k,l({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"scene_classes_water_WaveSimulator.WaveSimulator",title:"Class: WaveSimulator",sidebar_label:"WaveSimulator",custom_edit_url:null},l=void 0,s={unversionedId:"Api/engine/classes/scene_classes_water_WaveSimulator.WaveSimulator",id:"Api/engine/classes/scene_classes_water_WaveSimulator.WaveSimulator",title:"Class: WaveSimulator",description:"scene/classes/water/WaveSimulator.WaveSimulator",source:"@site/docs/Api/engine/classes/scene_classes_water_WaveSimulator.WaveSimulator.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/scene_classes_water_WaveSimulator.WaveSimulator",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_water_WaveSimulator.WaveSimulator",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scene_classes_water_WaveSimulator.WaveSimulator",title:"Class: WaveSimulator",sidebar_label:"WaveSimulator",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Water",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_Water.Water"},next:{title:"SceneOptions",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_systems_SceneObjectSystem.SceneOptions"}},d={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_camera",id:"_camera",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_dropMesh",id:"_dropmesh",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_geometry",id:"_geometry",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"_targetA",id:"_targeta",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"_targetB",id:"_targetb",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"_updateMesh",id:"_updatemesh",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Methods",id:"methods",level:2},{value:"_render",id:"_render",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"addDrop",id:"adddrop",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"stepSimulation",id:"stepsimulation",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-10",level:4}],o={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_WaveSimulator"},"scene/classes/water/WaveSimulator"),".WaveSimulator"),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new WaveSimulator"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"waterSize"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"waterSize")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/WaveSimulator.ts#L17"},"packages/engine/src/scene/classes/water/WaveSimulator.ts:17")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_camera"},"_","camera"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","camera"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/WaveSimulator.ts#L9"},"packages/engine/src/scene/classes/water/WaveSimulator.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_dropmesh"},"_","dropMesh"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","dropMesh"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/WaveSimulator.ts#L14"},"packages/engine/src/scene/classes/water/WaveSimulator.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_geometry"},"_","geometry"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","geometry"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/WaveSimulator.ts#L10"},"packages/engine/src/scene/classes/water/WaveSimulator.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_targeta"},"_","targetA"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","targetA"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"WebGLRenderTarget")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/WaveSimulator.ts#L11"},"packages/engine/src/scene/classes/water/WaveSimulator.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_targetb"},"_","targetB"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","targetB"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"WebGLRenderTarget")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/WaveSimulator.ts#L12"},"packages/engine/src/scene/classes/water/WaveSimulator.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_updatemesh"},"_","updateMesh"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","updateMesh"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/WaveSimulator.ts#L15"},"packages/engine/src/scene/classes/water/WaveSimulator.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"target"},"target"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"target"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"WebGLRenderTarget")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/WaveSimulator.ts#L13"},"packages/engine/src/scene/classes/water/WaveSimulator.ts:13")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"_render"},"_","render"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_render"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"renderer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mesh"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"renderer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mesh")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/WaveSimulator.ts#L63"},"packages/engine/src/scene/classes/water/WaveSimulator.ts:63")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"adddrop"},"addDrop"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addDrop"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"renderer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"radius"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"strength"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"renderer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"radius")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"strength")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/WaveSimulator.ts#L51"},"packages/engine/src/scene/classes/water/WaveSimulator.ts:51")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stepsimulation"},"stepSimulation"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"stepSimulation"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"renderer"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"renderer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/WaveSimulator.ts#L59"},"packages/engine/src/scene/classes/water/WaveSimulator.ts:59")))}m.isMDXComponent=!0}}]);