"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[8851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"interaction_functions_mediaControlsUI",title:"Module: interaction/functions/mediaControlsUI",sidebar_label:"interaction/functions/mediaControlsUI",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/interaction_functions_mediaControlsUI",id:"Api/engine/modules/interaction_functions_mediaControlsUI",title:"Module: interaction/functions/mediaControlsUI",description:"Variables",source:"@site/docs/Api/engine/modules/interaction_functions_mediaControlsUI.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/interaction_functions_mediaControlsUI",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/interaction_functions_mediaControlsUI",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"interaction_functions_mediaControlsUI",title:"Module: interaction/functions/mediaControlsUI",sidebar_label:"interaction/functions/mediaControlsUI",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"interaction/functions/interactUI",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/interaction_functions_interactUI"},next:{title:"interaction/interfaces/CommonInteractiveData",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/interaction_interfaces_CommonInteractiveData"}},d={},p=[{value:"Variables",id:"variables",level:2},{value:"MediaUI",id:"mediaui",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"createMediaControlsUI",id:"createmediacontrolsui",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getMediaControlsUI",id:"getmediacontrolsui",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"removeMediaControlsUI",id:"removemediacontrolsui",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"mediaui"},"MediaUI"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"MediaUI"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),", ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,i.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = data.playing }",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = data.playing }, keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy"),">",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/982e3bb/packages/engine/src/interaction/functions/mediaControlsUI.ts#L10"},"packages/engine/src/interaction/functions/mediaControlsUI.ts:10")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createmediacontrolsui"},"createMediaControlsUI"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createMediaControlsUI"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/982e3bb/packages/engine/src/interaction/functions/mediaControlsUI.ts#L12"},"packages/engine/src/interaction/functions/mediaControlsUI.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getmediacontrolsui"},"getMediaControlsUI"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getMediaControlsUI"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,i.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = data.playing }",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = data.playing }, keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,i.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = data.playing }",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = data.playing }, keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy"),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/982e3bb/packages/engine/src/interaction/functions/mediaControlsUI.ts#L30"},"packages/engine/src/interaction/functions/mediaControlsUI.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removemediacontrolsui"},"removeMediaControlsUI"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"removeMediaControlsUI"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/982e3bb/packages/engine/src/interaction/functions/mediaControlsUI.ts#L34"},"packages/engine/src/interaction/functions/mediaControlsUI.ts:34")))}m.isMDXComponent=!0}}]);