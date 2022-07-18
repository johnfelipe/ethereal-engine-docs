"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[11931],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>h});var i=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},o=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,p=e.originalType,l=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),d=c(t),h=s,u=d["".concat(l,".").concat(h)]||d[h]||y[h]||p;return t?i.createElement(u,r(r({ref:n},o),{},{components:t})):i.createElement(u,r({ref:n},o))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var p=t.length,r=new Array(p);r[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,r[1]=a;for(var c=2;c<p;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var i=t(87462),s=(t(67294),t(3905));const p={id:"physics_types_PhysicsTypes.PhysXConfig",title:"Interface: PhysXConfig",sidebar_label:"PhysXConfig",custom_edit_url:null},r=void 0,a={unversionedId:"Api/engine/interfaces/physics_types_PhysicsTypes.PhysXConfig",id:"Api/engine/interfaces/physics_types_PhysicsTypes.PhysXConfig",title:"Interface: PhysXConfig",description:"physics/types/PhysicsTypes.PhysXConfig",source:"@site/docs/Api/engine/interfaces/physics_types_PhysicsTypes.PhysXConfig.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/physics_types_PhysicsTypes.PhysXConfig",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.PhysXConfig",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"physics_types_PhysicsTypes.PhysXConfig",title:"Interface: PhysXConfig",sidebar_label:"PhysXConfig",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ObstacleType",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.ObstacleType"},next:{title:"Quat",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Quat"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"bounceThresholdVelocity",id:"bouncethresholdvelocity",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"gravity",id:"gravity",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"lengthScale",id:"lengthscale",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"start",id:"start",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"stepTime",id:"steptime",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"substeps",id:"substeps",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"verbose",id:"verbose",level:3},{value:"Defined in",id:"defined-in-6",level:4}],o={toc:c};function y(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_types_PhysicsTypes"},"physics/types/PhysicsTypes"),".PhysXConfig"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"bouncethresholdvelocity"},"bounceThresholdVelocity"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"bounceThresholdVelocity"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c246203/packages/engine/src/physics/types/PhysicsTypes.ts#L7"},"packages/engine/src/physics/types/PhysicsTypes.ts:7")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"gravity"},"gravity"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"gravity"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/physics_types_PhysicsTypes.Vec3"},(0,s.kt)("inlineCode",{parentName:"a"},"Vec3"))),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c246203/packages/engine/src/physics/types/PhysicsTypes.ts#L10"},"packages/engine/src/physics/types/PhysicsTypes.ts:10")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"lengthscale"},"lengthScale"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"lengthScale"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c246203/packages/engine/src/physics/types/PhysicsTypes.ts#L5"},"packages/engine/src/physics/types/PhysicsTypes.ts:5")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"start"},"start"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"start"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c246203/packages/engine/src/physics/types/PhysicsTypes.ts#L6"},"packages/engine/src/physics/types/PhysicsTypes.ts:6")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"steptime"},"stepTime"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"stepTime"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c246203/packages/engine/src/physics/types/PhysicsTypes.ts#L4"},"packages/engine/src/physics/types/PhysicsTypes.ts:4")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"substeps"},"substeps"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"substeps"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c246203/packages/engine/src/physics/types/PhysicsTypes.ts#L9"},"packages/engine/src/physics/types/PhysicsTypes.ts:9")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"verbose"},"verbose"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"verbose"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c246203/packages/engine/src/physics/types/PhysicsTypes.ts#L8"},"packages/engine/src/physics/types/PhysicsTypes.ts:8")))}y.isMDXComponent=!0}}]);