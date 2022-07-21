"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[95776],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),v=o(r),g=a,m=v["".concat(p,".").concat(g)]||v[g]||c[g]||i;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=v;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},20767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={id:"setting_server_setting_server_setting_class.ServerSetting",title:"Class: ServerSetting<T>",sidebar_label:"ServerSetting",custom_edit_url:null},s=void 0,l={unversionedId:"Api/server-core/classes/setting_server_setting_server_setting_class.ServerSetting",id:"Api/server-core/classes/setting_server_setting_server_setting_class.ServerSetting",title:"Class: ServerSetting<T>",description:"setting/server-setting/server-setting.class.ServerSetting",source:"@site/docs/Api/server-core/classes/setting_server_setting_server_setting_class.ServerSetting.md",sourceDirName:"Api/server-core/classes",slug:"/Api/server-core/classes/setting_server_setting_server_setting_class.ServerSetting",permalink:"/ethereal-engine-docs/docs/Api/server-core/classes/setting_server_setting_server_setting_class.ServerSetting",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"setting_server_setting_server_setting_class.ServerSetting",title:"Class: ServerSetting<T>",sidebar_label:"ServerSetting",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"RedisSetting",permalink:"/ethereal-engine-docs/docs/Api/server-core/classes/setting_redis_setting_redis_setting_class.RedisSetting"},next:{title:"Channel",permalink:"/ethereal-engine-docs/docs/Api/server-core/classes/social_channel_channel_class.Channel"}},p={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"app",id:"app",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"find",id:"find",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:o};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/modules/setting_server_setting_server_setting_class"},"setting/server-setting/server-setting.class"),".ServerSetting"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/server-core/modules/setting_server_setting_server_setting_class#serversettingdatatype"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerSettingDataType")))))),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ServerSetting"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new ServerSetting"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,a.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"app"),")"),(0,a.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ServerSetting"))))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"SequelizeServiceOptions"),">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"app")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Application"))))),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"Service","<","T\\",">",".constructor"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/server-core/src/setting/server-setting/server-setting.class.ts#L13"},"packages/server-core/src/setting/server-setting/server-setting.class.ts:13")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"app"},"app"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"app"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/server-core/src/setting/server-setting/server-setting.class.ts#L11"},"packages/server-core/src/setting/server-setting/server-setting.class.ts:11")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"find"},"find"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"find"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"[] ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">",">"),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"[] ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Paginated"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">",">"),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,"Service.find"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/server-core/src/setting/server-setting/server-setting.class.ts#L18"},"packages/server-core/src/setting/server-setting/server-setting.class.ts:18")))}c.isMDXComponent=!0}}]);