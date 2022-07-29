"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[27931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(d,".").concat(u)]||p[u]||k[u]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},56158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"networking_functions_NetworkPeerFunctions",title:"Module: networking/functions/NetworkPeerFunctions",sidebar_label:"networking/functions/NetworkPeerFunctions",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"API/engine/modules/networking_functions_NetworkPeerFunctions",id:"API/engine/modules/networking_functions_NetworkPeerFunctions",title:"Module: networking/functions/NetworkPeerFunctions",description:"Variables",source:"@site/docs/API/engine/modules/networking_functions_NetworkPeerFunctions.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/networking_functions_NetworkPeerFunctions",permalink:"/ethereal-engine-docs/docs/API/engine/modules/networking_functions_NetworkPeerFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_functions_NetworkPeerFunctions",title:"Module: networking/functions/NetworkPeerFunctions",sidebar_label:"networking/functions/NetworkPeerFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"networking/enums/MessageTypes",permalink:"/ethereal-engine-docs/docs/API/engine/modules/networking_enums_MessageTypes"},next:{title:"networking/functions/WorldNetworkAction",permalink:"/ethereal-engine-docs/docs/API/engine/modules/networking_functions_WorldNetworkAction"}},d={},s=[{value:"Variables",id:"variables",level:2},{value:"NetworkPeerFunctions",id:"networkpeerfunctions",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:s};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"networkpeerfunctions"},"NetworkPeerFunctions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"NetworkPeerFunctions"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"clearCachedActionsForUser")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"network"),": ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/classes/networking_classes_Network.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network")),", ",(0,a.kt)("inlineCode",{parentName:"td"},"userId"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"UserId"),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"createPeer")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"network"),": ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/classes/networking_classes_Network.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network")),", ",(0,a.kt)("inlineCode",{parentName:"td"},"userId"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"UserId"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"index"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"destroyAllPeers")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"network"),": ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/classes/networking_classes_Network.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network")),", ",(0,a.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"destroyPeer")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"network"),": ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/classes/networking_classes_Network.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network")),", ",(0,a.kt)("inlineCode",{parentName:"td"},"userId"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"UserId"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"world"),": ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"getCachedActionsForUser")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"network"),": ",(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/classes/networking_classes_Network.Network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network")),", ",(0,a.kt)("inlineCode",{parentName:"td"},"toUserId"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"UserId"),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"Action"),">","[]")))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/networking/functions/NetworkPeerFunctions.ts#L102"},"packages/engine/src/networking/functions/NetworkPeerFunctions.ts:102")))}k.isMDXComponent=!0}}]);