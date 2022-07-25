"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[92673],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,v=c["".concat(p,".").concat(u)]||c[u]||s[u]||i;return a?n.createElement(v,o(o({ref:t},d),{},{components:a})):n.createElement(v,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={id:"avatar_animation_AvatarAnimationGraph",title:"Module: avatar/animation/AvatarAnimationGraph",sidebar_label:"avatar/animation/AvatarAnimationGraph",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/avatar_animation_AvatarAnimationGraph",id:"Api/engine/modules/avatar_animation_AvatarAnimationGraph",title:"Module: avatar/animation/AvatarAnimationGraph",description:"Functions",source:"@site/docs/Api/engine/modules/avatar_animation_AvatarAnimationGraph.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/avatar_animation_AvatarAnimationGraph",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_AvatarAnimationGraph",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"avatar_animation_AvatarAnimationGraph",title:"Module: avatar/animation/AvatarAnimationGraph",sidebar_label:"avatar/animation/AvatarAnimationGraph",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"avatar/animation/AnimationStateTransitionsRule",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_AnimationStateTransitionsRule"},next:{title:"avatar/animation/BlendSpace1D",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_BlendSpace1D"}},p={},m=[{value:"Functions",id:"functions",level:2},{value:"changeAvatarAnimationState",id:"changeavataranimationstate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"createAvatarAnimationGraph",id:"createavataranimationgraph",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"changeavataranimationstate"},"changeAvatarAnimationState"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"changeAvatarAnimationState"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"newStateName"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newStateName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/avatar/animation/AvatarAnimationGraph.ts#L355"},"packages/engine/src/avatar/animation/AvatarAnimationGraph.ts:355")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createavataranimationgraph"},"createAvatarAnimationGraph"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createAvatarAnimationGraph"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mixer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"velocity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"jumpValue"),"): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_AnimationGraph#animationgraph"},(0,r.kt)("inlineCode",{parentName:"a"},"AnimationGraph"))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mixer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationMixer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"velocity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"jumpValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," {}")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_AnimationGraph#animationgraph"},(0,r.kt)("inlineCode",{parentName:"a"},"AnimationGraph"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/avatar/animation/AvatarAnimationGraph.ts#L42"},"packages/engine/src/avatar/animation/AvatarAnimationGraph.ts:42")))}s.isMDXComponent=!0}}]);