"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[9949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=o(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,p(p({ref:t},d),{},{components:n})):r.createElement(h,p({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={id:"physics_functions_physxHelpers",title:"Module: physics/functions/physxHelpers",sidebar_label:"physics/functions/physxHelpers",sidebar_position:0,custom_edit_url:null},p=void 0,l={unversionedId:"Api/engine/modules/physics_functions_physxHelpers",id:"Api/engine/modules/physics_functions_physxHelpers",title:"Module: physics/functions/physxHelpers",description:"Functions",source:"@site/docs/Api/engine/modules/physics_functions_physxHelpers.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/physics_functions_physxHelpers",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_functions_physxHelpers",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"physics_functions_physxHelpers",title:"Module: physics/functions/physxHelpers",sidebar_label:"physics/functions/physxHelpers",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"physics/functions/physicsObjectDebugFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_functions_physicsObjectDebugFunctions"},next:{title:"physics/functions/quickhull",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_functions_quickhull"}},s={},o=[{value:"Functions",id:"functions",level:2},{value:"getFromPhysXHeap",id:"getfromphysxheap",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"putIntoPhysXHeap",id:"putintophysxheap",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"vectorToArray",id:"vectortoarray",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"getfromphysxheap"},"getFromPhysXHeap"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getFromPhysXHeap"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"heap"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"count"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"heap")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"address")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"count")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/caae330/packages/engine/src/physics/functions/physxHelpers.ts#L13"},"packages/engine/src/physics/functions/physxHelpers.ts:13")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"putintophysxheap"},"putIntoPhysXHeap"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"putIntoPhysXHeap"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"heap"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"array"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"heap")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"array")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ArrayLike"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"number"),">")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/caae330/packages/engine/src/physics/functions/physxHelpers.ts#L1"},"packages/engine/src/physics/functions/physxHelpers.ts:1")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"vectortoarray"},"vectorToArray"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"vectorToArray"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"vector"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"vector")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"VectorBase"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/caae330/packages/engine/src/physics/functions/physxHelpers.ts#L23"},"packages/engine/src/physics/functions/physxHelpers.ts:23")))}u.isMDXComponent=!0}}]);