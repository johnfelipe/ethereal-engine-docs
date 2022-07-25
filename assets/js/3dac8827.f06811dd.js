"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[17545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=o(n),c=i,N=k["".concat(d,".").concat(c)]||k[c]||s[c]||r;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},13926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={id:"src_admin_services_TestBotService.AdminTestBotActions",title:"Class: AdminTestBotActions",sidebar_label:"AdminTestBotActions",custom_edit_url:null},l=void 0,p={unversionedId:"Api/client-core/classes/src_admin_services_TestBotService.AdminTestBotActions",id:"Api/client-core/classes/src_admin_services_TestBotService.AdminTestBotActions",title:"Class: AdminTestBotActions",description:"src/admin/services/TestBotService.AdminTestBotActions",source:"@site/docs/Api/client-core/classes/src_admin_services_TestBotService.AdminTestBotActions.md",sourceDirName:"Api/client-core/classes",slug:"/Api/client-core/classes/src_admin_services_TestBotService.AdminTestBotActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_TestBotService.AdminTestBotActions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"src_admin_services_TestBotService.AdminTestBotActions",title:"Class: AdminTestBotActions",sidebar_label:"AdminTestBotActions",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AdminStaticResourceActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_StaticResourceService.AdminStaticResourceActions"},next:{title:"AdminUserRoleActions",permalink:"/ethereal-engine-docs/docs/Api/client-core/classes/src_admin_services_UserRoleService.AdminUserRoleActions"}},d={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"fetchedBots",id:"fetchedbots",level:3},{value:"Call signature",id:"call-signature",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"spawnBots",id:"spawnbots",level:3},{value:"Call signature",id:"call-signature-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"spawnedBots",id:"spawnedbots",level:3},{value:"Call signature",id:"call-signature-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}],m={toc:o};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/client-core/modules/src_admin_services_TestBotService"},"src/admin/services/TestBotService"),".AdminTestBotActions"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new AdminTestBotActions"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"fetchedbots"},"fetchedBots"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"fetchedBots"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TestBot"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"TEST_BOT_FETCHED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TestBot"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_FETCHED"'),"  }",">")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TestBot"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"TEST_BOT_FETCHED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TestBot"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_FETCHED"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.bots")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TestBot"),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_FETCHED"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TestBot"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_FETCHED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"bots"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TestBot"),"[]",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_FETCHED"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_FETCHED"'))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/client-core/src/admin/services/TestBotService.ts#L77"},"client-core/src/admin/services/TestBotService.ts:77")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"spawnbots"},"spawnBots"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"spawnBots"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature-1"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"TEST_BOT_SPAWN"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWN"'),"  }",">")))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"TEST_BOT_SPAWN"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWN"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWN"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWN"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWN"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWN"'))))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/client-core/src/admin/services/TestBotService.ts#L82"},"client-core/src/admin/services/TestBotService.ts:82")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"spawnedbots"},"spawnedBots"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"spawnedBots"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"call-signature-2"},"Call signature"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"partialAction?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"spawn"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SpawnTestBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"TEST_BOT_SPAWNED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"partialAction")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PartialActionType"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"spawn"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SpawnTestBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWNED"'),"  }",">")))),(0,i.kt)("h5",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"spawn"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SpawnTestBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"TEST_BOT_SPAWNED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionOptions"),">"),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"spawn"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SpawnTestBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWNED"'),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.spawn")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SpawnTestBot"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"actionShape.type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWNED"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matches")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Required"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ActionTypeFromShape"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"spawn"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SpawnTestBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWNED"'),"  }",">",">"," & ",(0,i.kt)("inlineCode",{parentName:"td"},"ActionOptions"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resolvedActionShape")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ResolvedActionShape"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"spawn"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Parser"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"SpawnTestBot"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWNED"'),"  }",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"TEST_BOT_SPAWNED"'))))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/client-core/src/admin/services/TestBotService.ts#L86"},"client-core/src/admin/services/TestBotService.ts:86")))}s.isMDXComponent=!0}}]);