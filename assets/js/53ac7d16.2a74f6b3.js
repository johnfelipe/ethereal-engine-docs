"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[58207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),g=i,c=u["".concat(d,".").concat(g)]||u[g]||m[g]||r;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"avatar_AnimationManager.AnimationManager",title:"Class: AnimationManager",sidebar_label:"AnimationManager",custom_edit_url:null},l=void 0,o={unversionedId:"Api/engine/classes/avatar_AnimationManager.AnimationManager",id:"Api/engine/classes/avatar_AnimationManager.AnimationManager",title:"Class: AnimationManager",description:"avatar/AnimationManager.AnimationManager",source:"@site/docs/Api/engine/classes/avatar_AnimationManager.AnimationManager.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/avatar_AnimationManager.AnimationManager",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/avatar_AnimationManager.AnimationManager",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"avatar_AnimationManager.AnimationManager",title:"Class: AnimationManager",sidebar_label:"AnimationManager",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AudioSettingAction",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/audio_AudioState.AudioSettingAction"},next:{title:"AvatarSettings",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/avatar_AvatarControllerSystem.AvatarSettings"}},d={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"_animations",id:"_animations",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"_defaultRootBone",id:"_defaultrootbone",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_defaultSkinnedMesh",id:"_defaultskinnedmesh",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_rootAnimationData",id:"_rootanimationdata",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"instance",id:"instance",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"getAnimationDuration",id:"getanimationduration",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getAnimations",id:"getanimations",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"loadDefaultAnimations",id:"loaddefaultanimations",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_AnimationManager"},"avatar/AnimationManager"),".AnimationManager"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new AnimationManager"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_animations"},"_","animations"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","animations"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationClip"),"[]"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/avatar/AnimationManager.ts#L12"},"packages/engine/src/avatar/AnimationManager.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_defaultrootbone"},"_","defaultRootBone"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","defaultRootBone"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Bone")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/avatar/AnimationManager.ts#L15"},"packages/engine/src/avatar/AnimationManager.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_defaultskinnedmesh"},"_","defaultSkinnedMesh"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","defaultSkinnedMesh"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SkinnedMesh"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/avatar/AnimationManager.ts#L13"},"packages/engine/src/avatar/AnimationManager.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_rootanimationdata"},"_","rootAnimationData"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","rootAnimationData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/avatar/AnimationManager.ts#L14"},"packages/engine/src/avatar/AnimationManager.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instance"},"instance"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"instance"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/avatar_AnimationManager.AnimationManager"},(0,i.kt)("inlineCode",{parentName:"a"},"AnimationManager"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/avatar/AnimationManager.ts#L10"},"packages/engine/src/avatar/AnimationManager.ts:10")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getanimationduration"},"getAnimationDuration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getAnimationDuration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/avatar/AnimationManager.ts#L17"},"packages/engine/src/avatar/AnimationManager.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getanimations"},"getAnimations"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getAnimations"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"gltf"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationClip"),"[]"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"gltf")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTF"},(0,i.kt)("inlineCode",{parentName:"a"},"GLTF")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AnimationClip"),"[]"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/avatar/AnimationManager.ts#L27"},"packages/engine/src/avatar/AnimationManager.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loaddefaultanimations"},"loadDefaultAnimations"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadDefaultAnimations"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"path?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'/default_assets/Animations.glb'"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d1196c8/packages/engine/src/avatar/AnimationManager.ts#L22"},"packages/engine/src/avatar/AnimationManager.ts:22")))}m.isMDXComponent=!0}}]);