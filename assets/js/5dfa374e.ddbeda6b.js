"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[96807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(k,o(o({ref:t},s),{},{components:n})):i.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={id:"interaction_ui_MediaControlsUI",title:"Module: interaction/ui/MediaControlsUI",sidebar_label:"interaction/ui/MediaControlsUI",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/modules/interaction_ui_MediaControlsUI",id:"Api/engine/modules/interaction_ui_MediaControlsUI",title:"Module: interaction/ui/MediaControlsUI",description:"Functions",source:"@site/docs/Api/engine/modules/interaction_ui_MediaControlsUI.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/interaction_ui_MediaControlsUI",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/interaction_ui_MediaControlsUI",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"interaction_ui_MediaControlsUI",title:"Module: interaction/ui/MediaControlsUI",sidebar_label:"interaction/ui/MediaControlsUI",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"interaction/ui/InteractiveModalView",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/interaction_ui_InteractiveModalView"},next:{title:"navigation/component/AutoPilotClickRequestComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/navigation_component_AutoPilotClickRequestComponent"}},p={},d=[{value:"Functions",id:"functions",level:2},{value:"createMediaControlsView",id:"createmediacontrolsview",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"createmediacontrolsview"},"createMediaControlsView"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"createMediaControlsView"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,a.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,a.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = data.playing }",">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = false; ",(0,a.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = data.playing }, keyof ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"data")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_MediaComponent#mediacomponenttype"},(0,a.kt)("inlineCode",{parentName:"a"},"MediaComponentType")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/xrui_functions_createXRUI.XRUI"},(0,a.kt)("inlineCode",{parentName:"a"},"XRUI")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,a.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = data.playing }",">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"Omit"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"mouseOver"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = false; ",(0,a.kt)("inlineCode",{parentName:"p"},"playing"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"," = data.playing }, keyof ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethods"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"S"),">"," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"destroy"'),">"," & ",(0,a.kt)("inlineCode",{parentName:"p"},"StateMethodsDestroy"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/caae330/packages/engine/src/interaction/ui/MediaControlsUI.tsx#L13"},"packages/engine/src/interaction/ui/MediaControlsUI.tsx:13")))}c.isMDXComponent=!0}}]);