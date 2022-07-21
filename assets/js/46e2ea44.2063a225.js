"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[56515],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),m=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=m(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(t),c=a,f=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return t?i.createElement(f,r(r({ref:n},d),{},{components:t})):i.createElement(f,r({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var m=2;m<l;m++)r[m]=t[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},93443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=t(87462),a=(t(67294),t(3905));const l={id:"common_functions_OnBeforeCompilePlugin",title:"Module: common/functions/OnBeforeCompilePlugin",sidebar_label:"common/functions/OnBeforeCompilePlugin",sidebar_position:0,custom_edit_url:null},r=void 0,o={unversionedId:"Api/engine/modules/common_functions_OnBeforeCompilePlugin",id:"Api/engine/modules/common_functions_OnBeforeCompilePlugin",title:"Module: common/functions/OnBeforeCompilePlugin",description:"Type Aliases",source:"@site/docs/Api/engine/modules/common_functions_OnBeforeCompilePlugin.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/common_functions_OnBeforeCompilePlugin",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_OnBeforeCompilePlugin",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_functions_OnBeforeCompilePlugin",title:"Module: common/functions/OnBeforeCompilePlugin",sidebar_label:"common/functions/OnBeforeCompilePlugin",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"common/functions/ObjectPool",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_ObjectPool"},next:{title:"common/functions/QuaternionUtils",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_QuaternionUtils"}},p={},m=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"CustomMaterial",id:"custommaterial",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"PluginObjectType",id:"pluginobjecttype",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"PluginType",id:"plugintype",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Functions",id:"functions",level:2},{value:"addOBCPlugin",id:"addobcplugin",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"hasOBCPlugin",id:"hasobcplugin",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"overrideOnBeforeCompile",id:"overrideonbeforecompile",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"removeOBCPlugin",id:"removeobcplugin",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-6",level:4}],d={toc:m};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,a.kt)("h3",{id:"custommaterial"},"CustomMaterial"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"CustomMaterial"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Material")," & { ",(0,a.kt)("inlineCode",{parentName:"p"},"_onBeforeCompile"),": typeof ",(0,a.kt)("inlineCode",{parentName:"p"},"Material.prototype.onBeforeCompile")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"needsUpdate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"onBeforeCompile"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_OnBeforeCompilePlugin#plugintype"},(0,a.kt)("inlineCode",{parentName:"a"},"PluginType"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins?"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_OnBeforeCompilePlugin#plugintype"},(0,a.kt)("inlineCode",{parentName:"a"},"PluginType")),"[]  }"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/functions/OnBeforeCompilePlugin.ts#L33"},"packages/engine/src/common/functions/OnBeforeCompilePlugin.ts:33")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pluginobjecttype"},"PluginObjectType"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"PluginObjectType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"compile")),(0,a.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,a.kt)("inlineCode",{parentName:"td"},"Material.prototype.onBeforeCompile"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"priority?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/functions/OnBeforeCompilePlugin.ts#L25"},"packages/engine/src/common/functions/OnBeforeCompilePlugin.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"plugintype"},"PluginType"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"PluginType"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_OnBeforeCompilePlugin#pluginobjecttype"},(0,a.kt)("inlineCode",{parentName:"a"},"PluginObjectType"))," ","|"," typeof ",(0,a.kt)("inlineCode",{parentName:"p"},"Material.prototype.onBeforeCompile")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/functions/OnBeforeCompilePlugin.ts#L31"},"packages/engine/src/common/functions/OnBeforeCompilePlugin.ts:31")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"addobcplugin"},"addOBCPlugin"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"addOBCPlugin"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"material"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"material")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Material"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"plugin")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_OnBeforeCompilePlugin#plugintype"},(0,a.kt)("inlineCode",{parentName:"a"},"PluginType")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/functions/OnBeforeCompilePlugin.ts#L40"},"packages/engine/src/common/functions/OnBeforeCompilePlugin.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hasobcplugin"},"hasOBCPlugin"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"hasOBCPlugin"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"material"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"material")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Material"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"plugin")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_OnBeforeCompilePlugin#plugintype"},(0,a.kt)("inlineCode",{parentName:"a"},"PluginType")))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/functions/OnBeforeCompilePlugin.ts#L53"},"packages/engine/src/common/functions/OnBeforeCompilePlugin.ts:53")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"overrideonbeforecompile"},"overrideOnBeforeCompile"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"overrideOnBeforeCompile"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/functions/OnBeforeCompilePlugin.ts#L126"},"packages/engine/src/common/functions/OnBeforeCompilePlugin.ts:126")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"removeobcplugin"},"removeOBCPlugin"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"removeOBCPlugin"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"material"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"material")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Material"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"plugin")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/common_functions_OnBeforeCompilePlugin#plugintype"},(0,a.kt)("inlineCode",{parentName:"a"},"PluginType")))))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/987e60f/packages/engine/src/common/functions/OnBeforeCompilePlugin.ts#L44"},"packages/engine/src/common/functions/OnBeforeCompilePlugin.ts:44")))}u.isMDXComponent=!0}}]);