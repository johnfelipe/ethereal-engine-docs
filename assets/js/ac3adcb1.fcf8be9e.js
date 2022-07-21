"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[45387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,f=u["".concat(m,".").concat(k)]||u[k]||d[k]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"common_classes_BufferGeometryUtils",title:"Module: common/classes/BufferGeometryUtils",sidebar_label:"common/classes/BufferGeometryUtils",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"Api/engine/modules/common_classes_BufferGeometryUtils",id:"Api/engine/modules/common_classes_BufferGeometryUtils",title:"Module: common/classes/BufferGeometryUtils",description:"Functions",source:"@site/docs/Api/engine/modules/common_classes_BufferGeometryUtils.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/common_classes_BufferGeometryUtils",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_classes_BufferGeometryUtils",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_classes_BufferGeometryUtils",title:"Module: common/classes/BufferGeometryUtils",sidebar_label:"common/classes/BufferGeometryUtils",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"camera/types/ProjectionType",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/camera_types_ProjectionType"},next:{title:"common/classes/CapsuleBufferGeometry",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_classes_CapsuleBufferGeometry"}},m={},p=[{value:"Functions",id:"functions",level:2},{value:"computeMorphedAttributes",id:"computemorphedattributes",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"computeTangents",id:"computetangents",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"estimateBytesUsed",id:"estimatebytesused",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"interleaveAttributes",id:"interleaveattributes",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"mergeBufferAttributes",id:"mergebufferattributes",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"mergeBufferGeometries",id:"mergebuffergeometries",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"mergeVertices",id:"mergevertices",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"toTrianglesDrawMode",id:"totrianglesdrawmode",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"computemorphedattributes"},"computeMorphedAttributes"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"computeMorphedAttributes"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"object"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"morphedNormalAttribute"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Float32BufferAttribute")," = morphedNormalAttribute; ",(0,r.kt)("inlineCode",{parentName:"p"},"morphedPositionAttribute"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Float32BufferAttribute")," = morphedPositionAttribute; ",(0,r.kt)("inlineCode",{parentName:"p"},"normalAttribute"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = normalAttribute; ",(0,r.kt)("inlineCode",{parentName:"p"},"positionAttribute"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = positionAttribute }"),(0,r.kt)("p",null,"Calculates the morphed attributes of a morphed/skinned BufferGeometry.\nHelpful for Raytracing or Decals."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An instance of Mesh, Line or Points.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"morphedNormalAttribute"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Float32BufferAttribute")," = morphedNormalAttribute; ",(0,r.kt)("inlineCode",{parentName:"p"},"morphedPositionAttribute"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Float32BufferAttribute")," = morphedPositionAttribute; ",(0,r.kt)("inlineCode",{parentName:"p"},"normalAttribute"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = normalAttribute; ",(0,r.kt)("inlineCode",{parentName:"p"},"positionAttribute"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," = positionAttribute }"),(0,r.kt)("p",null,"An Object with original position/normal attributes and morphed ones."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/classes/BufferGeometryUtils.ts#L549"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:549")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"computetangents"},"computeTangents"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"computeTangents"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"geometry"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"geometry")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/classes/BufferGeometryUtils.ts#L14"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"estimatebytesused"},"estimateBytesUsed"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"estimateBytesUsed"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"geometry"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"geometry")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/classes/BufferGeometryUtils.ts#L326"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:326")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"interleaveattributes"},"interleaveAttributes"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"interleaveAttributes"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"attributes"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"never"),"[]"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"attributes")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"never"),"[]"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/classes/BufferGeometryUtils.ts#L273"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:273")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mergebufferattributes"},"mergeBufferAttributes"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"mergeBufferAttributes"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"attributes"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferAttribute")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"attributes")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferAttribute")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/classes/BufferGeometryUtils.ts#L214"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:214")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mergebuffergeometries"},"mergeBufferGeometries"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"mergeBufferGeometries"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"geometries"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useGroups?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"geometries")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"useGroups")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/classes/BufferGeometryUtils.ts#L26"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:26")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mergevertices"},"mergeVertices"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"mergeVertices"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"geometry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tolerance?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"geometry")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tolerance")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1e-4"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/classes/BufferGeometryUtils.ts#L346"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:346")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"totrianglesdrawmode"},"toTrianglesDrawMode"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toTrianglesDrawMode"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"geometry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"drawMode"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"geometry")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"drawMode")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/classes/BufferGeometryUtils.ts#L466"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:466")))}d.isMDXComponent=!0}}]);