"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[27352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,u=p["".concat(d,".").concat(g)]||p[g]||s[g]||a;return n?r.createElement(u,i(i({ref:t},m),{},{components:n})):r.createElement(u,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"common_functions_getSignedAngleBetweenVectors",title:"Module: common/functions/getSignedAngleBetweenVectors",sidebar_label:"common/functions/getSignedAngleBetweenVectors",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"Api/engine/modules/common_functions_getSignedAngleBetweenVectors",id:"Api/engine/modules/common_functions_getSignedAngleBetweenVectors",title:"Module: common/functions/getSignedAngleBetweenVectors",description:"Functions",source:"@site/docs/Api/engine/modules/common_functions_getSignedAngleBetweenVectors.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/common_functions_getSignedAngleBetweenVectors",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_getSignedAngleBetweenVectors",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_getSignedAngleBetweenVectors",title:"Module: common/functions/getSignedAngleBetweenVectors",sidebar_label:"common/functions/getSignedAngleBetweenVectors",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"common/functions/getEnvironment",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_getEnvironment"},next:{title:"common/functions/getURLParams",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_getURLParams"}},d={},c=[{value:"Functions",id:"functions",level:2},{value:"getSignedAngleBetweenVectors",id:"getsignedanglebetweenvectors",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],m={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"getsignedanglebetweenvectors"},"getSignedAngleBetweenVectors"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getSignedAngleBetweenVectors"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"v1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"v2"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"normal?"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dotTreshold?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Finds an angle between two vectors with a sign relative to normal vector."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"v1")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"undefined")),(0,o.kt)("td",{parentName:"tr",align:"left"},"First Vector.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"v2")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"undefined")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Second Vector.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"normal")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"undefined")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Normal Vector.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"dotTreshold")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.0005")),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Angle between two vectors."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/engine/src/common/functions/getSignedAngleBetweenVectors.ts#L12"},"packages/engine/src/common/functions/getSignedAngleBetweenVectors.ts:12")))}s.isMDXComponent=!0}}]);