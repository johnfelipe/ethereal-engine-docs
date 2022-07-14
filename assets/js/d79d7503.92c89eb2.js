"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[26681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={id:"src_util_StoredLocalState",title:"Module: src/util/StoredLocalState",sidebar_label:"src/util/StoredLocalState",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"Api/client-core/modules/src_util_StoredLocalState",id:"Api/client-core/modules/src_util_StoredLocalState",title:"Module: src/util/StoredLocalState",description:"Classes",source:"@site/docs/Api/client-core/modules/src_util_StoredLocalState.md",sourceDirName:"Api/client-core/modules",slug:"/Api/client-core/modules/src_util_StoredLocalState",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_util_StoredLocalState",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"src_util_StoredLocalState",title:"Module: src/util/StoredLocalState",sidebar_label:"src/util/StoredLocalState",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"src/util/GlobalStyle",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_util_GlobalStyle"},next:{title:"src/util/config",permalink:"/ethereal-engine-docs/docs/Api/client-core/modules/src_util_config"}},c={},d=[{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2},{value:"StoredLocalStoreService",id:"storedlocalstoreservice",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"LocalStateServiceReceptor",id:"localstateservicereceptor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"accessStoredLocalState",id:"accessstoredlocalstate",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"useStoredLocalState",id:"usestoredlocalstate",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"classes"},"Classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/client-core/classes/src_util_StoredLocalState.StoredLocalAction"},"StoredLocalAction"))),(0,n.kt)("h2",{id:"variables"},"Variables"),(0,n.kt)("h3",{id:"storedlocalstoreservice"},"StoredLocalStoreService"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"StoredLocalStoreService"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")),(0,n.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fetchLocalStoredState")),(0,n.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,n.kt)("inlineCode",{parentName:"td"},"void"))))),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fe3d2f1/packages/client-core/src/util/StoredLocalState.ts#L30"},"client-core/src/util/StoredLocalState.ts:30")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"localstateservicereceptor"},"LocalStateServiceReceptor"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"LocalStateServiceReceptor"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"action")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fe3d2f1/packages/client-core/src/util/StoredLocalState.ts#L14"},"client-core/src/util/StoredLocalState.ts:14")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"accessstoredlocalstate"},"accessStoredLocalState"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"accessStoredLocalState"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,n.kt)("inlineCode",{parentName:"p"},"authUser"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"AuthUser"),"  }",">"),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,n.kt)("inlineCode",{parentName:"p"},"authUser"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"AuthUser"),"  }",">"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fe3d2f1/packages/client-core/src/util/StoredLocalState.ts#L27"},"client-core/src/util/StoredLocalState.ts:27")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"usestoredlocalstate"},"useStoredLocalState"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"useStoredLocalState"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,n.kt)("inlineCode",{parentName:"p"},"authUser"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"AuthUser"),"  }",">"),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,n.kt)("inlineCode",{parentName:"p"},"authUser"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"AuthUser"),"  }",">"),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fe3d2f1/packages/client-core/src/util/StoredLocalState.ts#L28"},"client-core/src/util/StoredLocalState.ts:28")))}p.isMDXComponent=!0}}]);