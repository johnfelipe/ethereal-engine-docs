"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[57735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=i.createContext({}),o=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=o(n),h=s,u=d["".concat(c,".").concat(h)]||d[h]||y[h]||r;return n?i.createElement(u,a(a({ref:t},l),{},{components:n})):i.createElement(u,a({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:s,a[1]=p;for(var o=2;o<r;o++)a[o]=n[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var i=n(87462),s=(n(67294),n(3905));const r={id:"physics_types_PhysicsTypes.RaycastHit",title:"Interface: RaycastHit",sidebar_label:"RaycastHit",custom_edit_url:null},a=void 0,p={unversionedId:"Api/engine/interfaces/physics_types_PhysicsTypes.RaycastHit",id:"Api/engine/interfaces/physics_types_PhysicsTypes.RaycastHit",title:"Interface: RaycastHit",description:"physics/types/PhysicsTypes.RaycastHit",source:"@site/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RaycastHit.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/physics_types_PhysicsTypes.RaycastHit",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RaycastHit",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"physics_types_PhysicsTypes.RaycastHit",title:"Interface: RaycastHit",sidebar_label:"RaycastHit",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"QuatFragment",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.QuatFragment"},next:{title:"RigidBody",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RigidBody"}},c={},o=[{value:"Properties",id:"properties",level:2},{value:"_bodyID",id:"_bodyid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"body",id:"body",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"distance",id:"distance",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"normal",id:"normal",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"position",id:"position",level:3},{value:"Defined in",id:"defined-in-4",level:4}],l={toc:o};function y(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_types_PhysicsTypes"},"physics/types/PhysicsTypes"),".RaycastHit"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"_bodyid"},"_","bodyID"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"_","bodyID"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/physics/types/PhysicsTypes.ts#L135"},"packages/engine/src/physics/types/PhysicsTypes.ts:135")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"body"},"body"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"body"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.RigidBody"},(0,s.kt)("inlineCode",{parentName:"a"},"RigidBody"))),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/physics/types/PhysicsTypes.ts#L134"},"packages/engine/src/physics/types/PhysicsTypes.ts:134")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"distance"},"distance"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"distance"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/physics/types/PhysicsTypes.ts#L131"},"packages/engine/src/physics/types/PhysicsTypes.ts:131")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"normal"},"normal"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"normal"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},(0,s.kt)("inlineCode",{parentName:"a"},"Vec3"))),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/physics/types/PhysicsTypes.ts#L133"},"packages/engine/src/physics/types/PhysicsTypes.ts:133")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"position"},"position"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"position"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},(0,s.kt)("inlineCode",{parentName:"a"},"Vec3"))),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4df672f/packages/engine/src/physics/types/PhysicsTypes.ts#L132"},"packages/engine/src/physics/types/PhysicsTypes.ts:132")))}y.isMDXComponent=!0}}]);