"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[55275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"src_dbmodels_MatchUser.MatchUserInterface",title:"Interface: MatchUserInterface",sidebar_label:"MatchUserInterface",custom_edit_url:null},o=void 0,d={unversionedId:"API/common/interfaces/src_dbmodels_MatchUser.MatchUserInterface",id:"API/common/interfaces/src_dbmodels_MatchUser.MatchUserInterface",title:"Interface: MatchUserInterface",description:"src/dbmodels/MatchUser.MatchUserInterface",source:"@site/docs/API/common/interfaces/src_dbmodels_MatchUser.MatchUserInterface.md",sourceDirName:"API/common/interfaces",slug:"/API/common/interfaces/src_dbmodels_MatchUser.MatchUserInterface",permalink:"/ethereal-engine-docs/docs/API/common/interfaces/src_dbmodels_MatchUser.MatchUserInterface",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_dbmodels_MatchUser.MatchUserInterface",title:"Interface: MatchUserInterface",sidebar_label:"MatchUserInterface",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"MatchInstanceInterface",permalink:"/ethereal-engine-docs/docs/API/common/interfaces/src_dbmodels_MatchInstance.MatchInstanceInterface"},next:{title:"MessageInterface",permalink:"/ethereal-engine-docs/docs/API/common/interfaces/src_dbmodels_Message.MessageInterface"}},c={},s=[{value:"Properties",id:"properties",level:2},{value:"connection",id:"connection",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"createdAt",id:"createdat",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"gamemode",id:"gamemode",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"ticketId",id:"ticketid",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"updatedAt",id:"updatedat",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"user",id:"user",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"userId",id:"userid",level:3},{value:"Defined in",id:"defined-in-7",level:4}],l={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/common/modules/src_dbmodels_MatchUser"},"src/dbmodels/MatchUser"),".MatchUserInterface"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"connection"},"connection"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"connection"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/common/src/dbmodels/MatchUser.ts#L7"},"src/dbmodels/MatchUser.ts:7")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"createdat"},"createdAt"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"createdAt"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/common/src/dbmodels/MatchUser.ts#L10"},"src/dbmodels/MatchUser.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gamemode"},"gamemode"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"gamemode"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/common/src/dbmodels/MatchUser.ts#L6"},"src/dbmodels/MatchUser.ts:6")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/common/src/dbmodels/MatchUser.ts#L4"},"src/dbmodels/MatchUser.ts:4")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ticketid"},"ticketId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"ticketId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/common/src/dbmodels/MatchUser.ts#L5"},"src/dbmodels/MatchUser.ts:5")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"updatedat"},"updatedAt"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"updatedAt"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/common/src/dbmodels/MatchUser.ts#L11"},"src/dbmodels/MatchUser.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"user"},"user"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"user"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/common/interfaces/src_dbmodels_UserInterface.UserInterface"},(0,a.kt)("inlineCode",{parentName:"a"},"UserInterface"))),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/common/src/dbmodels/MatchUser.ts#L9"},"src/dbmodels/MatchUser.ts:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"userid"},"userId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"userId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29f46e5/packages/common/src/dbmodels/MatchUser.ts#L8"},"src/dbmodels/MatchUser.ts:8")))}p.isMDXComponent=!0}}]);