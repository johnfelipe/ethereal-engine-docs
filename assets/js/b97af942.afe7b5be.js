"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[54900],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>N});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=d(t),N=i,C=k["".concat(o,".").concat(N)]||k[N]||m[N]||r;return t?a.createElement(C,l(l({ref:n},s),{},{components:t})):a.createElement(C,l({ref:n},s))}));function N(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},84475:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const r={id:"ecs_classes_EngineState",title:"Module: ecs/classes/EngineState",sidebar_label:"ecs/classes/EngineState",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"API/engine/modules/ecs_classes_EngineState",id:"API/engine/modules/ecs_classes_EngineState",title:"Module: ecs/classes/EngineState",description:"Classes",source:"@site/docs/API/engine/modules/ecs_classes_EngineState.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/ecs_classes_EngineState",permalink:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_EngineState",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ecs_classes_EngineState",title:"Module: ecs/classes/EngineState",sidebar_label:"ecs/classes/EngineState",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ecs/classes/Engine",permalink:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_Engine"},next:{title:"ecs/classes/Entity",permalink:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_Entity"}},o={},d=[{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2},{value:"EngineState",id:"enginestate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"EngineEventReceptor",id:"engineeventreceptor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getEngineState",id:"getenginestate",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"useEngineState",id:"useenginestate",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:d};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/API/engine/classes/ecs_classes_EngineState.EngineActions"},"EngineActions"))),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"enginestate"},"EngineState"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"EngineState"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateDefinition"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"availableInteractable"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"avatarTappedId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UserId")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"connectedWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"errorEntities"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"[key: Entity]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),";  } ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedDeltaSeconds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedTick"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"frameTime"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"isEngineInitialized"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"isTeleporting"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"joinedWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"leaveWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"loadingProgress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"sceneLoaded"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"shareLink"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ''; ",(0,i.kt)("inlineCode",{parentName:"p"},"shareTitle"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ''; ",(0,i.kt)("inlineCode",{parentName:"p"},"socketInstance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"spectating"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"transformOffsetsNeedSorting"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = true; ",(0,i.kt)("inlineCode",{parentName:"p"},"userHasInteracted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"usersTyping"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),";  } ; ",(0,i.kt)("inlineCode",{parentName:"p"},"xrSessionStarted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"xrSupported"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false }",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/ecs/classes/EngineState.ts#L8"},"packages/engine/src/ecs/classes/EngineState.ts:8")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"engineeventreceptor"},"EngineEventReceptor"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"EngineEventReceptor"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"a"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"a")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/ecs/classes/EngineState.ts#L39"},"packages/engine/src/ecs/classes/EngineState.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getenginestate"},"getEngineState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getEngineState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"availableInteractable"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"avatarTappedId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UserId")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"connectedWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"errorEntities"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"[key: Entity]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),";  } ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedDeltaSeconds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedTick"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"frameTime"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"isEngineInitialized"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"isTeleporting"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"joinedWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"leaveWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"loadingProgress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"sceneLoaded"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"shareLink"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ''; ",(0,i.kt)("inlineCode",{parentName:"p"},"shareTitle"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ''; ",(0,i.kt)("inlineCode",{parentName:"p"},"socketInstance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"spectating"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"transformOffsetsNeedSorting"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = true; ",(0,i.kt)("inlineCode",{parentName:"p"},"userHasInteracted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"usersTyping"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),";  } ; ",(0,i.kt)("inlineCode",{parentName:"p"},"xrSessionStarted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"xrSupported"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false }, {}",">"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"availableInteractable"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"avatarTappedId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UserId")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"connectedWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"errorEntities"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"[key: Entity]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),";  } ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedDeltaSeconds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedTick"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"frameTime"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"isEngineInitialized"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"isTeleporting"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"joinedWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"leaveWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"loadingProgress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"sceneLoaded"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"shareLink"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ''; ",(0,i.kt)("inlineCode",{parentName:"p"},"shareTitle"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ''; ",(0,i.kt)("inlineCode",{parentName:"p"},"socketInstance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"spectating"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"transformOffsetsNeedSorting"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = true; ",(0,i.kt)("inlineCode",{parentName:"p"},"userHasInteracted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"usersTyping"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),";  } ; ",(0,i.kt)("inlineCode",{parentName:"p"},"xrSessionStarted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"xrSupported"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false }, {}",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/ecs/classes/EngineState.ts#L77"},"packages/engine/src/ecs/classes/EngineState.ts:77")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"useenginestate"},"useEngineState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useEngineState"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"availableInteractable"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"avatarTappedId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UserId")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"connectedWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"errorEntities"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"[key: Entity]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),";  } ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedDeltaSeconds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedTick"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"frameTime"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"isEngineInitialized"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"isTeleporting"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"joinedWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"leaveWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"loadingProgress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"sceneLoaded"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"shareLink"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ''; ",(0,i.kt)("inlineCode",{parentName:"p"},"shareTitle"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ''; ",(0,i.kt)("inlineCode",{parentName:"p"},"socketInstance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"spectating"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"transformOffsetsNeedSorting"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = true; ",(0,i.kt)("inlineCode",{parentName:"p"},"userHasInteracted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"usersTyping"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),";  } ; ",(0,i.kt)("inlineCode",{parentName:"p"},"xrSessionStarted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"xrSupported"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false }, {}",">"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"State"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"availableInteractable"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"avatarTappedId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UserId")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"connectedWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"errorEntities"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"[key: Entity]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),";  } ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedDeltaSeconds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedTick"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"frameTime"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"isEngineInitialized"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"isTeleporting"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"joinedWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"leaveWorld"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"loadingProgress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"p"},"sceneLoaded"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"shareLink"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ''; ",(0,i.kt)("inlineCode",{parentName:"p"},"shareTitle"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ''; ",(0,i.kt)("inlineCode",{parentName:"p"},"socketInstance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"spectating"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"transformOffsetsNeedSorting"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = true; ",(0,i.kt)("inlineCode",{parentName:"p"},"userHasInteracted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"usersTyping"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),";  } ; ",(0,i.kt)("inlineCode",{parentName:"p"},"xrSessionStarted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false; ",(0,i.kt)("inlineCode",{parentName:"p"},"xrSupported"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false }, {}",">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4bc32ff/packages/engine/src/ecs/classes/EngineState.ts#L79"},"packages/engine/src/ecs/classes/EngineState.ts:79")))}m.isMDXComponent=!0}}]);