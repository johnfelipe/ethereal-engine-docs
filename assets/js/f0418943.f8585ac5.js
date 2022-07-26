"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[24206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>C});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,d=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),N=m(n),C=i,s=N["".concat(o,".").concat(C)]||N[C]||k[C]||d;return n?a.createElement(s,r(r({ref:t},p),{},{components:n})):a.createElement(s,r({ref:t},p))}));function C(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var d=n.length,r=new Array(d);r[0]=N;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var m=2;m<d;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},54888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>k,frontMatter:()=>d,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const d={id:"config",title:"Module: config",sidebar_label:"config",sidebar_position:0,custom_edit_url:null},r=void 0,l={unversionedId:"Api/server-core/modules/config",id:"Api/server-core/modules/config",title:"Module: config",description:"Variables",source:"@site/docs/Api/server-core/modules/config.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/config",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/config",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"config",title:"Module: config",sidebar_label:"config",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"bot/testbot/testbot-helper",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/bot_testbot_testbot_helper"},next:{title:"createApp",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/createApp"}},o={},m=[{value:"Variables",id:"variables",level:2},{value:"config",id:"config",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"localConfig",id:"localconfig",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"sctpParameters",id:"sctpparameters",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:m};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"config"},"config"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"config"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"httpPeerStale")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"router"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"mediaCodecs"),": ({ ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 48000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio/opus'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined"),"  } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/VP8'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = '4d0032' } = {} } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/h264'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = '4d0032' }  })[]  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"webRtcTransport"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"initialAvailableOutgoingBitrate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 800000; ",(0,i.kt)("inlineCode",{parentName:"td"},"listenIps"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"announcedIp"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"ip"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"  }[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"maxIncomingBitrate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 150000 } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"worker"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"logLevel"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'info'; ",(0,i.kt)("inlineCode",{parentName:"td"},"logTags"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"rtcMaxPort"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 49999; ",(0,i.kt)("inlineCode",{parentName:"td"},"rtcMinPort"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 40000 }  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"mediaCodecs"),": ({ ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 48000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio/opus'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined"),"  } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/VP8'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = '4d0032' } = {} } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/h264'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = '4d0032' }  })[]  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.router.mediaCodecs")),(0,i.kt)("td",{parentName:"tr",align:"left"},"({ ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 48000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio/opus'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined"),"  } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/VP8'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = '4d0032' } = {} } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/h264'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = '4d0032' }  })[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.webRtcTransport")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"initialAvailableOutgoingBitrate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 800000; ",(0,i.kt)("inlineCode",{parentName:"td"},"listenIps"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"announcedIp"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"ip"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"  }[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"maxIncomingBitrate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 150000 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.webRtcTransport.initialAvailableOutgoingBitrate")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.webRtcTransport.listenIps")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"announcedIp"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"ip"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"  }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.webRtcTransport.maxIncomingBitrate")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.worker")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"logLevel"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'info'; ",(0,i.kt)("inlineCode",{parentName:"td"},"logTags"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"rtcMaxPort"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 49999; ",(0,i.kt)("inlineCode",{parentName:"td"},"rtcMinPort"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 40000 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.worker.logLevel")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.worker.logTags")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.worker.rtcMaxPort")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.worker.rtcMinPort")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/564bf1c/packages/server-core/src/config.ts#L11"},"packages/server-core/src/config.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"localconfig"},"localConfig"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"localConfig"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"httpPeerStale")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"router"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"mediaCodecs"),": ({ ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 48000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio/opus'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined"),"  } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/VP8'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = '4d0032' } = {} } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/h264'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = '4d0032' }  })[]  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"webRtcTransport"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"initialAvailableOutgoingBitrate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 800000; ",(0,i.kt)("inlineCode",{parentName:"td"},"listenIps"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"announcedIp"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"ip"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"  }[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"maxIncomingBitrate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 150000 } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"worker"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"logLevel"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'info'; ",(0,i.kt)("inlineCode",{parentName:"td"},"logTags"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"rtcMaxPort"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = configFile.instanceserver.rtc","_","end","_","port; ",(0,i.kt)("inlineCode",{parentName:"td"},"rtcMinPort"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = configFile.instanceserver.rtc","_","start","_","port }  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"mediaCodecs"),": ({ ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 48000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio/opus'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined"),"  } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/VP8'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = '4d0032' } = {} } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/h264'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = '4d0032' }  })[]  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.router.mediaCodecs")),(0,i.kt)("td",{parentName:"tr",align:"left"},"({ ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 48000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'audio/opus'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined"),"  } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/VP8'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = '4d0032' } = {} } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"channels"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"clockRate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 90000; ",(0,i.kt)("inlineCode",{parentName:"td"},"kind"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video'; ",(0,i.kt)("inlineCode",{parentName:"td"},"mimeType"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'video/h264'; ",(0,i.kt)("inlineCode",{parentName:"td"},"parameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"level-asymmetry-allowed"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"packetization-mode"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"profile-level-id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = '4d0032' }  })[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.webRtcTransport")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"initialAvailableOutgoingBitrate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 800000; ",(0,i.kt)("inlineCode",{parentName:"td"},"listenIps"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"announcedIp"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"ip"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"  }[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"maxIncomingBitrate"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 150000 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.webRtcTransport.initialAvailableOutgoingBitrate")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.webRtcTransport.listenIps")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"announcedIp"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"ip"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"  }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.webRtcTransport.maxIncomingBitrate")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.worker")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"logLevel"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'info'; ",(0,i.kt)("inlineCode",{parentName:"td"},"logTags"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"rtcMaxPort"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = configFile.instanceserver.rtc","_","end","_","port; ",(0,i.kt)("inlineCode",{parentName:"td"},"rtcMinPort"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = configFile.instanceserver.rtc","_","start","_","port }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.worker.logLevel")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.worker.logTags")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.worker.rtcMaxPort")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mediasoup.worker.rtcMinPort")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/564bf1c/packages/server-core/src/config.ts#L70"},"packages/server-core/src/config.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sctpparameters"},"sctpParameters"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"sctpParameters"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/modules/types_SctpParameters#sctpparameters"},(0,i.kt)("inlineCode",{parentName:"a"},"SctpParameters"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/564bf1c/packages/server-core/src/config.ts#L4"},"packages/server-core/src/config.ts:4")))}k.isMDXComponent=!0}}]);