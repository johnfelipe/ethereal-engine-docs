"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[38705],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),o=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=o(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(t),u=a,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return t?i.createElement(k,l(l({ref:n},s),{},{components:t})):i.createElement(k,l({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<r;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var i=t(87462),a=(t(67294),t(3905));const r={id:"src_interfaces_Invite.SendInvite",title:"Interface: SendInvite",sidebar_label:"SendInvite",custom_edit_url:null},l=void 0,p={unversionedId:"Api/common/interfaces/src_interfaces_Invite.SendInvite",id:"Api/common/interfaces/src_interfaces_Invite.SendInvite",title:"Interface: SendInvite",description:"src/interfaces/Invite.SendInvite",source:"@site/docs/Api/common/interfaces/src_interfaces_Invite.SendInvite.md",sourceDirName:"Api/common/interfaces",slug:"/Api/common/interfaces/src_interfaces_Invite.SendInvite",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_Invite.SendInvite",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_interfaces_Invite.SendInvite",title:"Interface: SendInvite",sidebar_label:"SendInvite",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"InviteInterface",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_Invite.InviteInterface"},next:{title:"InviteType",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_InviteType.InviteType"}},d={},o=[{value:"Properties",id:"properties",level:2},{value:"deleteOnUse",id:"deleteonuse",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"endTime",id:"endtime",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"identityProviderType",id:"identityprovidertype",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"inviteCode",id:"invitecode",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"inviteType",id:"invitetype",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"inviteeId",id:"inviteeid",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"makeAdmin",id:"makeadmin",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"spawnDetails",id:"spawndetails",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"spawnType",id:"spawntype",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"startTime",id:"starttime",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"targetObjectId",id:"targetobjectid",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"timed",id:"timed",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"token",id:"token",level:3},{value:"Defined in",id:"defined-in-12",level:4}],s={toc:o};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/modules/src_interfaces_Invite"},"src/interfaces/Invite"),".SendInvite"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"deleteonuse"},"deleteOnUse"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"deleteOnUse"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L38"},"src/interfaces/Invite.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"endtime"},"endTime"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"endTime"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L43"},"src/interfaces/Invite.ts:43")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"identityprovidertype"},"identityProviderType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"identityProviderType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L35"},"src/interfaces/Invite.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"invitecode"},"inviteCode"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"inviteCode"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L33"},"src/interfaces/Invite.ts:33")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"invitetype"},"inviteType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"inviteType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L31"},"src/interfaces/Invite.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inviteeid"},"inviteeId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"inviteeId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L34"},"src/interfaces/Invite.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"makeadmin"},"makeAdmin"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"makeAdmin"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L37"},"src/interfaces/Invite.ts:37")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"spawndetails"},"spawnDetails"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"spawnDetails"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"inviteCode?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"spawnPoint?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"spectate?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L40"},"src/interfaces/Invite.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"spawntype"},"spawnType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"spawnType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L39"},"src/interfaces/Invite.ts:39")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"starttime"},"startTime"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"startTime"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L42"},"src/interfaces/Invite.ts:42")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"targetobjectid"},"targetObjectId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"targetObjectId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L36"},"src/interfaces/Invite.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"timed"},"timed"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"timed"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L41"},"src/interfaces/Invite.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"token"},"token"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"token"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/29764ae/packages/common/src/interfaces/Invite.ts#L32"},"src/interfaces/Invite.ts:32")))}c.isMDXComponent=!0}}]);