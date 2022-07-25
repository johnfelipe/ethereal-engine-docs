"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[27462],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?i.createElement(k,r(r({ref:n},d),{},{components:t})):i.createElement(k,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},44751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const o={id:"scene_functions_loaders_MountPointFunctions",title:"Module: scene/functions/loaders/MountPointFunctions",sidebar_label:"scene/functions/loaders/MountPointFunctions",sidebar_position:0,custom_edit_url:null},r=void 0,l={unversionedId:"Api/engine/modules/scene_functions_loaders_MountPointFunctions",id:"Api/engine/modules/scene_functions_loaders_MountPointFunctions",title:"Module: scene/functions/loaders/MountPointFunctions",description:"Variables",source:"@site/docs/Api/engine/modules/scene_functions_loaders_MountPointFunctions.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_functions_loaders_MountPointFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_MountPointFunctions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_functions_loaders_MountPointFunctions",title:"Module: scene/functions/loaders/MountPointFunctions",sidebar_label:"scene/functions/loaders/MountPointFunctions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/functions/loaders/ModelFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_ModelFunctions"},next:{title:"scene/functions/loaders/OceanFunctions",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_functions_loaders_OceanFunctions"}},s={},p=[{value:"Variables",id:"variables",level:2},{value:"SCENE_COMPONENT_MOUNT_POINT",id:"scene_component_mount_point",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"SCENE_COMPONENT_MOUNT_POINT_DEFAULT_VALUES",id:"scene_component_mount_point_default_values",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions",level:2},{value:"deserializeMountPoint",id:"deserializemountpoint",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"parseMountPointProperties",id:"parsemountpointproperties",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"serializeMountPoint",id:"serializemountpoint",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"scene_component_mount_point"},"SCENE","_","COMPONENT","_","MOUNT","_","POINT"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","MOUNT","_","POINT"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"mount-point"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/scene/functions/loaders/MountPointFunctions.ts#L9"},"packages/engine/src/scene/functions/loaders/MountPointFunctions.ts:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scene_component_mount_point_default_values"},"SCENE","_","COMPONENT","_","MOUNT","_","POINT","_","DEFAULT","_","VALUES"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"SCENE","_","COMPONENT","_","MOUNT","_","POINT","_","DEFAULT","_","VALUES"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/scene/functions/loaders/MountPointFunctions.ts#L10"},"packages/engine/src/scene/functions/loaders/MountPointFunctions.ts:10")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"deserializemountpoint"},"deserializeMountPoint"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"deserializeMountPoint"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"componentData"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"componentData")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ComponentJson"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/scene/functions/loaders/MountPointFunctions.ts#L14"},"packages/engine/src/scene/functions/loaders/MountPointFunctions.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"parsemountpointproperties"},"parseMountPointProperties"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"parseMountPointProperties"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"props"),"): ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_ChairComponent#mountpointcomponenttype"},(0,a.kt)("inlineCode",{parentName:"a"},"MountPointComponentType"))),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"props")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_ChairComponent#mountpointcomponenttype"},(0,a.kt)("inlineCode",{parentName:"a"},"MountPointComponentType"))),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/scene/functions/loaders/MountPointFunctions.ts#L34"},"packages/engine/src/scene/functions/loaders/MountPointFunctions.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"serializemountpoint"},"serializeMountPoint"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"serializeMountPoint"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentJson"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/scene/functions/loaders/MountPointFunctions.ts#L23"},"packages/engine/src/scene/functions/loaders/MountPointFunctions.ts:23")))}u.isMDXComponent=!0}}]);