"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[88807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"xr_systems_XRSystem",title:"Module: xr/systems/XRSystem",sidebar_label:"xr/systems/XRSystem",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/xr_systems_XRSystem",id:"Api/engine/modules/xr_systems_XRSystem",title:"Module: xr/systems/XRSystem",description:"Functions",source:"@site/docs/Api/engine/modules/xr_systems_XRSystem.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/xr_systems_XRSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/xr_systems_XRSystem",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"xr_systems_XRSystem",title:"Module: xr/systems/XRSystem",sidebar_label:"xr/systems/XRSystem",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"xr/functions/controllerAnimation",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/xr_functions_controllerAnimation"},next:{title:"xr/types/XRHandBones",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/xr_types_XRHandBones"}},s={},d=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"setXRModeReceptor",id:"setxrmodereceptor",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"default"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"world"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"System for XR session and input handling"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"world")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/classes/ecs_classes_World.World"},(0,a.kt)("inlineCode",{parentName:"a"},"World")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<() => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/xr/systems/XRSystem.ts#L64"},"packages/engine/src/xr/systems/XRSystem.ts:64")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setxrmodereceptor"},"setXRModeReceptor"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"setXRModeReceptor"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"action")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,a.kt)("inlineCode",{parentName:"td"},"$cache"),": { ",(0,a.kt)("inlineCode",{parentName:"td"},"removePrevious"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," = true } ; ",(0,a.kt)("inlineCode",{parentName:"td"},"avatarInputControllerType"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),">"," = matches.string; ",(0,a.kt)("inlineCode",{parentName:"td"},"enabled"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"boolean"),">"," = matches.boolean; ",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = 'xre.world.SET","_","XR","_","MODE' }",">",">"," & ",(0,a.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/xr/systems/XRSystem.ts#L47"},"packages/engine/src/xr/systems/XRSystem.ts:47")))}m.isMDXComponent=!0}}]);