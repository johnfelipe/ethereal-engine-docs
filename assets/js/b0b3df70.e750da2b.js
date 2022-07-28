"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[81985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=s,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),s=(n(67294),n(3905));const l={id:"ecs_classes_World",title:"Module: ecs/classes/World",sidebar_label:"ecs/classes/World",sidebar_position:0,custom_edit_url:null},a=void 0,o={unversionedId:"API/engine/modules/ecs_classes_World",id:"API/engine/modules/ecs_classes_World",title:"Module: ecs/classes/World",description:"Classes",source:"@site/docs/API/engine/modules/ecs_classes_World.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/ecs_classes_World",permalink:"/docs/docs/API/engine/modules/ecs_classes_World",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ecs_classes_World",title:"Module: ecs/classes/World",sidebar_label:"ecs/classes/World",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ecs/classes/EntityTree",permalink:"/docs/docs/API/engine/modules/ecs_classes_EntityTree"},next:{title:"ecs/functions/ComponentFunctions",permalink:"/docs/docs/API/engine/modules/ecs_functions_ComponentFunctions"}},i={},d=[{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2},{value:"CreateWorld",id:"createworld",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"createWorld",id:"createworld-1",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"destroyWorld",id:"destroyworld",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"classes"},"Classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/docs/API/engine/classes/ecs_classes_World.World"},"World"))),(0,s.kt)("h2",{id:"variables"},"Variables"),(0,s.kt)("h3",{id:"createworld"},"CreateWorld"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"CreateWorld"),": typeof ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/ecs_classes_World#createworld"},(0,s.kt)("inlineCode",{parentName:"a"},"CreateWorld"))),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/ecs/classes/World.ts#L52"},"packages/engine/src/ecs/classes/World.ts:52")),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"createworld-1"},"createWorld"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"createWorld"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/classes/ecs_classes_World.World"},(0,s.kt)("inlineCode",{parentName:"a"},"World"))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/classes/ecs_classes_World.World"},(0,s.kt)("inlineCode",{parentName:"a"},"World"))),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/ecs/classes/World.ts#L333"},"packages/engine/src/ecs/classes/World.ts:333")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"destroyworld"},"destroyWorld"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"destroyWorld"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"world")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/classes/ecs_classes_World.World"},(0,s.kt)("inlineCode",{parentName:"a"},"World")))))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/ecs/classes/World.ts#L337"},"packages/engine/src/ecs/classes/World.ts:337")))}p.isMDXComponent=!0}}]);