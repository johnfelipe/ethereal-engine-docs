"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[62202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(l,".").concat(c)]||m[c]||s[c]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={id:"audio_AudioState",title:"Module: audio/AudioState",sidebar_label:"audio/AudioState",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"API/engine/modules/audio_AudioState",id:"API/engine/modules/audio_AudioState",title:"Module: audio/AudioState",description:"Classes",source:"@site/docs/API/engine/modules/audio_AudioState.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/audio_AudioState",permalink:"/ethereal-engine-docs/docs/API/engine/modules/audio_AudioState",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"audio_AudioState",title:"Module: audio/AudioState",sidebar_label:"audio/AudioState",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"audio/AudioSettingConstants",permalink:"/ethereal-engine-docs/docs/API/engine/modules/audio_AudioSettingConstants"},next:{title:"audio/components/AudioComponent",permalink:"/ethereal-engine-docs/docs/API/engine/modules/audio_components_AudioComponent"}},l={},u=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"AudioSettingReceptor",id:"audiosettingreceptor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"accessAudioState",id:"accessaudiostate",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"restoreAudioSettings",id:"restoreaudiosettings",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"useAudioState",id:"useaudiostate",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"classes"},"Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/API/engine/classes/audio_AudioState.AudioSettingAction"},"AudioSettingAction"))),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"audiosettingreceptor"},"AudioSettingReceptor"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"AudioSettingReceptor"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"action")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/736f0bf/packages/engine/src/audio/AudioState.ts#L59"},"packages/engine/src/audio/AudioState.ts:59")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"accessaudiostate"},"accessAudioState"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"accessAudioState"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"audio"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 10; ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundMusicVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"mediaStreamVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"microphone"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"soundEffectsVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50 }, {}",">"),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"audio"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 10; ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundMusicVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"mediaStreamVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"microphone"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"soundEffectsVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50 }, {}",">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/736f0bf/packages/engine/src/audio/AudioState.ts#L56"},"packages/engine/src/audio/AudioState.ts:56")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"restoreaudiosettings"},"restoreAudioSettings"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"restoreAudioSettings"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/736f0bf/packages/engine/src/audio/AudioState.ts#L28"},"packages/engine/src/audio/AudioState.ts:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"useaudiostate"},"useAudioState"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"useAudioState"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"audio"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 10; ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundMusicVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"mediaStreamVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"microphone"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"soundEffectsVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50 }, {}",">"),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"audio"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 10; ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundMusicVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"mediaStreamVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"microphone"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50; ",(0,a.kt)("inlineCode",{parentName:"p"},"soundEffectsVolume"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = 50 }, {}",">"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/736f0bf/packages/engine/src/audio/AudioState.ts#L57"},"packages/engine/src/audio/AudioState.ts:57")))}s.isMDXComponent=!0}}]);