"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[13576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=s,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},48594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const a={id:"user_sms_awssns",title:"Module: user/sms/awssns",sidebar_label:"user/sms/awssns",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"API/server-core/modules/user_sms_awssns",id:"API/server-core/modules/user_sms_awssns",title:"Module: user/sms/awssns",description:"Functions",source:"@site/docs/API/server-core/modules/user_sms_awssns.md",sourceDirName:"API/server-core/modules",slug:"/API/server-core/modules/user_sms_awssns",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/user_sms_awssns",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"user_sms_awssns",title:"Module: user/sms/awssns",sidebar_label:"user/sms/awssns",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"user/services",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/user_services"},next:{title:"user/strategies/custom-oauth",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/user_strategies_custom_oauth"}},l={},u=[{value:"Functions",id:"functions",level:2},{value:"sendSmsWithAWS",id:"sendsmswithaws",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"sendsmswithaws"},"sendSmsWithAWS"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"sendSmsWithAWS"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"phone"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"text"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"phone")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"text")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string"))))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/server-core/src/user/sms/awssns.ts#L6"},"packages/server-core/src/user/sms/awssns.ts:6")))}d.isMDXComponent=!0}}]);