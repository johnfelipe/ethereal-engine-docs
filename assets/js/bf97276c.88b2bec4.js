"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[37546],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,u=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return t?i.createElement(u,o(o({ref:n},l),{},{components:t})):i.createElement(u,o({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},46596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var i=t(87462),r=(t(67294),t(3905));const a={id:"src_interfaces_AdminBot.CreateBotAsAdmin",title:"Interface: CreateBotAsAdmin",sidebar_label:"CreateBotAsAdmin",custom_edit_url:null},o=void 0,d={unversionedId:"API/common/interfaces/src_interfaces_AdminBot.CreateBotAsAdmin",id:"API/common/interfaces/src_interfaces_AdminBot.CreateBotAsAdmin",title:"Interface: CreateBotAsAdmin",description:"src/interfaces/AdminBot.CreateBotAsAdmin",source:"@site/docs/API/common/interfaces/src_interfaces_AdminBot.CreateBotAsAdmin.md",sourceDirName:"API/common/interfaces",slug:"/API/common/interfaces/src_interfaces_AdminBot.CreateBotAsAdmin",permalink:"/ethereal-engine-docs/docs/API/common/interfaces/src_interfaces_AdminBot.CreateBotAsAdmin",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_interfaces_AdminBot.CreateBotAsAdmin",title:"Interface: CreateBotAsAdmin",sidebar_label:"CreateBotAsAdmin",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"BotCommands",permalink:"/ethereal-engine-docs/docs/API/common/interfaces/src_interfaces_AdminBot.BotCommands"},next:{title:"CreateBotCammand",permalink:"/ethereal-engine-docs/docs/API/common/interfaces/src_interfaces_AdminBot.CreateBotCammand"}},c={},s=[{value:"Properties",id:"properties",level:2},{value:"command",id:"command",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"description",id:"description",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"instanceId",id:"instanceid",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"locationId",id:"locationid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"userId",id:"userid",level:3},{value:"Defined in",id:"defined-in-5",level:4}],l={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/common/modules/src_interfaces_AdminBot"},"src/interfaces/AdminBot"),".CreateBotAsAdmin"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"command"},"command"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"command"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/common/interfaces/src_interfaces_AdminBot.BotCommands"},(0,r.kt)("inlineCode",{parentName:"a"},"BotCommands")),"[]"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/common/src/interfaces/AdminBot.ts#L52"},"src/interfaces/AdminBot.ts:52")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"description"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/common/src/interfaces/AdminBot.ts#L53"},"src/interfaces/AdminBot.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instanceid"},"instanceId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"instanceId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/common/src/interfaces/AdminBot.ts#L50"},"src/interfaces/AdminBot.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"locationid"},"locationId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"locationId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/common/src/interfaces/AdminBot.ts#L54"},"src/interfaces/AdminBot.ts:54")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/common/src/interfaces/AdminBot.ts#L49"},"src/interfaces/AdminBot.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"userid"},"userId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"userId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/common/src/interfaces/AdminBot.ts#L51"},"src/interfaces/AdminBot.ts:51")))}m.isMDXComponent=!0}}]);