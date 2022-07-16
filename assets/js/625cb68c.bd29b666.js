"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[12624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,f=k["".concat(s,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},15999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"scene_constants_transformConstants",title:"Module: scene/constants/transformConstants",sidebar_label:"scene/constants/transformConstants",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/scene_constants_transformConstants",id:"Api/engine/modules/scene_constants_transformConstants",title:"Module: scene/constants/transformConstants",description:"Enumerations",source:"@site/docs/Api/engine/modules/scene_constants_transformConstants.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_constants_transformConstants",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_transformConstants",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_constants_transformConstants",title:"Module: scene/constants/transformConstants",sidebar_label:"scene/constants/transformConstants",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/constants/VolumetricPlayMode",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_VolumetricPlayMode"},next:{title:"scene/functions/ErrorFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_ErrorFunctions"}},s={},d=[{value:"Enumerations",id:"enumerations",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"SnapModeType",id:"snapmodetype",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"TransformAxisType",id:"transformaxistype",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"TransformModeType",id:"transformmodetype",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"TransformPivotType",id:"transformpivottype",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Variables",id:"variables",level:2},{value:"SnapMode",id:"snapmode",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"TransformAxis",id:"transformaxis",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"TransformAxisConstraints",id:"transformaxisconstraints",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"TransformMode",id:"transformmode",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"TransformPivot",id:"transformpivot",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Defined in",id:"defined-in-8",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enumerations"},"Enumerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/enums/scene_constants_transformConstants.TransformSpace"},"TransformSpace"))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"snapmodetype"},"SnapModeType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SnapModeType"),": keyof typeof ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_transformConstants#snapmode"},(0,r.kt)("inlineCode",{parentName:"a"},"SnapMode"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/constants/transformConstants.ts#L50"},"packages/engine/src/scene/constants/transformConstants.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transformaxistype"},"TransformAxisType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"TransformAxisType"),": keyof typeof ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_transformConstants#transformaxis"},(0,r.kt)("inlineCode",{parentName:"a"},"TransformAxis"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/constants/transformConstants.ts#L49"},"packages/engine/src/scene/constants/transformConstants.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transformmodetype"},"TransformModeType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"TransformModeType"),": keyof typeof ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_transformConstants#transformmode"},(0,r.kt)("inlineCode",{parentName:"a"},"TransformMode"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/constants/transformConstants.ts#L47"},"packages/engine/src/scene/constants/transformConstants.ts:47")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transformpivottype"},"TransformPivotType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"TransformPivotType"),": keyof typeof ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_constants_transformConstants#transformpivot"},(0,r.kt)("inlineCode",{parentName:"a"},"TransformPivot"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/constants/transformConstants.ts#L48"},"packages/engine/src/scene/constants/transformConstants.ts:48")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"snapmode"},"SnapMode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"SnapMode"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Disabled"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Grid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Grid"'))))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/constants/transformConstants.ts#L35"},"packages/engine/src/scene/constants/transformConstants.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transformaxis"},"TransformAxis"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"TransformAxis"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"X")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"X"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"XY")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"XY"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"XYZ")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"XYZ"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"XZ")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"XZ"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Y"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"YZ")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"YZ"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Z")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Z"'))))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/constants/transformConstants.ts#L16"},"packages/engine/src/scene/constants/transformConstants.ts:16")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transformaxisconstraints"},"TransformAxisConstraints"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"TransformAxisConstraints"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"X")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"XY")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"XYZ")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"XZ")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"YZ")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Z")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3"))))),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/constants/transformConstants.ts#L25"},"packages/engine/src/scene/constants/transformConstants.ts:25")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transformmode"},"TransformMode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"TransformMode"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Disabled"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Grab")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Grab"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Placement")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Placement"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Rotate")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Rotate"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Scale")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Scale"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Translate")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Translate"'))))),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/constants/transformConstants.ts#L8"},"packages/engine/src/scene/constants/transformConstants.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transformpivot"},"TransformPivot"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"TransformPivot"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Bottom")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Bottom"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Center")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Center"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Selection")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"Selection"'))))),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/engine/src/scene/constants/transformConstants.ts#L3"},"packages/engine/src/scene/constants/transformConstants.ts:3")))}m.isMDXComponent=!0}}]);