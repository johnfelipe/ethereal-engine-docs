"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[84505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={id:"common_functions_checkPositionIsValid",title:"Module: common/functions/checkPositionIsValid",sidebar_label:"common/functions/checkPositionIsValid",sidebar_position:0,custom_edit_url:null},r=void 0,l={unversionedId:"Api/engine/modules/common_functions_checkPositionIsValid",id:"Api/engine/modules/common_functions_checkPositionIsValid",title:"Module: common/functions/checkPositionIsValid",description:"Functions",source:"@site/docs/Api/engine/modules/common_functions_checkPositionIsValid.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/common_functions_checkPositionIsValid",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_checkPositionIsValid",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_checkPositionIsValid",title:"Module: common/functions/checkPositionIsValid",sidebar_label:"common/functions/checkPositionIsValid",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"common/functions/bitFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_bitFunctions"},next:{title:"common/functions/createInlineWorkerFromString",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_createInlineWorkerFromString"}},c={},s=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"default"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"position"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onlyAllowPositionOnGround?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"raycastDirection?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("p",null,"Checks if given position is a valid position to move avatar too."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"position")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"onlyAllowPositionOnGround")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"raycastDirection")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("p",null,"{\npositionValid, the given position is a valid position\nraycastHit, the raycastHit result of the physics raycast\n}"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"positionValid")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"raycastHit")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/common/functions/checkPositionIsValid.ts#L16"},"packages/engine/src/common/functions/checkPositionIsValid.ts:16")))}p.isMDXComponent=!0}}]);