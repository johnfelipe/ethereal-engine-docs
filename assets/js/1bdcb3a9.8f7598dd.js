"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[44694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),s=r,f=c["".concat(p,".").concat(s)]||c[s]||u[s]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"common_functions_updateKeyVal",title:"Module: common/functions/updateKeyVal",sidebar_label:"common/functions/updateKeyVal",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"Api/engine/modules/common_functions_updateKeyVal",id:"Api/engine/modules/common_functions_updateKeyVal",title:"Module: common/functions/updateKeyVal",description:"Functions",source:"@site/docs/Api/engine/modules/common_functions_updateKeyVal.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/common_functions_updateKeyVal",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_updateKeyVal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_updateKeyVal",title:"Module: common/functions/updateKeyVal",sidebar_label:"common/functions/updateKeyVal",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"common/functions/string",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_string"},next:{title:"common/functions/vectorHelpers",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_vectorHelpers"}},p={},d=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"default"},"default"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"default"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Val"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateArgs"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"updateFn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateFunction"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Val"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateArgs"),">"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Key"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Val")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Val"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UpdateArgs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"get")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"key"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Key"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"Val"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"set")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"key"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Key"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"val"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Val"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"Val"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"updateFn")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UpdateMediatorFunction"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Val"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"UpdateArgs"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"defaultValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Val"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UpdateFunction"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Val"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateArgs"),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/engine/src/common/functions/updateKeyVal.ts#L7"},"packages/engine/src/common/functions/updateKeyVal.ts:7")))}u.isMDXComponent=!0}}]);