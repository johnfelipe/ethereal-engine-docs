"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[35173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=o,k=m["".concat(l,".").concat(c)]||m[c]||d[c]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"hooks_remove_group_users",title:"Module: hooks/remove-group-users",sidebar_label:"hooks/remove-group-users",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"Api/server-core/modules/hooks_remove_group_users",id:"Api/server-core/modules/hooks_remove_group_users",title:"Module: hooks/remove-group-users",description:"Functions",source:"@site/docs/Api/server-core/modules/hooks_remove_group_users.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/hooks_remove_group_users",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_remove_group_users",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_remove_group_users",title:"Module: hooks/remove-group-users",sidebar_label:"hooks/remove-group-users",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"hooks/project-permission-authenticate",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_project_permission_authenticate"},next:{title:"hooks/remove-message-statuses",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/hooks_remove_message_statuses"}},l={},s=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in",level:4}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"default"),"(): (",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",") => ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fn")),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"HookContext"),"<",(0,o.kt)("inlineCode",{parentName:"td"},"Application"),"<",(0,o.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,o.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,o.kt)("h5",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"HookContext"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/11906ad/packages/server-core/src/hooks/remove-group-users.ts#L5"},"packages/server-core/src/hooks/remove-group-users.ts:5")))}d.isMDXComponent=!0}}]);