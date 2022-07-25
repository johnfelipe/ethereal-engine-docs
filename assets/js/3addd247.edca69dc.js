"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[12191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"scene_functions_loaders_MaterialOverrideFunctions",title:"Module: scene/functions/loaders/MaterialOverrideFunctions",sidebar_label:"scene/functions/loaders/MaterialOverrideFunctions",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/scene_functions_loaders_MaterialOverrideFunctions",id:"Api/engine/modules/scene_functions_loaders_MaterialOverrideFunctions",title:"Module: scene/functions/loaders/MaterialOverrideFunctions",description:"Functions",source:"@site/docs/Api/engine/modules/scene_functions_loaders_MaterialOverrideFunctions.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_functions_loaders_MaterialOverrideFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_MaterialOverrideFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_loaders_MaterialOverrideFunctions",title:"Module: scene/functions/loaders/MaterialOverrideFunctions",sidebar_label:"scene/functions/loaders/MaterialOverrideFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/functions/loaders/LoopAnimationFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_LoopAnimationFunctions"},next:{title:"scene/functions/loaders/MediaFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_MediaFunctions"}},s={},d=[{value:"Functions",id:"functions",level:2},{value:"initializeOverride",id:"initializeoverride",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"refreshMaterials",id:"refreshmaterials",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"initializeoverride"},"initializeOverride"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"initializeOverride"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"override"),"): () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_MaterialOverrideComponent#materialoverridecomponenttype"},(0,a.kt)("inlineCode",{parentName:"a"},"MaterialOverrideComponentType"))," & ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions#soaproxy"},(0,a.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<{}",">",">"),(0,a.kt)("p",null,"Initializes material override in ecs system"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"target")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Entity holding the target model component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"override")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_MaterialOverrideComponent#materialoverridecomponenttype"},(0,a.kt)("inlineCode",{parentName:"a"},"MaterialOverrideComponentType"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Override data to be applied to target model")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fn")),(0,a.kt)("p",null,"Async function that executes loading textures and returns completely initialized override"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_MaterialOverrideComponent#materialoverridecomponenttype"},(0,a.kt)("inlineCode",{parentName:"a"},"MaterialOverrideComponentType"))," & ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions#soaproxy"},(0,a.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<{}",">",">"),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_MaterialOverrideComponent#materialoverridecomponenttype"},(0,a.kt)("inlineCode",{parentName:"a"},"MaterialOverrideComponentType"))," & ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions#soaproxy"},(0,a.kt)("inlineCode",{parentName:"a"},"SoAProxy")),"<{}",">",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/engine/src/scene/functions/loaders/MaterialOverrideFunctions.ts#L20"},"packages/engine/src/scene/functions/loaders/MaterialOverrideFunctions.ts:20")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"refreshmaterials"},"refreshMaterials"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"refreshMaterials"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"target"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_MaterialOverrideComponent#materialoverridecomponenttype"},(0,a.kt)("inlineCode",{parentName:"a"},"MaterialOverrideComponentType")),"[]",">"),(0,a.kt)("p",null,"Reapplies all material overrides on the target entity"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"target")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_MaterialOverrideComponent#materialoverridecomponenttype"},(0,a.kt)("inlineCode",{parentName:"a"},"MaterialOverrideComponentType")),"[]",">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/engine/src/scene/functions/loaders/MaterialOverrideFunctions.ts#L47"},"packages/engine/src/scene/functions/loaders/MaterialOverrideFunctions.ts:47")))}c.isMDXComponent=!0}}]);