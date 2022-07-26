"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[11055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,m=u["".concat(o,".").concat(k)]||u[k]||c[k]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"renderer_THREE_WebGL.default",title:"Class: default",sidebar_label:"default",custom_edit_url:null},l=void 0,d={unversionedId:"Api/engine/classes/renderer_THREE_WebGL.default",id:"Api/engine/classes/renderer_THREE_WebGL.default",title:"Class: default",description:"renderer/THREE.WebGL.default",source:"@site/docs/Api/engine/classes/renderer_THREE_WebGL.default.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/renderer_THREE_WebGL.default",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_THREE_WebGL.default",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_THREE_WebGL.default",title:"Class: default",sidebar_label:"default",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"EngineRendererReceptor",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_EngineRendererState.EngineRendererReceptor"},next:{title:"EngineRenderer",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_WebGLRendererSystem.EngineRenderer"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"EVENTS",id:"events",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"dispatchWebGLDisconnectedEvent",id:"dispatchwebgldisconnectedevent",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getErrorMessage",id:"geterrormessage",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getWebGL2ErrorMessage",id:"getwebgl2errormessage",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getWebGLErrorMessage",id:"getwebglerrormessage",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"isWebGL2Available",id:"iswebgl2available",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"isWebGLAvailable",id:"iswebglavailable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_THREE_WebGL"},"renderer/THREE.WebGL"),".default"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new default"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"events"},"EVENTS"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"EVENTS"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"webglDisconnected")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"partialAction"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"WEBGL_DISCONNECTED"'),"  }",">",") => ",(0,a.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"WEBGL_DISCONNECTED"'),"  }",">",">"," & ",(0,a.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"webglDisconnected.actionShape")),(0,a.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"WEBGL_DISCONNECTED"'),"  }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"webglDisconnected.actionShape.type")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"WEBGL_DISCONNECTED"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"webglDisconnected.matches")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"WEBGL_DISCONNECTED"'),"  }",">",">"," & ",(0,a.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"webglDisconnected.resolvedActionShape")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"WEBGL_DISCONNECTED"'),"  }",">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"webglDisconnected.type")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"WEBGL_DISCONNECTED"'))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/564bf1c/packages/engine/src/renderer/THREE.WebGL.ts#L6"},"packages/engine/src/renderer/THREE.WebGL.ts:6")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"dispatchwebgldisconnectedevent"},"dispatchWebGLDisconnectedEvent"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"dispatchWebGLDisconnectedEvent"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/564bf1c/packages/engine/src/renderer/THREE.WebGL.ts#L12"},"packages/engine/src/renderer/THREE.WebGL.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"geterrormessage"},"getErrorMessage"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"getErrorMessage"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"version"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLDivElement")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"version")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HTMLDivElement")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/564bf1c/packages/engine/src/renderer/THREE.WebGL.ts#L42"},"packages/engine/src/renderer/THREE.WebGL.ts:42")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getwebgl2errormessage"},"getWebGL2ErrorMessage"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"getWebGL2ErrorMessage"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLDivElement")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HTMLDivElement")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/564bf1c/packages/engine/src/renderer/THREE.WebGL.ts#L38"},"packages/engine/src/renderer/THREE.WebGL.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getwebglerrormessage"},"getWebGLErrorMessage"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"getWebGLErrorMessage"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLDivElement")),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HTMLDivElement")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/564bf1c/packages/engine/src/renderer/THREE.WebGL.ts#L34"},"packages/engine/src/renderer/THREE.WebGL.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"iswebgl2available"},"isWebGL2Available"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"isWebGL2Available"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/564bf1c/packages/engine/src/renderer/THREE.WebGL.ts#L25"},"packages/engine/src/renderer/THREE.WebGL.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"iswebglavailable"},"isWebGLAvailable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"isWebGLAvailable"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/564bf1c/packages/engine/src/renderer/THREE.WebGL.ts#L16"},"packages/engine/src/renderer/THREE.WebGL.ts:16")))}c.isMDXComponent=!0}}]);