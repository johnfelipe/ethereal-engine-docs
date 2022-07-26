"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[30579],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,y=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(y,i(i({ref:t},f),{},{components:r})):n.createElement(y,i({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},51678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"scene_functions_arrayOfPointsToArrayOfVector3",title:"Module: scene/functions/arrayOfPointsToArrayOfVector3",sidebar_label:"scene/functions/arrayOfPointsToArrayOfVector3",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"Api/engine/modules/scene_functions_arrayOfPointsToArrayOfVector3",id:"Api/engine/modules/scene_functions_arrayOfPointsToArrayOfVector3",title:"Module: scene/functions/arrayOfPointsToArrayOfVector3",description:"Functions",source:"@site/docs/Api/engine/modules/scene_functions_arrayOfPointsToArrayOfVector3.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_functions_arrayOfPointsToArrayOfVector3",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_arrayOfPointsToArrayOfVector3",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_arrayOfPointsToArrayOfVector3",title:"Module: scene/functions/arrayOfPointsToArrayOfVector3",sidebar_label:"scene/functions/arrayOfPointsToArrayOfVector3",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/functions/addIsHelperFlag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_addIsHelperFlag"},next:{title:"scene/functions/bvhWorkerPool",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_bvhWorkerPool"}},c={},l=[{value:"Functions",id:"functions",level:2},{value:"arrayOfPointsToArrayOfVector3",id:"arrayofpointstoarrayofvector3",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],f={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"arrayofpointstoarrayofvector3"},"arrayOfPointsToArrayOfVector3"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"arrayOfPointsToArrayOfVector3"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"points"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector3"),"[]"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"points")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ArrayLike"),"<",(0,o.kt)("inlineCode",{parentName:"td"},"number"),">")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Vector3"),"[]"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/564bf1c/packages/engine/src/scene/functions/arrayOfPointsToArrayOfVector3.ts#L3"},"packages/engine/src/scene/functions/arrayOfPointsToArrayOfVector3.ts:3")))}u.isMDXComponent=!0}}]);