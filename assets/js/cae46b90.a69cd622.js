"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[60176],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={id:"hooks_set_project_id_in_query",title:"Module: hooks/set-project-id-in-query",sidebar_label:"hooks/set-project-id-in-query",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"API/server-core/modules/hooks_set_project_id_in_query",id:"API/server-core/modules/hooks_set_project_id_in_query",title:"Module: hooks/set-project-id-in-query",description:"Functions",source:"@site/docs/API/server-core/modules/hooks_set_project_id_in_query.md",sourceDirName:"API/server-core/modules",slug:"/API/server-core/modules/hooks_set_project_id_in_query",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/hooks_set_project_id_in_query",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hooks_set_project_id_in_query",title:"Module: hooks/set-project-id-in-query",sidebar_label:"hooks/set-project-id-in-query",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"hooks/set-loggedin-user-in-query",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/hooks_set_loggedin_user_in_query"},next:{title:"hooks/set-response-status-code",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/hooks_set_response_status_code"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"default"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Hook"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Hook"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4da575b/packages/server-core/src/hooks/set-project-id-in-query.ts#L3"},"packages/server-core/src/hooks/set-project-id-in-query.ts:3")))}u.isMDXComponent=!0}}]);