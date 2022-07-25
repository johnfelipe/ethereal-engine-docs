"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=o(n),c=r,N=m["".concat(d,".").concat(c)]||m[c]||k[c]||i;return n?a.createElement(N,p(p({ref:t},s),{},{components:n})):a.createElement(N,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var o=2;o<i;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={id:"scene_functions_loaders_EnvMapBakeFunctions",title:"Module: scene/functions/loaders/EnvMapBakeFunctions",sidebar_label:"scene/functions/loaders/EnvMapBakeFunctions",sidebar_position:0,custom_edit_url:null},p=void 0,l={unversionedId:"Api/engine/modules/scene_functions_loaders_EnvMapBakeFunctions",id:"Api/engine/modules/scene_functions_loaders_EnvMapBakeFunctions",title:"Module: scene/functions/loaders/EnvMapBakeFunctions",description:"Variables",source:"@site/docs/Api/engine/modules/scene_functions_loaders_EnvMapBakeFunctions.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_functions_loaders_EnvMapBakeFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_EnvMapBakeFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_loaders_EnvMapBakeFunctions",title:"Module: scene/functions/loaders/EnvMapBakeFunctions",sidebar_label:"scene/functions/loaders/EnvMapBakeFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/functions/loaders/DirectionalLightFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_DirectionalLightFunctions"},next:{title:"scene/functions/loaders/EnvMapFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_EnvMapFunctions"}},d={},o=[{value:"Variables",id:"variables",level:2},{value:"SCENE_COMPONENT_ENVMAP_BAKE",id:"scene_component_envmap_bake",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"SCENE_COMPONENT_ENVMAP_BAKE_DEFAULT_VALUES",id:"scene_component_envmap_bake_default_values",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions",level:2},{value:"deserializeEnvMapBake",id:"deserializeenvmapbake",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"parseEnvMapBakeProperties",id:"parseenvmapbakeproperties",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"prepareSceneForBake",id:"preparesceneforbake",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"serializeEnvMapBake",id:"serializeenvmapbake",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"updateEnvMapBake",id:"updateenvmapbake",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:o};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"scene_component_envmap_bake"},"SCENE","_","COMPONENT","_","ENVMAP","_","BAKE"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","ENVMAP","_","BAKE"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"envmapbake"')),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts#L36"},"packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scene_component_envmap_bake_default_values"},"SCENE","_","COMPONENT","_","ENVMAP","_","BAKE","_","DEFAULT","_","VALUES"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","ENVMAP","_","BAKE","_","DEFAULT","_","VALUES"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"bakePosition"),": { ",(0,r.kt)("inlineCode",{parentName:"td"},"x"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0; ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0; ",(0,r.kt)("inlineCode",{parentName:"td"},"z"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0 } ; ",(0,r.kt)("inlineCode",{parentName:"td"},"bakePositionOffset"),": { ",(0,r.kt)("inlineCode",{parentName:"td"},"x"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0; ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0; ",(0,r.kt)("inlineCode",{parentName:"td"},"z"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0 } ; ",(0,r.kt)("inlineCode",{parentName:"td"},"bakeScale"),": { ",(0,r.kt)("inlineCode",{parentName:"td"},"x"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,r.kt)("inlineCode",{parentName:"td"},"z"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 1 } ; ",(0,r.kt)("inlineCode",{parentName:"td"},"bakeType"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/scene_types_EnvMapBakeTypes.EnvMapBakeTypes"},(0,r.kt)("inlineCode",{parentName:"a"},"EnvMapBakeTypes"))," = EnvMapBakeTypes.Baked; ",(0,r.kt)("inlineCode",{parentName:"td"},"boxProjection"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," = true; ",(0,r.kt)("inlineCode",{parentName:"td"},"envMapOrigin"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = ''; ",(0,r.kt)("inlineCode",{parentName:"td"},"refreshMode"),": ",(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/scene_types_EnvMapBakeRefreshTypes.EnvMapBakeRefreshTypes"},(0,r.kt)("inlineCode",{parentName:"a"},"EnvMapBakeRefreshTypes"))," = EnvMapBakeRefreshTypes.OnAwake; ",(0,r.kt)("inlineCode",{parentName:"td"},"resolution"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 2048 }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakePosition")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"x"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0; ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0; ",(0,r.kt)("inlineCode",{parentName:"td"},"z"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0 }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakePosition.x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakePosition.y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakePosition.z")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakePositionOffset")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"x"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0; ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0; ",(0,r.kt)("inlineCode",{parentName:"td"},"z"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0 }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakePositionOffset.x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakePositionOffset.y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakePositionOffset.z")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakeScale")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"x"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,r.kt)("inlineCode",{parentName:"td"},"y"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,r.kt)("inlineCode",{parentName:"td"},"z"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 1 }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakeScale.x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakeScale.y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakeScale.z")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.bakeType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/scene_types_EnvMapBakeTypes.EnvMapBakeTypes"},(0,r.kt)("inlineCode",{parentName:"a"},"EnvMapBakeTypes")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.boxProjection")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.envMapOrigin")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.refreshMode")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/scene_types_EnvMapBakeRefreshTypes.EnvMapBakeRefreshTypes"},(0,r.kt)("inlineCode",{parentName:"a"},"EnvMapBakeRefreshTypes")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.resolution")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts#L37"},"packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts:37")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"deserializeenvmapbake"},"deserializeEnvMapBake"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deserializeEnvMapBake"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"componentData"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"componentData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ComponentJson"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts#L50"},"packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"parseenvmapbakeproperties"},"parseEnvMapBakeProperties"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"parseEnvMapBakeProperties"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_EnvMapBakeComponent#envmapbakecomponenttype"},(0,r.kt)("inlineCode",{parentName:"a"},"EnvMapBakeComponentType"))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"props")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_EnvMapBakeComponent#envmapbakecomponenttype"},(0,r.kt)("inlineCode",{parentName:"a"},"EnvMapBakeComponentType"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts#L123"},"packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts:123")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"preparesceneforbake"},"prepareSceneForBake"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"prepareSceneForBake"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"world?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Scene")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,r.kt)("inlineCode",{parentName:"a"},"World")))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Scene")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts#L98"},"packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts:98")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serializeenvmapbake"},"serializeEnvMapBake"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"serializeEnvMapBake"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts#L86"},"packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts:86")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updateenvmapbake"},"updateEnvMapBake"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"updateEnvMapBake"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"properties?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"properties?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts#L79"},"packages/engine/src/scene/functions/loaders/EnvMapBakeFunctions.ts:79")))}k.isMDXComponent=!0}}]);