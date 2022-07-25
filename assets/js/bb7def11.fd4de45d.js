"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[54134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(k,i(i({ref:t},o),{},{components:n})):r.createElement(k,i({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={id:"projects_scene_scene_parser",title:"Module: projects/scene/scene-parser",sidebar_label:"projects/scene/scene-parser",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"Api/server-core/modules/projects_scene_scene_parser",id:"Api/server-core/modules/projects_scene_scene_parser",title:"Module: projects/scene/scene-parser",description:"Variables",source:"@site/docs/Api/server-core/modules/projects_scene_scene_parser.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/projects_scene_scene_parser",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/projects_scene_scene_parser",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"projects_scene_scene_parser",title:"Module: projects/scene/scene-parser",sidebar_label:"projects/scene/scene-parser",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"projects/scene/scene-helper",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/projects_scene_scene_helper"},next:{title:"projects/seeder-config",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/projects_seeder_config"}},c={},p=[{value:"Variables",id:"variables",level:2},{value:"corsPath",id:"corspath",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"sceneCorsPathIdentifier",id:"scenecorspathidentifier",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"sceneRelativePathIdentifier",id:"scenerelativepathidentifier",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Functions",id:"functions",level:2},{value:"cleanSceneDataCacheURLs",id:"cleanscenedatacacheurls",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"parseSceneDataCacheURLs",id:"parsescenedatacacheurls",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"parseScenePortals",id:"parsesceneportals",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4}],o={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"corspath"},"corsPath"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"corsPath"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/projects/scene/scene-parser.ts#L10"},"packages/server-core/src/projects/scene/scene-parser.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scenecorspathidentifier"},"sceneCorsPathIdentifier"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"sceneCorsPathIdentifier"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"__$cors-proxy$__"')),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/projects/scene/scene-parser.ts#L9"},"packages/server-core/src/projects/scene/scene-parser.ts:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scenerelativepathidentifier"},"sceneRelativePathIdentifier"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"sceneRelativePathIdentifier"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"__$project$__"')),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/projects/scene/scene-parser.ts#L8"},"packages/server-core/src/projects/scene/scene-parser.ts:8")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"cleanscenedatacacheurls"},"cleanSceneDataCacheURLs"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"cleanSceneDataCacheURLs"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"sceneData"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cacheDomain"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"sceneData")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cacheDomain")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/projects/scene/scene-parser.ts#L31"},"packages/server-core/src/projects/scene/scene-parser.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"parsescenedatacacheurls"},"parseSceneDataCacheURLs"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"parseSceneDataCacheURLs"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"sceneData"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cacheDomain"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"sceneData")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cacheDomain")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/projects/scene/scene-parser.ts#L15"},"packages/server-core/src/projects/scene/scene-parser.ts:15")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"parsesceneportals"},"parseScenePortals"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"parseScenePortals"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"scene"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"PortalDetail"),"[]"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"scene")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"SceneData"))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PortalDetail"),"[]"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/server-core/src/projects/scene/scene-parser.ts#L47"},"packages/server-core/src/projects/scene/scene-parser.ts:47")))}d.isMDXComponent=!0}}]);