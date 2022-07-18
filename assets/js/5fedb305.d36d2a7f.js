"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[87921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(r),k=a,u=m["".concat(l,".").concat(k)]||m[k]||s[k]||p;return r?n.createElement(u,o(o({ref:t},d),{},{components:r})):n.createElement(u,o({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const p={id:"projects_project_project_helper",title:"Module: projects/project/project-helper",sidebar_label:"projects/project/project-helper",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"Api/server-core/modules/projects_project_project_helper",id:"Api/server-core/modules/projects_project_project_helper",title:"Module: projects/project/project-helper",description:"Functions",source:"@site/docs/Api/server-core/modules/projects_project_project_helper.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/projects_project_project_helper",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/projects_project_project_helper",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"projects_project_project_helper",title:"Module: projects/project/project-helper",sidebar_label:"projects/project/project-helper",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"projects/project/downloadProjects",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/projects_project_downloadProjects"},next:{title:"projects/scene/scene-helper",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/projects_scene_scene_helper"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"getProjectConfig",id:"getprojectconfig",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getProjectEnv",id:"getprojectenv",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"onProjectEvent",id:"onprojectevent",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"retriggerBuilderService",id:"retriggerbuilderservice",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"getprojectconfig"},"getProjectConfig"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getProjectConfig"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"projectName"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectConfigInterface"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"projectName")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectConfigInterface"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c246203/packages/server-core/src/projects/project/project-helper.ts#L68"},"packages/server-core/src/projects/project/project-helper.ts:68")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getprojectenv"},"getProjectEnv"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getProjectEnv"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"app"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"projectName"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";  }",">"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"app")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Application"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"projectName")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";  }",">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c246203/packages/server-core/src/projects/project/project-helper.ts#L81"},"packages/server-core/src/projects/project/project-helper.ts:81")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onprojectevent"},"onProjectEvent"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"onProjectEvent"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"app"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"projectName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hookPath"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"eventType"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"app")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Application"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"projectName")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"hookPath")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"eventType")),(0,a.kt)("td",{parentName:"tr",align:"left"},"keyof ",(0,a.kt)("inlineCode",{parentName:"td"},"ProjectEventHooks"))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c246203/packages/server-core/src/projects/project/project-helper.ts#L58"},"packages/server-core/src/projects/project/project-helper.ts:58")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"retriggerbuilderservice"},"retriggerBuilderService"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"retriggerBuilderService"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"app"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"app")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Application"))))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c246203/packages/server-core/src/projects/project/project-helper.ts#L11"},"packages/server-core/src/projects/project/project-helper.ts:11")))}s.isMDXComponent=!0}}]);