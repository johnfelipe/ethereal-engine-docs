"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[36677],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=s(a),c=n,u=k["".concat(o,".").concat(c)]||k[c]||m[c]||i;return a?r.createElement(u,l(l({ref:t},d),{},{components:a})):r.createElement(u,l({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},67915:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={id:"media_file_browser_file_browser_class.FileBrowserService",title:"Class: FileBrowserService",sidebar_label:"FileBrowserService",custom_edit_url:null},l=void 0,p={unversionedId:"Api/server-core/classes/media_file_browser_file_browser_class.FileBrowserService",id:"Api/server-core/classes/media_file_browser_file_browser_class.FileBrowserService",title:"Class: FileBrowserService",description:"media/file-browser/file-browser.class.FileBrowserService",source:"@site/docs/Api/server-core/classes/media_file_browser_file_browser_class.FileBrowserService.md",sourceDirName:"Api/server-core/classes",slug:"/Api/server-core/classes/media_file_browser_file_browser_class.FileBrowserService",permalink:"/ethereal-engine-docs/docs/Api/server-core/classes/media_file_browser_file_browser_class.FileBrowserService",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"media_file_browser_file_browser_class.FileBrowserService",title:"Class: FileBrowserService",sidebar_label:"FileBrowserService",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"MatchUser",permalink:"/ethereal-engine-docs/docs/Api/server-core/classes/matchmaking_match_user_match_user_class.MatchUser"},next:{title:"StaticResource",permalink:"/ethereal-engine-docs/docs/Api/server-core/classes/media_static_resource_static_resource_class.StaticResource"}},o={},s=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"app",id:"app",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"find",id:"find",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"patch",id:"patch",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"remove",id:"remove",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"setup",id:"setup",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Implementation of",id:"implementation-of-6",level:4},{value:"Defined in",id:"defined-in-8",level:4}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/modules/media_file_browser_file_browser_class"},"media/file-browser/file-browser.class"),".FileBrowserService"),(0,n.kt)("p",null,"A class for Managing files in FileBrowser"),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ServiceMethods"),"<",(0,n.kt)("inlineCode",{parentName:"li"},"any"),">")),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new FileBrowserService"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"app"),")"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"app")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Application"))))),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/media/file-browser/file-browser.class.ts#L40"},"packages/server-core/src/media/file-browser/file-browser.class.ts:40")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"app"},"app"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"app"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Application")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/media/file-browser/file-browser.class.ts#L38"},"packages/server-core/src/media/file-browser/file-browser.class.ts:38")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"create"},"create"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"create"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"directory"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("p",null,"Create a directory"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"directory")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,n.kt)("p",null,"ServiceMethods.create"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/media/file-browser/file-browser.class.ts#L103"},"packages/server-core/src/media/file-browser/file-browser.class.ts:103")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"find"},"find"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"find"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"_params?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_params?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Params"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,n.kt)("p",null,"ServiceMethods.find"),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/media/file-browser/file-browser.class.ts#L45"},"packages/server-core/src/media/file-browser/file-browser.class.ts:45")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"get"},"get"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"get"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"directory"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"FileContentType"),">",">"),(0,n.kt)("p",null,"Return the metadata for each file in a directory"),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"directory")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Params"))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"FileContentType"),">",">"),(0,n.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,n.kt)("p",null,"ServiceMethods.get"),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/media/file-browser/file-browser.class.ts#L53"},"packages/server-core/src/media/file-browser/file-browser.class.ts:53")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"patch"},"patch"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"patch"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"Upload file"),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"id")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"NullableId"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"PatchParams"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Params"))))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,n.kt)("p",null,"ServiceMethods.patch"),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/media/file-browser/file-browser.class.ts#L153"},"packages/server-core/src/media/file-browser/file-browser.class.ts:153")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"remove"},"remove"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"remove"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("p",null,"Remove a directory"),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Params"))))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,n.kt)("p",null,"ServiceMethods.remove"),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/media/file-browser/file-browser.class.ts#L184"},"packages/server-core/src/media/file-browser/file-browser.class.ts:184")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setup"},"setup"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setup"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"app"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"path"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"app")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Application"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,n.kt)("p",null,"ServiceMethods.setup"),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/media/file-browser/file-browser.class.ts#L44"},"packages/server-core/src/media/file-browser/file-browser.class.ts:44")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"update"},"update"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"update"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("p",null,"Move content from one path to another"),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"id")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"NullableId"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"UpdateParamsType"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Params"))))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"implementation-of-6"},"Implementation of"),(0,n.kt)("p",null,"ServiceMethods.update"),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/media/file-browser/file-browser.class.ts#L126"},"packages/server-core/src/media/file-browser/file-browser.class.ts:126")))}m.isMDXComponent=!0}}]);