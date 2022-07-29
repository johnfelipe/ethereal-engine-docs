"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[90120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(n),u=r,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={id:"interaction_systems_InteractiveSystem",title:"Module: interaction/systems/InteractiveSystem",sidebar_label:"interaction/systems/InteractiveSystem",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"API/engine/modules/interaction_systems_InteractiveSystem",id:"API/engine/modules/interaction_systems_InteractiveSystem",title:"Module: interaction/systems/InteractiveSystem",description:"Functions",source:"@site/docs/API/engine/modules/interaction_systems_InteractiveSystem.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/interaction_systems_InteractiveSystem",permalink:"/ethereal-engine-docs/docs/API/engine/modules/interaction_systems_InteractiveSystem",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"interaction_systems_InteractiveSystem",title:"Module: interaction/systems/InteractiveSystem",sidebar_label:"interaction/systems/InteractiveSystem",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"interaction/systems/EquippableSystem",permalink:"/ethereal-engine-docs/docs/API/engine/modules/interaction_systems_EquippableSystem"},next:{title:"interaction/systems/MediaControlSystem",permalink:"/ethereal-engine-docs/docs/API/engine/modules/interaction_systems_MediaControlSystem"}},d={},o=[{value:"Functions",id:"functions",level:2},{value:"addInteractableUI",id:"addinteractableui",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getInteractiveUI",id:"getinteractiveui",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"removeInteractiveUI",id:"removeinteractiveui",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:o};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"addinteractableui"},"addInteractableUI"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addInteractableUI"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"xrui"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"update?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"xrui")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,r.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"State"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", {}",">",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"update?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"entity"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,r.kt)("inlineCode",{parentName:"td"},"xrui"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,r.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"State"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", {}",">",">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/interaction/systems/InteractiveSystem.ts#L72"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:72")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"default"},"default"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"default"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/interaction/systems/InteractiveSystem.ts#L94"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:94")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getinteractiveui"},"getInteractiveUI"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getInteractiveUI"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"InteractiveType")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"InteractiveType")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/interaction/systems/InteractiveSystem.ts#L69"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:69")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removeinteractiveui"},"removeInteractiveUI"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"removeInteractiveUI"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/engine/src/interaction/systems/InteractiveSystem.ts#L70"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:70")))}m.isMDXComponent=!0}}]);