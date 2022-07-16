"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[80843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=p,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),p=(n(67294),n(3905));const r={id:"ecs_functions_ComponentFunctions.MappedComponentSetupAPI",title:"Class: MappedComponentSetupAPI<_Schema, _Type>",sidebar_label:"MappedComponentSetupAPI",custom_edit_url:null},i=void 0,l={unversionedId:"Api/engine/classes/ecs_functions_ComponentFunctions.MappedComponentSetupAPI",id:"Api/engine/classes/ecs_functions_ComponentFunctions.MappedComponentSetupAPI",title:"Class: MappedComponentSetupAPI<_Schema, _Type>",description:"ecs/functions/ComponentFunctions.MappedComponentSetupAPI",source:"@site/docs/Api/engine/classes/ecs_functions_ComponentFunctions.MappedComponentSetupAPI.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/ecs_functions_ComponentFunctions.MappedComponentSetupAPI",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_functions_ComponentFunctions.MappedComponentSetupAPI",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ecs_functions_ComponentFunctions.MappedComponentSetupAPI",title:"Class: MappedComponentSetupAPI<_Schema, _Type>",sidebar_label:"MappedComponentSetupAPI",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"World",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},next:{title:"OrbitControls",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/input_functions_OrbitControls.OrbitControls"}},o={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"schema",id:"schema",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"build",id:"build",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"withReactiveType",id:"withreactivetype",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"withSchema",id:"withschema",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"withType",id:"withtype",level:3},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions"},"ecs/functions/ComponentFunctions"),".MappedComponentSetupAPI"),(0,p.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"_Schema")),(0,p.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,p.kt)("inlineCode",{parentName:"td"},"bitECS.ISchema")," = ",(0,p.kt)("inlineCode",{parentName:"td"},"any"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"_Type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"any"))))),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"new MappedComponentSetupAPI"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"_Schema"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"_Type"),">","(",(0,p.kt)("inlineCode",{parentName:"p"},"name"),")"),(0,p.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"_Schema")),(0,p.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,p.kt)("inlineCode",{parentName:"td"},"ISchema")," = ",(0,p.kt)("inlineCode",{parentName:"td"},"any"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"_Type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"any"))))),(0,p.kt)("h4",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"string"))))),(0,p.kt)("h4",{id:"defined-in"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/engine/src/ecs/functions/ComponentFunctions.ts#L22"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:22")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"default"},"default"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"default"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"_Type")),(0,p.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/engine/src/ecs/functions/ComponentFunctions.ts#L23"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:23")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"name"},"name"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"name"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"schema"},"schema"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"schema"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"_Schema")),(0,p.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/engine/src/ecs/functions/ComponentFunctions.ts#L24"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:24")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"build"},"build"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"build"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,p.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"_Type"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"_Schema"),">"),(0,p.kt)("h4",{id:"returns"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,p.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"_Type"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"_Schema"),">"),(0,p.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/engine/src/ecs/functions/ComponentFunctions.ts#L41"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:41")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"withreactivetype"},"withReactiveType"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"withReactiveType"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,p.kt)("inlineCode",{parentName:"p"},"defaultState?"),"): ",(0,p.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_functions_ComponentFunctions.MappedComponentSetupAPI"},(0,p.kt)("inlineCode",{parentName:"a"},"MappedComponentSetupAPI")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"_Schema"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"State"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"T"),">",">"),(0,p.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,p.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,p.kt)("h4",{id:"parameters-1"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"defaultState?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T"))))),(0,p.kt)("h4",{id:"returns-1"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_functions_ComponentFunctions.MappedComponentSetupAPI"},(0,p.kt)("inlineCode",{parentName:"a"},"MappedComponentSetupAPI")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"_Schema"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"State"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"T"),">",">"),(0,p.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/engine/src/ecs/functions/ComponentFunctions.ts#L36"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:36")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"withschema"},"withSchema"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"withSchema"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"Schema"),">","(",(0,p.kt)("inlineCode",{parentName:"p"},"schema"),"): ",(0,p.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_functions_ComponentFunctions.MappedComponentSetupAPI"},(0,p.kt)("inlineCode",{parentName:"a"},"MappedComponentSetupAPI")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"Schema"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"_Type"),">"),(0,p.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"Schema")),(0,p.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,p.kt)("inlineCode",{parentName:"td"},"ISchema")," = {}")))),(0,p.kt)("h4",{id:"parameters-2"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"schema")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"Schema"))))),(0,p.kt)("h4",{id:"returns-2"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_functions_ComponentFunctions.MappedComponentSetupAPI"},(0,p.kt)("inlineCode",{parentName:"a"},"MappedComponentSetupAPI")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"Schema"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"_Type"),">"),(0,p.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/engine/src/ecs/functions/ComponentFunctions.ts#L26"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:26")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"withtype"},"withType"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"withType"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,p.kt)("inlineCode",{parentName:"p"},"defaultState?"),"): ",(0,p.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_functions_ComponentFunctions.MappedComponentSetupAPI"},(0,p.kt)("inlineCode",{parentName:"a"},"MappedComponentSetupAPI")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"_Schema"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,p.kt)("h4",{id:"type-parameters-4"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,p.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,p.kt)("h4",{id:"parameters-3"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"defaultState?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T"))))),(0,p.kt)("h4",{id:"returns-3"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_functions_ComponentFunctions.MappedComponentSetupAPI"},(0,p.kt)("inlineCode",{parentName:"a"},"MappedComponentSetupAPI")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"_Schema"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,p.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/engine/src/ecs/functions/ComponentFunctions.ts#L31"},"packages/engine/src/ecs/functions/ComponentFunctions.ts:31")))}m.isMDXComponent=!0}}]);