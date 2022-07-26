"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[43616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,u=d["".concat(s,".").concat(y)]||d[y]||m[y]||r;return n?a.createElement(u,i(i({ref:t},l),{},{components:n})):a.createElement(u,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={id:"physics_components_RaycastComponent",title:"Module: physics/components/RaycastComponent",sidebar_label:"physics/components/RaycastComponent",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"Api/engine/modules/physics_components_RaycastComponent",id:"Api/engine/modules/physics_components_RaycastComponent",title:"Module: physics/components/RaycastComponent",description:"Type Aliases",source:"@site/docs/Api/engine/modules/physics_components_RaycastComponent.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/physics_components_RaycastComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_RaycastComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"physics_components_RaycastComponent",title:"Module: physics/components/RaycastComponent",sidebar_label:"physics/components/RaycastComponent",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"physics/components/RapierCollisionComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_RapierCollisionComponent"},next:{title:"physics/components/RigidBodyComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_RigidBodyComponent"}},s={},c=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"RaycastComponentType",id:"raycastcomponenttype",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Variables",id:"variables",level:2},{value:"RaycastComponent",id:"raycastcomponent",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,o.kt)("h3",{id:"raycastcomponenttype"},"RaycastComponentType"),(0,o.kt)("p",null,"\u01ac ",(0,o.kt)("strong",{parentName:"p"},"RaycastComponentType"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"direction")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"flags")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hits")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RaycastHit"},(0,o.kt)("inlineCode",{parentName:"a"},"RaycastHit")),"[]")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"maxDistance")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"origin")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"type")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/physics_types_PhysicsTypes.SceneQueryType"},(0,o.kt)("inlineCode",{parentName:"a"},"SceneQueryType")))))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07e4bb7/packages/engine/src/physics/components/RaycastComponent.ts#L6"},"packages/engine/src/physics/components/RaycastComponent.ts:6")),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"raycastcomponent"},"RaycastComponent"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"RaycastComponent"),": ",(0,o.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,o.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_RaycastComponent#raycastcomponenttype"},(0,o.kt)("inlineCode",{parentName:"a"},"RaycastComponentType")),", {}",">"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07e4bb7/packages/engine/src/physics/components/RaycastComponent.ts#L15"},"packages/engine/src/physics/components/RaycastComponent.ts:15")))}m.isMDXComponent=!0}}]);