"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[1547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,k=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return n?a.createElement(k,l(l({ref:t},o),{},{components:n})):a.createElement(k,l({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"common_classes_RingBuffer.RingBuffer",title:"Class: RingBuffer<T>",sidebar_label:"RingBuffer",custom_edit_url:null},l=void 0,s={unversionedId:"Api/engine/classes/common_classes_RingBuffer.RingBuffer",id:"Api/engine/classes/common_classes_RingBuffer.RingBuffer",title:"Class: RingBuffer<T>",description:"common/classes/RingBuffer.RingBuffer",source:"@site/docs/Api/engine/classes/common_classes_RingBuffer.RingBuffer.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/common_classes_RingBuffer.RingBuffer",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_RingBuffer.RingBuffer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_classes_RingBuffer.RingBuffer",title:"Class: RingBuffer<T>",sidebar_label:"RingBuffer",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"GenerateMeshBVHWorker",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_GenerateMeshBVHWorker.GenerateMeshBVHWorker"},next:{title:"Object3DUtils",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/common_functions_Object3DUtils.Object3DUtils"}},p={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"buffer",id:"buffer",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"pos",id:"pos",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"size",id:"size",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"clone",id:"clone",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"copy",id:"copy",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"empty",id:"empty",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"fromArray",id:"fromarray",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"full",id:"full",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"getBufferLength",id:"getbufferlength",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"getFirst",id:"getfirst",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"getLast",id:"getlast",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"getPos",id:"getpos",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"getSize",id:"getsize",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"pop",id:"pop",level:3},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"popLast",id:"poplast",level:3},{value:"Returns",id:"returns-14",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"remove",id:"remove",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"resize",id:"resize",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-16",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"toArray",id:"toarray",level:3},{value:"Returns",id:"returns-17",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"fromArray",id:"fromarray-1",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-18",level:4},{value:"Defined in",id:"defined-in-22",level:4}],o={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_classes_RingBuffer"},"common/classes/RingBuffer"),".RingBuffer"),(0,r.kt)("p",null,"Ring buffer holds data in circular form.\\\nData will be inserted in linear fashion and when the buffer reaches its maximum size then\nnewly entered data will be overwrite first element(s)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Below will create ring buffer with 4 elements and sets size of the buffer to 4.\nconst buffer = RingBuffer.fromArray([1, 2, 3, 4]);\n\n// Adding new elements will overweight element(s) in FIFO manner.\nbuffer.add(5, 6); // now buffer contains [5, 6, 3, 4]\n")),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type of the data.")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new RingBuffer"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"size"),")"),(0,r.kt)("p",null,"Constructs ring buffer of given size"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L58"},"packages/engine/src/common/classes/RingBuffer.ts:58")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"buffer"},"buffer"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"buffer"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("p",null,"Buffer to hold element(s)."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L29"},"packages/engine/src/common/classes/RingBuffer.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pos"},"pos"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"pos"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("p",null,"Current position on the ring buffer."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L33"},"packages/engine/src/common/classes/RingBuffer.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"size"},"size"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"size"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Maximum number of elements this buffer can contain."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L31"},"packages/engine/src/common/classes/RingBuffer.ts:31")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"add"},"add"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"add"),"(...",(0,r.kt)("inlineCode",{parentName:"p"},"items"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Add element(s) into the ring buffer.\\\nIf overflow happens then element(s) will be overwritten by FIFO manner."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...items")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"list of element(s) to be inserted.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L85"},"packages/engine/src/common/classes/RingBuffer.ts:85")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clear"},"clear"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Clear the ring buffer."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L196"},"packages/engine/src/common/classes/RingBuffer.ts:196")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clone"},"clone"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clone"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_RingBuffer.RingBuffer"},(0,r.kt)("inlineCode",{parentName:"a"},"RingBuffer")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("p",null,"Create new ring buffer and copy elements from this ring buffer."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_RingBuffer.RingBuffer"},(0,r.kt)("inlineCode",{parentName:"a"},"RingBuffer")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("p",null,"Newly created ring buffer."),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L51"},"packages/engine/src/common/classes/RingBuffer.ts:51")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"copy"},"copy"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"copy"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_RingBuffer.RingBuffer"},(0,r.kt)("inlineCode",{parentName:"a"},"RingBuffer")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("p",null,"Create new ring buffer and copy elements from this ring buffer."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_RingBuffer.RingBuffer"},(0,r.kt)("inlineCode",{parentName:"a"},"RingBuffer")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("p",null,"Newly created ring buffer."),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L40"},"packages/engine/src/common/classes/RingBuffer.ts:40")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"empty"},"empty"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"empty"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether the buffer is empty or not."),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L227"},"packages/engine/src/common/classes/RingBuffer.ts:227")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromarray"},"fromArray"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fromArray"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resize?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Fill up the ring buffer with array elements.\\\nIf array contains more element than size of ring buffer then excess elements will not be included in array.\nTo include every elements set ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"resize"))," to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"true")),"."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array containing elements.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resize")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether resize current ring buffer.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L182"},"packages/engine/src/common/classes/RingBuffer.ts:182")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"full"},"full"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"full"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether the buffer is full or not."),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L222"},"packages/engine/src/common/classes/RingBuffer.ts:222")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"get"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"index"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Get element at given index from ring buffer."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"index")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Index of the element which will be retrieved.")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Element in the given index or undefined if not found."),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L97"},"packages/engine/src/common/classes/RingBuffer.ts:97")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getbufferlength"},"getBufferLength"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getBufferLength"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"count of elements in the ring buffer."),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L76"},"packages/engine/src/common/classes/RingBuffer.ts:76")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getfirst"},"getFirst"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getFirst"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Get first element from the ring buffer."),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"First element of ring buffer."),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L117"},"packages/engine/src/common/classes/RingBuffer.ts:117")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getlast"},"getLast"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getLast"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Get last element from the ring buffer."),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Last element of ring buffer."),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L125"},"packages/engine/src/common/classes/RingBuffer.ts:125")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpos"},"getPos"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getPos"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"current position on the ring buffer."),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L71"},"packages/engine/src/common/classes/RingBuffer.ts:71")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getsize"},"getSize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getSize"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"size of the ring buffer."),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L66"},"packages/engine/src/common/classes/RingBuffer.ts:66")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pop"},"pop"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"pop"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Remove and return element from current position."),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Removed element from current position."),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L154"},"packages/engine/src/common/classes/RingBuffer.ts:154")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"poplast"},"popLast"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"popLast"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Remove and return last element from ring buffer."),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"last element from ring buffer."),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L162"},"packages/engine/src/common/classes/RingBuffer.ts:162")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remove"},"remove"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"remove"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"index"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"count?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,r.kt)("p",null,"Remove element(s) from the ring buffer."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"index")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Index From which element(s) will be removed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"count")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of element(s) to be removed.")))),(0,r.kt)("h4",{id:"returns-15"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,r.kt)("p",null,"Array of removed element(s)."),(0,r.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L135"},"packages/engine/src/common/classes/RingBuffer.ts:135")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"resize"},"resize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"resize"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"newSize"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Resize ring buffer with given size."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newSize")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"new size of the buffer.")))),(0,r.kt)("h4",{id:"returns-16"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L205"},"packages/engine/src/common/classes/RingBuffer.ts:205")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"toarray"},"toArray"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toArray"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,r.kt)("p",null,"Generates array from ring buffer."),(0,r.kt)("h4",{id:"returns-17"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,r.kt)("p",null,"generated array containing ring buffer elements."),(0,r.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L171"},"packages/engine/src/common/classes/RingBuffer.ts:171")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromarray-1"},"fromArray"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromArray"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"size?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_RingBuffer.RingBuffer"},(0,r.kt)("inlineCode",{parentName:"a"},"RingBuffer")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("p",null,"Create ring buffer from array."),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array of element(s).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Size of ring array.")))),(0,r.kt)("h4",{id:"returns-18"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_RingBuffer.RingBuffer"},(0,r.kt)("inlineCode",{parentName:"a"},"RingBuffer")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/common/classes/RingBuffer.ts#L22"},"packages/engine/src/common/classes/RingBuffer.ts:22")))}m.isMDXComponent=!0}}]);