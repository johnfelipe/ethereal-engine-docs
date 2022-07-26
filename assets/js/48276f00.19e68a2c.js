"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[97763],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,f=m["".concat(o,".").concat(u)]||m[u]||c[u]||a;return t?i.createElement(f,d(d({ref:n},p),{},{components:t})):i.createElement(f,d({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,d=new Array(a);d[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var s=2;s<a;s++)d[s]=t[s];return i.createElement.apply(null,d)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(87462),r=(t(67294),t(3905));const a={id:"src_dbmodels_Invite.InviteInterface",title:"Interface: InviteInterface",sidebar_label:"InviteInterface",custom_edit_url:null},d=void 0,l={unversionedId:"Api/common/interfaces/src_dbmodels_Invite.InviteInterface",id:"Api/common/interfaces/src_dbmodels_Invite.InviteInterface",title:"Interface: InviteInterface",description:"src/dbmodels/Invite.InviteInterface",source:"@site/docs/Api/common/interfaces/src_dbmodels_Invite.InviteInterface.md",sourceDirName:"Api/common/interfaces",slug:"/Api/common/interfaces/src_dbmodels_Invite.InviteInterface",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_dbmodels_Invite.InviteInterface",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_dbmodels_Invite.InviteInterface",title:"Interface: InviteInterface",sidebar_label:"InviteInterface",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"InstanceserverSubdomainProvisionInterface",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_dbmodels_InstanceserverSubdomainProvision.InstanceserverSubdomainProvisionInterface"},next:{title:"InviteTypeInterface",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_dbmodels_InviteType.InviteTypeInterface"}},o={},s=[{value:"Properties",id:"properties",level:2},{value:"deleteOnUse",id:"deleteonuse",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"endTime",id:"endtime",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"identityProviderType",id:"identityprovidertype",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"makeAdmin",id:"makeadmin",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"passcode",id:"passcode",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"spawnDetails",id:"spawndetails",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"spawnType",id:"spawntype",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"startTime",id:"starttime",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"targetObjectId",id:"targetobjectid",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"timed",id:"timed",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"token",id:"token",level:3},{value:"Defined in",id:"defined-in-11",level:4}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/modules/src_dbmodels_Invite"},"src/dbmodels/Invite"),".InviteInterface"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"deleteonuse"},"deleteOnUse"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"deleteOnUse"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L7"},"src/dbmodels/Invite.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"endtime"},"endTime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"endTime"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L13"},"src/dbmodels/Invite.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L2"},"src/dbmodels/Invite.ts:2")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"identityprovidertype"},"identityProviderType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"identityProviderType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L4"},"src/dbmodels/Invite.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"makeadmin"},"makeAdmin"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"makeAdmin"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L8"},"src/dbmodels/Invite.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"passcode"},"passcode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"passcode"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L5"},"src/dbmodels/Invite.ts:5")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"spawndetails"},"spawnDetails"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"spawnDetails"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L10"},"src/dbmodels/Invite.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"spawntype"},"spawnType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"spawnType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L9"},"src/dbmodels/Invite.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"starttime"},"startTime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"startTime"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L12"},"src/dbmodels/Invite.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"targetobjectid"},"targetObjectId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"targetObjectId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L6"},"src/dbmodels/Invite.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"timed"},"timed"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"timed"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L11"},"src/dbmodels/Invite.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"token"},"token"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"token"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/common/src/dbmodels/Invite.ts#L3"},"src/dbmodels/Invite.ts:3")))}c.isMDXComponent=!0}}]);