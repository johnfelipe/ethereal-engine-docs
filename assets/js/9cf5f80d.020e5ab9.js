"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[85972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const l={id:"common_functions_applyThreshold",title:"Module: common/functions/applyThreshold",sidebar_label:"common/functions/applyThreshold",sidebar_position:0,custom_edit_url:null},a=void 0,i={unversionedId:"Api/engine/modules/common_functions_applyThreshold",id:"Api/engine/modules/common_functions_applyThreshold",title:"Module: common/functions/applyThreshold",description:"Functions",source:"@site/docs/Api/engine/modules/common_functions_applyThreshold.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/common_functions_applyThreshold",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_applyThreshold",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_applyThreshold",title:"Module: common/functions/applyThreshold",sidebar_label:"common/functions/applyThreshold",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"common/functions/Timer",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_Timer"},next:{title:"common/functions/applyVectorMatrixXZ",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_applyVectorMatrixXZ"}},p={},s=[{value:"Functions",id:"functions",level:2},{value:"applyThreshold",id:"applythreshold",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"applythreshold"},"applyThreshold"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"applyThreshold"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"threshold"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Apply Threshold on the number."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number on which threshold will be applied. Must be between -1 to 1 inclusive.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"threshold")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Threshold value. Must be between 0 to 1 inclusive.")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Threshold Value."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4092002/packages/engine/src/common/functions/applyThreshold.ts#L8"},"packages/engine/src/common/functions/applyThreshold.ts:8")))}u.isMDXComponent=!0}}]);