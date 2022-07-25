"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[40130],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),c=i,g=u["".concat(o,".").concat(c)]||u[c]||k[c]||r;return t?a.createElement(g,s(s({ref:n},p),{},{components:t})):a.createElement(g,s({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var d=2;d<r;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const r={id:"networking_classes_Network.Network",title:"Class: Network",sidebar_label:"Network",custom_edit_url:null},s=void 0,l={unversionedId:"Api/engine/classes/networking_classes_Network.Network",id:"Api/engine/classes/networking_classes_Network.Network",title:"Class: Network",description:"networking/classes/Network.Network",source:"@site/docs/Api/engine/classes/networking_classes_Network.Network.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/networking_classes_Network.Network",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/networking_classes_Network.Network",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"networking_classes_Network.Network",title:"Class: Network",sidebar_label:"Network",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"OrbitControls",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/input_functions_OrbitControls.OrbitControls"},next:{title:"WorldNetworkAction",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/networking_functions_WorldNetworkAction.WorldNetworkAction"}},o={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"consumers",id:"consumers",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"dataConsumers",id:"dataconsumers",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"dataProducers",id:"dataproducers",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"hostId",id:"hostid",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"incomingMessageQueueUnreliable",id:"incomingmessagequeueunreliable",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"incomingMessageQueueUnreliableIDs",id:"incomingmessagequeueunreliableids",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"mediasoupOperationQueue",id:"mediasoupoperationqueue",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"peers",id:"peers",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"producers",id:"producers",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"topic",id:"topic",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"userIdToUserIndex",id:"useridtouserindex",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"userIndexCount",id:"userindexcount",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"userIndexToUserId",id:"userindextouserid",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"Accessors",id:"accessors",level:2},{value:"isHosting",id:"ishosting",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"Methods",id:"methods",level:2},{value:"close",id:"close",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"initialize",id:"initialize",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"request",id:"request",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"sendActions",id:"sendactions",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"sendData",id:"senddata",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"updatePeers",id:"updatepeers",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-20",level:4}],p={toc:d};function k(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/networking_classes_Network"},"networking/classes/Network"),".Network"),(0,i.kt)("p",null,"Interface for the Transport."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new Network"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"hostId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"topic"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hostId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"UserId"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"topic")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Topic"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L102"},"packages/engine/src/networking/classes/Network.ts:102")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"consumers"},"consumers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"consumers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L52"},"packages/engine/src/networking/classes/Network.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dataconsumers"},"dataConsumers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dataConsumers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"List of data consumer nodes."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L58"},"packages/engine/src/networking/classes/Network.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dataproducers"},"dataProducers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dataProducers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"List of data producer nodes."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L55"},"packages/engine/src/networking/classes/Network.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hostid"},"hostId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"hostId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UserId")),(0,i.kt)("p",null,"The UserId of the host"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"will either be a user's UserId, or an instance server's InstanceId")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L91"},"packages/engine/src/networking/classes/Network.ts:91")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"incomingmessagequeueunreliable"},"incomingMessageQueueUnreliable"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"incomingMessageQueueUnreliable"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_RingBuffer.RingBuffer"},(0,i.kt)("inlineCode",{parentName:"a"},"RingBuffer")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"Buffer holding all incoming Messages."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L64"},"packages/engine/src/networking/classes/Network.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"incomingmessagequeueunreliableids"},"incomingMessageQueueUnreliableIDs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"incomingMessageQueueUnreliableIDs"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_RingBuffer.RingBuffer"},(0,i.kt)("inlineCode",{parentName:"a"},"RingBuffer")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"Buffer holding all incoming Messages."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L61"},"packages/engine/src/networking/classes/Network.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mediasoupoperationqueue"},"mediasoupOperationQueue"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mediasoupOperationQueue"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_RingBuffer.RingBuffer"},(0,i.kt)("inlineCode",{parentName:"a"},"RingBuffer")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"Buffer holding Mediasoup operations"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L67"},"packages/engine/src/networking/classes/Network.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"peers"},"peers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"peers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"UserId"),", ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/networking_interfaces_NetworkPeer.NetworkPeer"},(0,i.kt)("inlineCode",{parentName:"a"},"NetworkPeer")),">"),(0,i.kt)("p",null,"Connected peers"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L70"},"packages/engine/src/networking/classes/Network.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"producers"},"producers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"producers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,i.kt)("p",null,"Consumers and producers have separate types on client and server"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L51"},"packages/engine/src/networking/classes/Network.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"topic"},"topic"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"topic"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Topic")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L100"},"packages/engine/src/networking/classes/Network.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"useridtouserindex"},"userIdToUserIndex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userIdToUserIndex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"UserId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,i.kt)("p",null,"Map of user client IDs to numerical user index"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L79"},"packages/engine/src/networking/classes/Network.ts:79")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userindexcount"},"userIndexCount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userIndexCount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("p",null,"The index to increment when a new user joins\nNOTE: Must only be updated by the host"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L85"},"packages/engine/src/networking/classes/Network.ts:85")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userindextouserid"},"userIndexToUserId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userIndexToUserId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UserId"),">"),(0,i.kt)("p",null,"Map of numerical user index to user client IDs"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L76"},"packages/engine/src/networking/classes/Network.ts:76")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"ishosting"},"isHosting"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"isHosting"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Check if this user is hosting the world."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L96"},"packages/engine/src/networking/classes/Network.ts:96")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"close"},"close"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"close"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"instance?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"channel?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Closes all the media soup transports"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"instance?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"channel?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L48"},"packages/engine/src/networking/classes/Network.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"initialize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Initialize the transport."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L26"},"packages/engine/src/networking/classes/Network.ts:26")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"request"},"request"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"request"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"Sends a message across the connection and resolves with the reponse"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L43"},"packages/engine/src/networking/classes/Network.ts:43")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sendactions"},"sendActions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sendActions"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Send outgoing actions through reliable channel"),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L37"},"packages/engine/src/networking/classes/Network.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"senddata"},"sendData"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sendData"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Send data over transport."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data to be sent.")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L32"},"packages/engine/src/networking/classes/Network.ts:32")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatepeers"},"updatePeers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updatePeers"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Publish to connected peers that peer information has changed"),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b0ba1a8/packages/engine/src/networking/classes/Network.ts#L73"},"packages/engine/src/networking/classes/Network.ts:73")))}k.isMDXComponent=!0}}]);