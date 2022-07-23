"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[29854],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=i.createContext({}),o=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=o(e.components);return i.createElement(l.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=o(t),h=s,u=d["".concat(l,".").concat(h)]||d[h]||y[h]||r;return t?i.createElement(u,p(p({ref:n},c),{},{components:t})):i.createElement(u,p({ref:n},c))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,p[1]=a;for(var o=2;o<r;o++)p[o]=t[o];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98118:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=t(87462),s=(t(67294),t(3905));const r={id:"physics_types_PhysicsTypes.ShapeOptions",title:"Interface: ShapeOptions",sidebar_label:"ShapeOptions",custom_edit_url:null},p=void 0,a={unversionedId:"Api/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions",id:"Api/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions",title:"Interface: ShapeOptions",description:"physics/types/PhysicsTypes.ShapeOptions",source:"@site/docs/Api/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.ShapeOptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"physics_types_PhysicsTypes.ShapeOptions",title:"Interface: ShapeOptions",sidebar_label:"ShapeOptions",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SceneQuery",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.SceneQuery"},next:{title:"Vec3",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"}},l={},o=[{value:"Properties",id:"properties",level:2},{value:"collisionLayer",id:"collisionlayer",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"collisionMask",id:"collisionmask",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"contactOffset",id:"contactoffset",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"isTrigger",id:"istrigger",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"restOffset",id:"restoffset",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"userData",id:"userdata",level:3},{value:"Defined in",id:"defined-in-5",level:4}],c={toc:o};function y(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_types_PhysicsTypes"},"physics/types/PhysicsTypes"),".ShapeOptions"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"collisionlayer"},"collisionLayer"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"collisionLayer"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/physics/types/PhysicsTypes.ts#L50"},"packages/engine/src/physics/types/PhysicsTypes.ts:50")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"collisionmask"},"collisionMask"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"collisionMask"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/physics/types/PhysicsTypes.ts#L51"},"packages/engine/src/physics/types/PhysicsTypes.ts:51")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"contactoffset"},"contactOffset"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"contactOffset"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/physics/types/PhysicsTypes.ts#L48"},"packages/engine/src/physics/types/PhysicsTypes.ts:48")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"istrigger"},"isTrigger"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"isTrigger"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/physics/types/PhysicsTypes.ts#L49"},"packages/engine/src/physics/types/PhysicsTypes.ts:49")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"restoffset"},"restOffset"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"restOffset"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/physics/types/PhysicsTypes.ts#L47"},"packages/engine/src/physics/types/PhysicsTypes.ts:47")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"userdata"},"userData"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"userData"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/physics/types/PhysicsTypes.ts#L46"},"packages/engine/src/physics/types/PhysicsTypes.ts:46")))}y.isMDXComponent=!0}}]);