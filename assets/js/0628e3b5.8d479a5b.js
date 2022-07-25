"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[22581],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,g=c["".concat(s,".").concat(u)]||c[u]||k[u]||a;return t?i.createElement(g,o(o({ref:n},d),{},{components:t})):i.createElement(g,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},93338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const a={id:"networking_interfaces_NetworkPeer.NetworkPeer",title:"Interface: NetworkPeer",sidebar_label:"NetworkPeer",custom_edit_url:null},o=void 0,l={unversionedId:"Api/engine/interfaces/networking_interfaces_NetworkPeer.NetworkPeer",id:"Api/engine/interfaces/networking_interfaces_NetworkPeer.NetworkPeer",title:"Interface: NetworkPeer",description:"networking/interfaces/NetworkPeer.NetworkPeer",source:"@site/docs/Api/engine/interfaces/networking_interfaces_NetworkPeer.NetworkPeer.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/networking_interfaces_NetworkPeer.NetworkPeer",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/networking_interfaces_NetworkPeer.NetworkPeer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"networking_interfaces_NetworkPeer.NetworkPeer",title:"Interface: NetworkPeer",sidebar_label:"NetworkPeer",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"InteractiveModalState",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/interaction_ui_InteractiveModalView.InteractiveModalState"},next:{title:"UserClient",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/networking_interfaces_NetworkPeer.UserClient"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"channelRecvTransport",id:"channelrecvtransport",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"channelSendTransport",id:"channelsendtransport",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"consumerLayers",id:"consumerlayers",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"dataConsumers",id:"dataconsumers",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"dataProducers",id:"dataproducers",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"index",id:"index",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"instanceRecvTransport",id:"instancerecvtransport",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"instanceSendTransport",id:"instancesendtransport",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"joinTs",id:"joints",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"lastSeenTs",id:"lastseents",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"media",id:"media",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"networkId",id:"networkid",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"socket",id:"socket",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"socketId",id:"socketid",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"spectating",id:"spectating",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"stats",id:"stats",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"userId",id:"userid",level:3},{value:"Defined in",id:"defined-in-16",level:4}],d={toc:p};function k(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/networking_interfaces_NetworkPeer"},"networking/interfaces/NetworkPeer"),".NetworkPeer"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"channelrecvtransport"},"channelRecvTransport"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"channelRecvTransport"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L22"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:22")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"channelsendtransport"},"channelSendTransport"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"channelSendTransport"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L21"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"consumerlayers"},"consumerLayers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"consumerLayers"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L17"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dataconsumers"},"dataConsumers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"dataConsumers"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L23"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:23")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dataproducers"},"dataProducers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"dataProducers"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L24"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"index"},"index"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"index"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L8"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instancerecvtransport"},"instanceRecvTransport"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"instanceRecvTransport"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L20"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instancesendtransport"},"instanceSendTransport"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"instanceSendTransport"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L19"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:19")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"joints"},"joinTs"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"joinTs"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L15"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lastseents"},"lastSeenTs"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"lastSeenTs"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L14"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"media"},"media"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"media"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L16"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:16")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"networkid"},"networkId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"networkId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkId")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L10"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"socket"},"socket"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"socket"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Socket"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultEventsMap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultEventsMap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultEventsMap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L12"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"socketid"},"socketId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"socketId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L13"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"spectating"},"spectating"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"spectating"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L9"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stats"},"stats"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"stats"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L18"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:18")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"userid"},"userId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"userId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"UserId")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/networking/interfaces/NetworkPeer.ts#L7"},"packages/engine/src/networking/interfaces/NetworkPeer.ts:7")))}k.isMDXComponent=!0}}]);