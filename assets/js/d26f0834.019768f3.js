"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[83537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=o(n),u=i,c=m["".concat(p,".").concat(u)]||m[u]||k[u]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={id:"avatar_animation_BlendSpace2D.BlendSpace2D",title:"Class: BlendSpace2D",sidebar_label:"BlendSpace2D",custom_edit_url:null},l=void 0,d={unversionedId:"Api/engine/classes/avatar_animation_BlendSpace2D.BlendSpace2D",id:"Api/engine/classes/avatar_animation_BlendSpace2D.BlendSpace2D",title:"Class: BlendSpace2D",description:"avatar/animation/BlendSpace2D.BlendSpace2D",source:"@site/docs/Api/engine/classes/avatar_animation_BlendSpace2D.BlendSpace2D.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/avatar_animation_BlendSpace2D.BlendSpace2D",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/avatar_animation_BlendSpace2D.BlendSpace2D",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"avatar_animation_BlendSpace2D.BlendSpace2D",title:"Class: BlendSpace2D",sidebar_label:"BlendSpace2D",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SkeletonUtils",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/avatar_SkeletonUtils.SkeletonUtils"},next:{title:"AvatarInputSettingsAction",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/avatar_state_AvatarInputSettingsState.AvatarInputSettingsAction"}},p={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_flatNodeList",id:"_flatnodelist",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_gridDivisions",id:"_griddivisions",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_gridSize",id:"_gridsize",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"_nodes",id:"_nodes",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"_normalizedValue",id:"_normalizedvalue",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"_tempVec1",id:"_tempvec1",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"_tempVec2",id:"_tempvec2",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"_value",id:"_value",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"maxValue",id:"maxvalue",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"minValue",id:"minvalue",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"Accessors",id:"accessors",level:2},{value:"value",id:"value",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"Methods",id:"methods",level:2},{value:"_getGridNode",id:"_getgridnode",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"_getNormalizedValue",id:"_getnormalizedvalue",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"_setNodeValue",id:"_setnodevalue",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"_zeroOtherNodesWeight",id:"_zeroothernodesweight",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"addNode",id:"addnode",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"setGridDivisions",id:"setgriddivisions",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"update",id:"update",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-18",level:4}],s={toc:o};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_BlendSpace2D"},"avatar/animation/BlendSpace2D"),".BlendSpace2D"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new BlendSpace2D"),"()"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L21"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:21")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_flatnodelist"},"_","flatNodeList"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","flatNodeList"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L15"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_griddivisions"},"_","gridDivisions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","gridDivisions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L9"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_gridsize"},"_","gridSize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","gridSize"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L10"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_nodes"},"_","nodes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","nodes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[][]"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L14"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_normalizedvalue"},"_","normalizedValue"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","normalizedValue"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L12"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_tempvec1"},"_","tempVec1"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","tempVec1"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L18"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_tempvec2"},"_","tempVec2"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","tempVec2"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L19"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_value"},"_","value"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L13"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxvalue"},"maxValue"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"maxValue"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L8"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"minvalue"},"minValue"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"minValue"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L7"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:7")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"value"},"value"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," ",(0,i.kt)("strong",{parentName:"p"},"value"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Vector2"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L45"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:45")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"_getgridnode"},"_","getGridNode"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"_getGridNode"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"x")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"y")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L57"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_getnormalizedvalue"},"_","getNormalizedValue"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"_getNormalizedValue"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L49"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_setnodevalue"},"_","setNodeValue"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"_setNodeValue"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"node"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"node")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"x")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"y")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L82"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:82")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_zeroothernodesweight"},"_","zeroOtherNodesWeight"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"_zeroOtherNodesWeight"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"currentNodes"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"currentNodes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L89"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:89")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"addnode"},"addNode"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addNode"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Adds an action to one of the grid nodes"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"action")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"AnimationAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Animation action")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"position")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Vector2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Grid index")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"left"},"optional data to attach to this node")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L69"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:69")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setgriddivisions"},"setGridDivisions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setGridDivisions"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"divisions"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"divisions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Vector2"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L35"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"update"},"update"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"update"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/avatar/animation/BlendSpace2D.ts#L93"},"packages/engine/src/avatar/animation/BlendSpace2D.ts:93")))}k.isMDXComponent=!0}}]);