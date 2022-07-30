"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[45415],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=p(t),y=i,g=m["".concat(s,".").concat(y)]||m[y]||l[y]||a;return t?o.createElement(g,r(r({ref:n},d),{},{components:t})):o.createElement(g,r({ref:n},d))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<a;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=t(87462),i=(t(67294),t(3905));const a={id:"physics_components_RigidBodyKinematicVelocityBasedTagComponent",title:"Module: physics/components/RigidBodyKinematicVelocityBasedTagComponent",sidebar_label:"physics/components/RigidBodyKinematicVelocityBasedTagComponent",sidebar_position:0,custom_edit_url:null},r=void 0,c={unversionedId:"API/engine/modules/physics_components_RigidBodyKinematicVelocityBasedTagComponent",id:"API/engine/modules/physics_components_RigidBodyKinematicVelocityBasedTagComponent",title:"Module: physics/components/RigidBodyKinematicVelocityBasedTagComponent",description:"Variables",source:"@site/docs/API/engine/modules/physics_components_RigidBodyKinematicVelocityBasedTagComponent.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/physics_components_RigidBodyKinematicVelocityBasedTagComponent",permalink:"/ethereal-engine-docs/docs/API/engine/modules/physics_components_RigidBodyKinematicVelocityBasedTagComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"physics_components_RigidBodyKinematicVelocityBasedTagComponent",title:"Module: physics/components/RigidBodyKinematicVelocityBasedTagComponent",sidebar_label:"physics/components/RigidBodyKinematicVelocityBasedTagComponent",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"physics/components/RigidBodyKinematicPositionBasedTagComponent",permalink:"/ethereal-engine-docs/docs/API/engine/modules/physics_components_RigidBodyKinematicPositionBasedTagComponent"},next:{title:"physics/components/ShapeCastComponent",permalink:"/ethereal-engine-docs/docs/API/engine/modules/physics_components_ShapeCastComponent"}},s={},p=[{value:"Variables",id:"variables",level:2},{value:"RigidBodyKinematicVelocityBasedTagComponent",id:"rigidbodykinematicvelocitybasedtagcomponent",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:p};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"rigidbodykinematicvelocitybasedtagcomponent"},"RigidBodyKinematicVelocityBasedTagComponent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"RigidBodyKinematicVelocityBasedTagComponent"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,i.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", {}",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/physics/components/RigidBodyKinematicVelocityBasedTagComponent.ts#L3"},"packages/engine/src/physics/components/RigidBodyKinematicVelocityBasedTagComponent.ts:3")))}l.isMDXComponent=!0}}]);