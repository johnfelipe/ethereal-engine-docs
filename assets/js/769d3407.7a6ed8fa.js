"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[35774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"hooks_matchmaking_save_ticket",title:"Module: hooks/matchmaking-save-ticket",sidebar_label:"hooks/matchmaking-save-ticket",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"API/server-core/modules/hooks_matchmaking_save_ticket",id:"API/server-core/modules/hooks_matchmaking_save_ticket",title:"Module: hooks/matchmaking-save-ticket",description:"Functions",source:"@site/docs/API/server-core/modules/hooks_matchmaking_save_ticket.md",sourceDirName:"API/server-core/modules",slug:"/API/server-core/modules/hooks_matchmaking_save_ticket",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/hooks_matchmaking_save_ticket",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_matchmaking_save_ticket",title:"Module: hooks/matchmaking-save-ticket",sidebar_label:"hooks/matchmaking-save-ticket",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"hooks/matchmaking-restrict-multiple-queueing",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/hooks_matchmaking_restrict_multiple_queueing"},next:{title:"hooks/message-permission-authenticate",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/hooks_message_permission_authenticate"}},c={},l=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"default"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Hook"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Hook"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9df86e6/packages/server-core/src/hooks/matchmaking-save-ticket.ts#L5"},"packages/server-core/src/hooks/matchmaking-save-ticket.ts:5")))}u.isMDXComponent=!0}}]);