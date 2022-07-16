"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[63074],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),o=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=o(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),f=o(t),u=r,m=f["".concat(p,".").concat(u)]||f[u]||c[u]||a;return t?i.createElement(m,l(l({ref:n},s),{},{components:t})):i.createElement(m,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=f;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var o=2;o<a;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var i=t(87462),r=(t(67294),t(3905));const a={id:"src_interfaces_Invite.InviteInterface",title:"Interface: InviteInterface",sidebar_label:"InviteInterface",custom_edit_url:null},l=void 0,d={unversionedId:"Api/common/interfaces/src_interfaces_Invite.InviteInterface",id:"Api/common/interfaces/src_interfaces_Invite.InviteInterface",title:"Interface: InviteInterface",description:"src/interfaces/Invite.InviteInterface",source:"@site/docs/Api/common/interfaces/src_interfaces_Invite.InviteInterface.md",sourceDirName:"Api/common/interfaces",slug:"/Api/common/interfaces/src_interfaces_Invite.InviteInterface",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_Invite.InviteInterface",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_interfaces_Invite.InviteInterface",title:"Interface: InviteInterface",sidebar_label:"InviteInterface",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"InstanceServerSetting",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_InstanceServerSetting.InstanceServerSetting"},next:{title:"SendInvite",permalink:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_Invite.SendInvite"}},p={},o=[{value:"Properties",id:"properties",level:2},{value:"createdAt",id:"createdat",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"deleteOnUse",id:"deleteonuse",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"identityProviderType",id:"identityprovidertype",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"inviteType",id:"invitetype",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"invitee",id:"invitee",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"inviteeId",id:"inviteeid",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"makeAdmin",id:"makeadmin",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"passcode",id:"passcode",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"spawnDetails",id:"spawndetails",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"spawnType",id:"spawntype",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"targetObjectId",id:"targetobjectid",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"token",id:"token",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"updatedAt",id:"updatedat",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"userId",id:"userid",level:3},{value:"Defined in",id:"defined-in-14",level:4}],s={toc:o};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/modules/src_interfaces_Invite"},"src/interfaces/Invite"),".InviteInterface"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"createdat"},"createdAt"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"createdAt"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L53"},"src/interfaces/Invite.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deleteonuse"},"deleteOnUse"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"deleteOnUse"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L50"},"src/interfaces/Invite.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L41"},"src/interfaces/Invite.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"identityprovidertype"},"identityProviderType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"identityProviderType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L47"},"src/interfaces/Invite.ts:47")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"invitetype"},"inviteType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"inviteType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L42"},"src/interfaces/Invite.ts:42")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"invitee"},"invitee"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"invitee"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/common/interfaces/src_interfaces_User.UserInterface"},(0,r.kt)("inlineCode",{parentName:"a"},"UserInterface"))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L46"},"src/interfaces/Invite.ts:46")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inviteeid"},"inviteeId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"inviteeId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L45"},"src/interfaces/Invite.ts:45")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"makeadmin"},"makeAdmin"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"makeAdmin"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L49"},"src/interfaces/Invite.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"passcode"},"passcode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"passcode"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L44"},"src/interfaces/Invite.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"spawndetails"},"spawnDetails"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"spawnDetails"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"inviteCode?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"spawnPoint?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"spectate?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L52"},"src/interfaces/Invite.ts:52")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"spawntype"},"spawnType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"spawnType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L51"},"src/interfaces/Invite.ts:51")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"targetobjectid"},"targetObjectId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"targetObjectId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L48"},"src/interfaces/Invite.ts:48")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"token"},"token"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"token"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L43"},"src/interfaces/Invite.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatedat"},"updatedAt"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"updatedAt"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L54"},"src/interfaces/Invite.ts:54")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"userid"},"userId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"userId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6e0692b/packages/common/src/interfaces/Invite.ts#L55"},"src/interfaces/Invite.ts:55")))}c.isMDXComponent=!0}}]);