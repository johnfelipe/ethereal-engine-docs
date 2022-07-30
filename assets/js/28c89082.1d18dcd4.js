"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[25409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(f,l(l({ref:t},s),{},{components:n})):i.createElement(f,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={id:"avatar_animation_Util.Animation",title:"Interface: Animation",sidebar_label:"Animation",custom_edit_url:null},l=void 0,o={unversionedId:"API/engine/interfaces/avatar_animation_Util.Animation",id:"API/engine/interfaces/avatar_animation_Util.Animation",title:"Interface: Animation",description:"avatar/animation/Util.Animation",source:"@site/docs/API/engine/interfaces/avatar_animation_Util.Animation.md",sourceDirName:"API/engine/interfaces",slug:"/API/engine/interfaces/avatar_animation_Util.Animation",permalink:"/ethereal-engine-docs/docs/API/engine/interfaces/avatar_animation_Util.Animation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"avatar_animation_Util.Animation",title:"Interface: Animation",sidebar_label:"Animation",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"GLTFReference",permalink:"/ethereal-engine-docs/docs/API/engine/interfaces/assets_loaders_gltf_GLTFLoader.GLTFReference"},next:{title:"quatAxis",permalink:"/ethereal-engine-docs/docs/API/engine/interfaces/common_functions_QuaternionUtils.quatAxis"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"action",id:"action",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"clip",id:"clip",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"loopCount",id:"loopcount",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"loopType",id:"looptype",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"timeScale",id:"timescale",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"transitionEndWeight",id:"transitionendweight",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"transitionStartWeight",id:"transitionstartweight",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"weight",id:"weight",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods",level:2},{value:"decorateAction",id:"decorateaction",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-9",level:4}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/avatar_animation_Util"},"avatar/animation/Util"),".Animation"),(0,a.kt)("p",null,"Interface to hold animation details"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"action"},"action"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"action"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimationAction")),(0,a.kt)("p",null,"Animation action for this animation"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/avatar/animation/Util.ts#L152"},"packages/engine/src/avatar/animation/Util.ts:152")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"clip"},"clip"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"clip"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimationClip")),(0,a.kt)("p",null,"Animation clip from the loaded animations"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/avatar/animation/Util.ts#L149"},"packages/engine/src/avatar/animation/Util.ts:149")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loopcount"},"loopCount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loopCount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Total loop counts"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/avatar/animation/Util.ts#L143"},"packages/engine/src/avatar/animation/Util.ts:143")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"looptype"},"loopType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loopType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimationActionLoopStyles")),(0,a.kt)("p",null,"Type of the loop"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/avatar/animation/Util.ts#L140"},"packages/engine/src/avatar/animation/Util.ts:140")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Name of the animation which must match with the loaded animations"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/avatar/animation/Util.ts#L128"},"packages/engine/src/avatar/animation/Util.ts:128")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"timescale"},"timeScale"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"timeScale"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Time scale of the animation. Default is 1. Value less then 1 will slow down the animation."),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/avatar/animation/Util.ts#L146"},"packages/engine/src/avatar/animation/Util.ts:146")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transitionendweight"},"transitionEndWeight"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transitionEndWeight"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Weight when transition will end. Value will be used to interpolate"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/avatar/animation/Util.ts#L137"},"packages/engine/src/avatar/animation/Util.ts:137")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transitionstartweight"},"transitionStartWeight"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transitionStartWeight"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Weight when transition will start. Value will be used to interpolate"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/avatar/animation/Util.ts#L134"},"packages/engine/src/avatar/animation/Util.ts:134")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"weight"},"weight"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"weight"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Weight of this animation"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/avatar/animation/Util.ts#L131"},"packages/engine/src/avatar/animation/Util.ts:131")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"decorateaction"},"decorateAction"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"decorateAction"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"A Decorator function to apply custom behaviour to the animation action"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"action")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"AnimationAction"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/avatar/animation/Util.ts#L155"},"packages/engine/src/avatar/animation/Util.ts:155")))}c.isMDXComponent=!0}}]);