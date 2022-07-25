"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[52438],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(t),k=i,u=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return t?a.createElement(u,s(s({ref:n},p),{},{components:t})):a.createElement(u,s({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=m;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var d=2;d<l;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const l={id:"scene_classes_TransformGizmo.default",title:"Class: default",sidebar_label:"default",custom_edit_url:null},s=void 0,r={unversionedId:"Api/engine/classes/scene_classes_TransformGizmo.default",id:"Api/engine/classes/scene_classes_TransformGizmo.default",title:"Class: default",description:"scene/classes/TransformGizmo.default",source:"@site/docs/Api/engine/classes/scene_classes_TransformGizmo.default.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/scene_classes_TransformGizmo.default",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_TransformGizmo.default",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scene_classes_TransformGizmo.default",title:"Class: default",sidebar_label:"default",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"default",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_TrailRenderer.default"},next:{title:"default",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_UpdateableObject3D.default"}},o={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"activeControls",id:"activecontrols",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"hoveredAxis",id:"hoveredaxis",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"model",id:"model",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"previousColor",id:"previouscolor",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"raycaster",id:"raycaster",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"raycasterResults",id:"raycasterresults",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"rotateControls",id:"rotatecontrols",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"rotateXAxis",id:"rotatexaxis",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"rotateYAxis",id:"rotateyaxis",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"rotateZAxis",id:"rotatezaxis",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"scaleControls",id:"scalecontrols",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"scaleUniformHandle",id:"scaleuniformhandle",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"scaleXAxis",id:"scalexaxis",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"scaleXYPlane",id:"scalexyplane",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"scaleXZPlane",id:"scalexzplane",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"scaleYAxis",id:"scaleyaxis",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"scaleYZPlane",id:"scaleyzplane",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"scaleZAxis",id:"scalezaxis",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"selectedAxisObj",id:"selectedaxisobj",level:3},{value:"Defined in",id:"defined-in-19",level:4},{value:"selectionColor",id:"selectioncolor",level:3},{value:"Defined in",id:"defined-in-20",level:4},{value:"transformMode",id:"transformmode",level:3},{value:"Defined in",id:"defined-in-21",level:4},{value:"translateControls",id:"translatecontrols",level:3},{value:"Defined in",id:"defined-in-22",level:4},{value:"translateXAxis",id:"translatexaxis",level:3},{value:"Defined in",id:"defined-in-23",level:4},{value:"translateXYPlane",id:"translatexyplane",level:3},{value:"Defined in",id:"defined-in-24",level:4},{value:"translateXZPlane",id:"translatexzplane",level:3},{value:"Defined in",id:"defined-in-25",level:4},{value:"translateYAxis",id:"translateyaxis",level:3},{value:"Defined in",id:"defined-in-26",level:4},{value:"translateYZPlane",id:"translateyzplane",level:3},{value:"Defined in",id:"defined-in-27",level:4},{value:"translateZAxis",id:"translatezaxis",level:3},{value:"Defined in",id:"defined-in-28",level:4},{value:"Accessors",id:"accessors",level:2},{value:"selectedAxis",id:"selectedaxis",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-29",level:4},{value:"selectedPlaneNormal",id:"selectedplanenormal",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-30",level:4},{value:"Methods",id:"methods",level:2},{value:"clone",id:"clone",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-31",level:4},{value:"deselectAxis",id:"deselectaxis",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-32",level:4},{value:"highlightHoveredAxis",id:"highlighthoveredaxis",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-33",level:4},{value:"raycastAxis",id:"raycastaxis",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-34",level:4},{value:"selectAxisWithRaycaster",id:"selectaxiswithraycaster",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-35",level:4},{value:"setLocalScaleHandlesVisible",id:"setlocalscalehandlesvisible",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-36",level:4},{value:"setTransformMode",id:"settransformmode",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-37",level:4},{value:"load",id:"load",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-38",level:4}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_TransformGizmo"},"scene/classes/TransformGizmo"),".default"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Object3D")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"default"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new default"),"()"),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,"Object3D.constructor"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L81"},"packages/engine/src/scene/classes/TransformGizmo.ts:81")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"activecontrols"},"activeControls"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"activeControls"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L71"},"packages/engine/src/scene/classes/TransformGizmo.ts:71")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hoveredaxis"},"hoveredAxis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"hoveredAxis"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L73"},"packages/engine/src/scene/classes/TransformGizmo.ts:73")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"model"},"model"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"model"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L42"},"packages/engine/src/scene/classes/TransformGizmo.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"previouscolor"},"previousColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"previousColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Color")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L44"},"packages/engine/src/scene/classes/TransformGizmo.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"raycaster"},"raycaster"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"raycaster"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Raycaster")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L45"},"packages/engine/src/scene/classes/TransformGizmo.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"raycasterresults"},"raycasterResults"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"raycasterResults"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Intersection"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">",">","[]"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L46"},"packages/engine/src/scene/classes/TransformGizmo.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rotatecontrols"},"rotateControls"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"rotateControls"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L56"},"packages/engine/src/scene/classes/TransformGizmo.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rotatexaxis"},"rotateXAxis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"rotateXAxis"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L57"},"packages/engine/src/scene/classes/TransformGizmo.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rotateyaxis"},"rotateYAxis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"rotateYAxis"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L58"},"packages/engine/src/scene/classes/TransformGizmo.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rotatezaxis"},"rotateZAxis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"rotateZAxis"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L59"},"packages/engine/src/scene/classes/TransformGizmo.ts:59")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scalecontrols"},"scaleControls"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"scaleControls"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L61"},"packages/engine/src/scene/classes/TransformGizmo.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scaleuniformhandle"},"scaleUniformHandle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"scaleUniformHandle"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L68"},"packages/engine/src/scene/classes/TransformGizmo.ts:68")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scalexaxis"},"scaleXAxis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"scaleXAxis"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L62"},"packages/engine/src/scene/classes/TransformGizmo.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scalexyplane"},"scaleXYPlane"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"scaleXYPlane"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L65"},"packages/engine/src/scene/classes/TransformGizmo.ts:65")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scalexzplane"},"scaleXZPlane"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"scaleXZPlane"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L67"},"packages/engine/src/scene/classes/TransformGizmo.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scaleyaxis"},"scaleYAxis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"scaleYAxis"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L63"},"packages/engine/src/scene/classes/TransformGizmo.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scaleyzplane"},"scaleYZPlane"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"scaleYZPlane"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L66"},"packages/engine/src/scene/classes/TransformGizmo.ts:66")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scalezaxis"},"scaleZAxis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"scaleZAxis"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L64"},"packages/engine/src/scene/classes/TransformGizmo.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectedaxisobj"},"selectedAxisObj"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"selectedAxisObj"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L72"},"packages/engine/src/scene/classes/TransformGizmo.ts:72")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectioncolor"},"selectionColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"selectionColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Color")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L43"},"packages/engine/src/scene/classes/TransformGizmo.ts:43")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transformmode"},"transformMode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transformMode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"Disabled"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Grab"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Placement"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Translate"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Rotate"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Scale"')),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L70"},"packages/engine/src/scene/classes/TransformGizmo.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"translatecontrols"},"translateControls"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"translateControls"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">"),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L48"},"packages/engine/src/scene/classes/TransformGizmo.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"translatexaxis"},"translateXAxis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"translateXAxis"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L49"},"packages/engine/src/scene/classes/TransformGizmo.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"translatexyplane"},"translateXYPlane"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"translateXYPlane"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L52"},"packages/engine/src/scene/classes/TransformGizmo.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"translatexzplane"},"translateXZPlane"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"translateXZPlane"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L54"},"packages/engine/src/scene/classes/TransformGizmo.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"translateyaxis"},"translateYAxis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"translateYAxis"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-26"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L50"},"packages/engine/src/scene/classes/TransformGizmo.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"translateyzplane"},"translateYZPlane"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"translateYZPlane"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-27"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L53"},"packages/engine/src/scene/classes/TransformGizmo.ts:53")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"translatezaxis"},"translateZAxis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"translateZAxis"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"MeshWithAxisInfo")),(0,i.kt)("h4",{id:"defined-in-28"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L51"},"packages/engine/src/scene/classes/TransformGizmo.ts:51")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"selectedaxis"},"selectedAxis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"selectedAxis"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XYZ"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Y"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"X"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Z"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XY"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"YZ"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XZ"')),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XYZ"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Y"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"X"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Z"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XY"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"YZ"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XZ"')),(0,i.kt)("h4",{id:"defined-in-29"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L272"},"packages/engine/src/scene/classes/TransformGizmo.ts:272")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectedplanenormal"},"selectedPlaneNormal"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"selectedPlaneNormal"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-30"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L276"},"packages/engine/src/scene/classes/TransformGizmo.ts:276")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"clone"},"clone"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"clone"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_TransformGizmo.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default"))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/scene_classes_TransformGizmo.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default"))),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,"Object3D.clone"),(0,i.kt)("h4",{id:"defined-in-31"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L372"},"packages/engine/src/scene/classes/TransformGizmo.ts:372")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deselectaxis"},"deselectAxis"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"deselectAxis"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-32"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L358"},"packages/engine/src/scene/classes/TransformGizmo.ts:358")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"highlighthoveredaxis"},"highlightHoveredAxis"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"highlightHoveredAxis"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"camera?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Vector2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"camera")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PerspectiveCamera")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"OrthographicCamera")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Engine.instance.currentWorld.camera"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-33"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L347"},"packages/engine/src/scene/classes/TransformGizmo.ts:347")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"raycastaxis"},"raycastAxis"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"raycastAxis"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"camera?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Intersection"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Vector2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"camera")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PerspectiveCamera")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"OrthographicCamera")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Engine.instance.currentWorld.camera"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Intersection"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">",">"),(0,i.kt)("h4",{id:"defined-in-34"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L315"},"packages/engine/src/scene/classes/TransformGizmo.ts:315")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectaxiswithraycaster"},"selectAxisWithRaycaster"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"selectAxisWithRaycaster"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"camera?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XYZ"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Y"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"X"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Z"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XY"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"YZ"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XZ"')),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Vector2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"camera")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PerspectiveCamera")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"OrthographicCamera")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Engine.instance.currentWorld.camera"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XYZ"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Y"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"X"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Z"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XY"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"YZ"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"XZ"')),(0,i.kt)("h4",{id:"defined-in-35"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L326"},"packages/engine/src/scene/classes/TransformGizmo.ts:326")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setlocalscalehandlesvisible"},"setLocalScaleHandlesVisible"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setLocalScaleHandlesVisible"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"visible"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"visible")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-36"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L306"},"packages/engine/src/scene/classes/TransformGizmo.ts:306")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"settransformmode"},"setTransformMode"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setTransformMode"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"transformMode"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"transformMode")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"Disabled"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"Grab"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"Placement"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"Translate"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"Rotate"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"Scale"'))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-37"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L280"},"packages/engine/src/scene/classes/TransformGizmo.ts:280")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"load"},"load"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"load"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF"},(0,i.kt)("inlineCode",{parentName:"a"},"GLTF")),">"),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF"},(0,i.kt)("inlineCode",{parentName:"a"},"GLTF")),">"),(0,i.kt)("h4",{id:"defined-in-38"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/scene/classes/TransformGizmo.ts#L75"},"packages/engine/src/scene/classes/TransformGizmo.ts:75")))}c.isMDXComponent=!0}}]);