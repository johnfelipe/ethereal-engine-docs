"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[29061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),y=o(n),h=i,m=y["".concat(p,".").concat(h)]||y[h]||c[h]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var o=2;o<r;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},92549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={id:"physics_types_PhysicsTypes",title:"Module: physics/types/PhysicsTypes",sidebar_label:"physics/types/PhysicsTypes",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"Api/engine/modules/physics_types_PhysicsTypes",id:"Api/engine/modules/physics_types_PhysicsTypes",title:"Module: physics/types/PhysicsTypes",description:"Enumerations",source:"@site/docs/Api/engine/modules/physics_types_PhysicsTypes.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/physics_types_PhysicsTypes",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_types_PhysicsTypes",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"physics_types_PhysicsTypes",title:"Module: physics/types/PhysicsTypes",sidebar_label:"physics/types/PhysicsTypes",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"physics/systems/PhysicsSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/physics_systems_PhysicsSystem"},next:{title:"renderer/EngineRendererConstants",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_EngineRendererConstants"}},p={},o=[{value:"Enumerations",id:"enumerations",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"ColliderHitEvent",id:"colliderhitevent",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"ColliderTypes",id:"collidertypes",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ControllerHitEvent",id:"controllerhitevent",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"ControllerObstacleHitEvent",id:"controllerobstaclehitevent",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:o};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"enumerations"},"Enumerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/enums/physics_types_PhysicsTypes.BodyType"},"BodyType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/enums/physics_types_PhysicsTypes.CollisionEvents"},"CollisionEvents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/enums/physics_types_PhysicsTypes.ControllerEvents"},"ControllerEvents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/enums/physics_types_PhysicsTypes.SceneQueryType"},"SceneQueryType"))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BodyConfig"},"BodyConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.BoxControllerConfig"},"BoxControllerConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.CapsuleControllerConfig"},"CapsuleControllerConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.ControllerConfig"},"ControllerConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.ControllerRigidBody"},"ControllerRigidBody")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.ObstacleConfig"},"ObstacleConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.ObstacleType"},"ObstacleType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.PhysXConfig"},"PhysXConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Quat"},"Quat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.QuatFragment"},"QuatFragment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RaycastHit"},"RaycastHit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RigidBody"},"RigidBody")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.SceneQuery"},"SceneQuery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions"},"ShapeOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},"Vec3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3Fragment"},"Vec3Fragment"))),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"colliderhitevent"},"ColliderHitEvent"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ColliderHitEvent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bodyOther")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PhysX.PxRigidActor"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bodySelf")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PhysX.PxRigidActor"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"contacts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ContactData"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"shapeOther")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PhysX.PxShape"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"shapeSelf")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PhysX.PxShape"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/physics_types_PhysicsTypes.CollisionEvents"},(0,i.kt)("inlineCode",{parentName:"a"},"CollisionEvents")))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L176"},"packages/engine/src/physics/types/PhysicsTypes.ts:176")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"collidertypes"},"ColliderTypes"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ColliderTypes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"box"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"ground"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"sphere"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"capsule"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"cylinder"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"convex"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"trimesh"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L1"},"packages/engine/src/physics/types/PhysicsTypes.ts:1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"controllerhitevent"},"ControllerHitEvent"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ControllerHitEvent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"body")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RigidBody"},(0,i.kt)("inlineCode",{parentName:"a"},"RigidBody")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"length")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"normal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},(0,i.kt)("inlineCode",{parentName:"a"},"Vec3")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"position")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},(0,i.kt)("inlineCode",{parentName:"a"},"Vec3")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"shape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PhysX.PxShape"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/physics_types_PhysicsTypes.ControllerEvents"},(0,i.kt)("inlineCode",{parentName:"a"},"ControllerEvents")))))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L153"},"packages/engine/src/physics/types/PhysicsTypes.ts:153")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"controllerobstaclehitevent"},"ControllerObstacleHitEvent"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ControllerObstacleHitEvent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"length")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"normal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},(0,i.kt)("inlineCode",{parentName:"a"},"Vec3")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"obstacle")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.ObstacleType"},(0,i.kt)("inlineCode",{parentName:"a"},"ObstacleType")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"position")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},(0,i.kt)("inlineCode",{parentName:"a"},"Vec3")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/physics_types_PhysicsTypes.ControllerEvents"},(0,i.kt)("inlineCode",{parentName:"a"},"ControllerEvents")))))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/physics/types/PhysicsTypes.ts#L162"},"packages/engine/src/physics/types/PhysicsTypes.ts:162")))}c.isMDXComponent=!0}}]);