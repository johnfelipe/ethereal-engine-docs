"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[24952],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),s=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=n,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(v,l(l({ref:r},p),{},{components:t})):a.createElement(v,l({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54386:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const i={id:"user_avatar_generateAvatarThumbnail",title:"Module: user/avatar/generateAvatarThumbnail",sidebar_label:"user/avatar/generateAvatarThumbnail",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"Api/server-core/modules/user_avatar_generateAvatarThumbnail",id:"Api/server-core/modules/user_avatar_generateAvatarThumbnail",title:"Module: user/avatar/generateAvatarThumbnail",description:"Functions",source:"@site/docs/Api/server-core/modules/user_avatar_generateAvatarThumbnail.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/user_avatar_generateAvatarThumbnail",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/user_avatar_generateAvatarThumbnail",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"user_avatar_generateAvatarThumbnail",title:"Module: user/avatar/generateAvatarThumbnail",sidebar_label:"user/avatar/generateAvatarThumbnail",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"user/avatar/avatar-helper",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/user_avatar_avatar_helper"},next:{title:"user/email/email",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/user_email_email"}},u={},s=[{value:"Functions",id:"functions",level:2},{value:"generateAvatarThumbnail",id:"generateavatarthumbnail",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:s};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"generateavatarthumbnail"},"generateAvatarThumbnail"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"generateAvatarThumbnail"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"avatarModel"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"avatarModel")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Buffer"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer"),">"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/server-core/src/user/avatar/generateAvatarThumbnail.ts#L77"},"packages/server-core/src/user/avatar/generateAvatarThumbnail.ts:77")))}c.isMDXComponent=!0}}]);