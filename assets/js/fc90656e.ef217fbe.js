"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[14630],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return t?i.createElement(f,o(o({ref:n},m),{},{components:t})):i.createElement(f,o({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},98190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const r={id:"avatar_animation_Util.AnimationType",title:"Enumeration: AnimationType",sidebar_label:"AnimationType",custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/enums/avatar_animation_Util.AnimationType",id:"Api/engine/enums/avatar_animation_Util.AnimationType",title:"Enumeration: AnimationType",description:"avatar/animation/Util.AnimationType",source:"@site/docs/Api/engine/enums/avatar_animation_Util.AnimationType.md",sourceDirName:"Api/engine/enums",slug:"/Api/engine/enums/avatar_animation_Util.AnimationType",permalink:"/ethereal-engine-docs/docs/Api/engine/enums/avatar_animation_Util.AnimationType",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"avatar_animation_Util.AnimationType",title:"Enumeration: AnimationType",sidebar_label:"AnimationType",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AssetType",permalink:"/ethereal-engine-docs/docs/Api/engine/enums/assets_enum_AssetType.AssetType"},next:{title:"CameraMode",permalink:"/ethereal-engine-docs/docs/Api/engine/enums/camera_types_CameraMode.CameraMode"}},p={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"STATIC",id:"static",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"VELOCITY_BASED",id:"velocity_based",level:3},{value:"Defined in",id:"defined-in-1",level:4}],m={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/avatar_animation_Util"},"avatar/animation/Util"),".AnimationType"),(0,a.kt)("p",null,"Animation type"),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"static"},"STATIC"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"STATIC")),(0,a.kt)("p",null,"Static will be rendered on demand"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fe3d2f1/packages/engine/src/avatar/animation/Util.ts#L93"},"packages/engine/src/avatar/animation/Util.ts:93")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"velocity_based"},"VELOCITY","_","BASED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"VELOCITY","_","BASED")),(0,a.kt)("p",null,"This type of animation will be rendred based on the velocity of the avatar"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fe3d2f1/packages/engine/src/avatar/animation/Util.ts#L96"},"packages/engine/src/avatar/animation/Util.ts:96")))}c.isMDXComponent=!0}}]);