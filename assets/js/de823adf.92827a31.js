"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[36241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"xrui_functions_createXRUI.XRUI",title:"Interface: XRUI<S>",sidebar_label:"XRUI",custom_edit_url:null},c=void 0,o={unversionedId:"Api/engine/interfaces/xrui_functions_createXRUI.XRUI",id:"Api/engine/interfaces/xrui_functions_createXRUI.XRUI",title:"Interface: XRUI<S>",description:"xrui/functions/createXRUI.XRUI",source:"@site/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/xrui_functions_createXRUI.XRUI",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"xrui_functions_createXRUI.XRUI",title:"Interface: XRUI<S>",sidebar_label:"XRUI",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Updatable",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/scene_interfaces_Updatable.Updatable"},next:{title:"Exports",permalink:"/ethereal-engine-docs/docs/Api/instanceserver/"}},l={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"container",id:"container",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"entity",id:"entity",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"state",id:"state",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/xrui_functions_createXRUI"},"xrui/functions/createXRUI"),".XRUI"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"S"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"container"},"container"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"container"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WebContainer3D")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/engine/src/xrui/functions/createXRUI.tsx#L63"},"packages/engine/src/xrui/functions/createXRUI.tsx:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entity"},"entity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/engine/src/xrui/functions/createXRUI.tsx#L61"},"packages/engine/src/xrui/functions/createXRUI.tsx:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"state"},"state"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"state"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"S")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/engine/src/xrui/functions/createXRUI.tsx#L62"},"packages/engine/src/xrui/functions/createXRUI.tsx:62")))}u.isMDXComponent=!0}}]);