"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[73850],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const r={id:"scene_functions_loaders_SplineFunctions",title:"Module: scene/functions/loaders/SplineFunctions",sidebar_label:"scene/functions/loaders/SplineFunctions",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"Api/engine/modules/scene_functions_loaders_SplineFunctions",id:"Api/engine/modules/scene_functions_loaders_SplineFunctions",title:"Module: scene/functions/loaders/SplineFunctions",description:"Variables",source:"@site/docs/Api/engine/modules/scene_functions_loaders_SplineFunctions.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_functions_loaders_SplineFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_SplineFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_loaders_SplineFunctions",title:"Module: scene/functions/loaders/SplineFunctions",sidebar_label:"scene/functions/loaders/SplineFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/functions/loaders/SpawnPointFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_SpawnPointFunctions"},next:{title:"scene/functions/loaders/SpotLightFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_SpotLightFunctions"}},o={},s=[{value:"Variables",id:"variables",level:2},{value:"SCENE_COMPONENT_SPLINE",id:"scene_component_spline",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"SCENE_COMPONENT_SPLINE_DEFAULT_VALUES",id:"scene_component_spline_default_values",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions",level:2},{value:"deserializeSpline",id:"deserializespline",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"parseSplineProperties",id:"parsesplineproperties",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"serializeSpline",id:"serializespline",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"updateSpline",id:"updatespline",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4}],d={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"scene_component_spline"},"SCENE","_","COMPONENT","_","SPLINE"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","SPLINE"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"spline"')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/scene/functions/loaders/SplineFunctions.ts#L19"},"packages/engine/src/scene/functions/loaders/SplineFunctions.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scene_component_spline_default_values"},"SCENE","_","COMPONENT","_","SPLINE","_","DEFAULT","_","VALUES"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","SPLINE","_","DEFAULT","_","VALUES"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"splinePositions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Vector3"),"[]")))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/scene/functions/loaders/SplineFunctions.ts#L20"},"packages/engine/src/scene/functions/loaders/SplineFunctions.ts:20")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"deserializespline"},"deserializeSpline"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"deserializeSpline"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"componentData"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"componentData")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ComponentJson"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/scene/functions/loaders/SplineFunctions.ts#L24"},"packages/engine/src/scene/functions/loaders/SplineFunctions.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parsesplineproperties"},"parseSplineProperties"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"parseSplineProperties"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"): ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_SplineComponent#splinecomponenttype"},(0,i.kt)("inlineCode",{parentName:"a"},"SplineComponentType"))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"props")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_SplineComponent#splinecomponenttype"},(0,i.kt)("inlineCode",{parentName:"a"},"SplineComponentType"))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/scene/functions/loaders/SplineFunctions.ts#L62"},"packages/engine/src/scene/functions/loaders/SplineFunctions.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializespline"},"serializeSpline"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"serializeSpline"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/scene/functions/loaders/SplineFunctions.ts#L50"},"packages/engine/src/scene/functions/loaders/SplineFunctions.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatespline"},"updateSpline"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateSpline"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"properties?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"properties?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/scene/functions/loaders/SplineFunctions.ts#L48"},"packages/engine/src/scene/functions/loaders/SplineFunctions.ts:48")))}c.isMDXComponent=!0}}]);