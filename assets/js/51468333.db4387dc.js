"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[65088],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.createContext({}),a=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=a(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=a(t),u=i,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return t?o.createElement(y,s(s({ref:n},c),{},{components:t})):o.createElement(y,s({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var a=2;a<l;a++)s[a]=t[a];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var o=t(87462),i=(t(67294),t(3905));const l={id:"physics_components_CollisionComponent",title:"Module: physics/components/CollisionComponent",sidebar_label:"physics/components/CollisionComponent",sidebar_position:0,custom_edit_url:null},s=void 0,r={unversionedId:"Api/engine/modules/physics_components_CollisionComponent",id:"Api/engine/modules/physics_components_CollisionComponent",title:"Module: physics/components/CollisionComponent",description:"Type Aliases",source:"@site/docs/Api/engine/modules/physics_components_CollisionComponent.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/physics_components_CollisionComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_CollisionComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"physics_components_CollisionComponent",title:"Module: physics/components/CollisionComponent",sidebar_label:"physics/components/CollisionComponent",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"physics/components/ColliderComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_ColliderComponent"},next:{title:"physics/components/ObstaclesComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_ObstaclesComponent"}},p={},a=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"CollisionComponentType",id:"collisioncomponenttype",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Variables",id:"variables",level:2},{value:"CollisionComponent",id:"collisioncomponent",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:a};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"collisioncomponenttype"},"CollisionComponentType"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"CollisionComponentType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"collisions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_types_PhysicsTypes#colliderhitevent"},(0,i.kt)("inlineCode",{parentName:"a"},"ColliderHitEvent"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_types_PhysicsTypes#controllerhitevent"},(0,i.kt)("inlineCode",{parentName:"a"},"ControllerHitEvent"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_types_PhysicsTypes#controllerobstaclehitevent"},(0,i.kt)("inlineCode",{parentName:"a"},"ControllerObstacleHitEvent")),")[]")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/engine/src/physics/components/CollisionComponent.ts#L4"},"packages/engine/src/physics/components/CollisionComponent.ts:4")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"collisioncomponent"},"CollisionComponent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CollisionComponent"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,i.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_components_CollisionComponent#collisioncomponenttype"},(0,i.kt)("inlineCode",{parentName:"a"},"CollisionComponentType")),", {}",">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/engine/src/physics/components/CollisionComponent.ts#L8"},"packages/engine/src/physics/components/CollisionComponent.ts:8")))}m.isMDXComponent=!0}}]);