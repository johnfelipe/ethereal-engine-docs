"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[51045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),o=p(n),m=i,c=o["".concat(d,".").concat(m)]||o[m]||u[m]||s;return n?a.createElement(c,r(r({ref:t},k),{},{components:n})):a.createElement(c,r({ref:t},k))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=o;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},40802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const s={id:"assets_csm_CSM.CSM",title:"Class: CSM",sidebar_label:"CSM",custom_edit_url:null},r=void 0,l={unversionedId:"Api/engine/classes/assets_csm_CSM.CSM",id:"Api/engine/classes/assets_csm_CSM.CSM",title:"Class: CSM",description:"assets/csm/CSM.CSM",source:"@site/docs/Api/engine/classes/assets_csm_CSM.CSM.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/assets_csm_CSM.CSM",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_csm_CSM.CSM",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"assets_csm_CSM.CSM",title:"Class: CSM",sidebar_label:"CSM",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"XRELoader",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_classes_XRELoader.XRELoader"},next:{title:"default",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/assets_csm_Frustum.default"}},d={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"breaks",id:"breaks",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"camera",id:"camera",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"cascades",id:"cascades",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"customSplitsCallback",id:"customsplitscallback",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-4",level:4},{value:"fade",id:"fade",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"frustums",id:"frustums",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"lightDirection",id:"lightdirection",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"lightFar",id:"lightfar",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"lightIntensity",id:"lightintensity",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"lightMargin",id:"lightmargin",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"lightNear",id:"lightnear",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"lightSourcesCount",id:"lightsourcescount",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"lights",id:"lights",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"mainFrustum",id:"mainfrustum",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"maxFar",id:"maxfar",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"mode",id:"mode",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"parent",id:"parent",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"shaders",id:"shaders",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"shadowBias",id:"shadowbias",level:3},{value:"Defined in",id:"defined-in-19",level:4},{value:"shadowMapSize",id:"shadowmapsize",level:3},{value:"Defined in",id:"defined-in-20",level:4},{value:"Methods",id:"methods",level:2},{value:"changeLights",id:"changelights",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"createLights",id:"createlights",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-22",level:4},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-23",level:4},{value:"getBreaks",id:"getbreaks",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-24",level:4},{value:"getExtendedBreaks",id:"getextendedbreaks",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-25",level:4},{value:"initCascades",id:"initcascades",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-26",level:4},{value:"injectInclude",id:"injectinclude",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-27",level:4},{value:"remove",id:"remove",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-28",level:4},{value:"setupMaterial",id:"setupmaterial",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-29",level:4},{value:"update",id:"update",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-30",level:4},{value:"updateFrustums",id:"updatefrustums",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-31",level:4},{value:"updateProperty",id:"updateproperty",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-32",level:4},{value:"updateShadowBounds",id:"updateshadowbounds",level:3},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-33",level:4},{value:"updateUniforms",id:"updateuniforms",level:3},{value:"Returns",id:"returns-14",level:4},{value:"Defined in",id:"defined-in-34",level:4}],k={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/assets_csm_CSM"},"assets/csm/CSM"),".CSM"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new CSM"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CSMParams"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L74"},"packages/engine/src/assets/csm/CSM.ts:74")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"breaks"},"breaks"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"breaks"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L69"},"packages/engine/src/assets/csm/CSM.ts:69")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"camera"},"camera"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"camera"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PerspectiveCamera")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L53"},"packages/engine/src/assets/csm/CSM.ts:53")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cascades"},"cascades"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cascades"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L55"},"packages/engine/src/assets/csm/CSM.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"customsplitscallback"},"customSplitsCallback"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"customSplitsCallback"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"near"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"far"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"near"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"far"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"near")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"far")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"),"[]")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L65"},"packages/engine/src/assets/csm/CSM.ts:65")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fade"},"fade"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fade"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L66"},"packages/engine/src/assets/csm/CSM.ts:66")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"frustums"},"frustums"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"frustums"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_csm_Frustum.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"[]"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L68"},"packages/engine/src/assets/csm/CSM.ts:68")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lightdirection"},"lightDirection"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lightDirection"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L60"},"packages/engine/src/assets/csm/CSM.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lightfar"},"lightFar"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lightFar"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L63"},"packages/engine/src/assets/csm/CSM.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lightintensity"},"lightIntensity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lightIntensity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L61"},"packages/engine/src/assets/csm/CSM.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lightmargin"},"lightMargin"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lightMargin"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L64"},"packages/engine/src/assets/csm/CSM.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lightnear"},"lightNear"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lightNear"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L62"},"packages/engine/src/assets/csm/CSM.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lightsourcescount"},"lightSourcesCount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lightSourcesCount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L71"},"packages/engine/src/assets/csm/CSM.ts:71")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lights"},"lights"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lights"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"DirectionalLight"),"[][]"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L70"},"packages/engine/src/assets/csm/CSM.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mainfrustum"},"mainFrustum"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mainFrustum"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_csm_Frustum.default"},(0,i.kt)("inlineCode",{parentName:"a"},"default"))),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L67"},"packages/engine/src/assets/csm/CSM.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxfar"},"maxFar"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"maxFar"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L56"},"packages/engine/src/assets/csm/CSM.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mode"},"mode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mode"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/enums/assets_csm_CSM.CSMModes"},(0,i.kt)("inlineCode",{parentName:"a"},"CSMModes"))),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L57"},"packages/engine/src/assets/csm/CSM.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parent"},"parent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"parent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),">"),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L54"},"packages/engine/src/assets/csm/CSM.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"shaders"},"shaders"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"shaders"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Material"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Shader"),">"),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L72"},"packages/engine/src/assets/csm/CSM.ts:72")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"shadowbias"},"shadowBias"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"shadowBias"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L59"},"packages/engine/src/assets/csm/CSM.ts:59")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"shadowmapsize"},"shadowMapSize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"shadowMapSize"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L58"},"packages/engine/src/assets/csm/CSM.ts:58")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"changelights"},"changeLights"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"changeLights"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"light"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"light")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DirectionalLight"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L100"},"packages/engine/src/assets/csm/CSM.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createlights"},"createLights"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createLights"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"lights?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"lights?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DirectionalLight"),"[]")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L126"},"packages/engine/src/assets/csm/CSM.ts:126")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dispose"},"dispose"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L401"},"packages/engine/src/assets/csm/CSM.ts:401")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getbreaks"},"getBreaks"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getBreaks"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L219"},"packages/engine/src/assets/csm/CSM.ts:219")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getextendedbreaks"},"getExtendedBreaks"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getExtendedBreaks"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"target"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Vector2"),"[]")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L368"},"packages/engine/src/assets/csm/CSM.ts:368")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initcascades"},"initCascades"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"initCascades"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-26"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L170"},"packages/engine/src/assets/csm/CSM.ts:170")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"injectinclude"},"injectInclude"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"injectInclude"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-27"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L309"},"packages/engine/src/assets/csm/CSM.ts:309")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"remove"},"remove"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"remove"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-28"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L390"},"packages/engine/src/assets/csm/CSM.ts:390")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setupmaterial"},"setupMaterial"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setupMaterial"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"mesh"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mesh")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Mesh"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"BufferGeometry"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Material")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Material"),"[]",">")))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-29"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L314"},"packages/engine/src/assets/csm/CSM.ts:314")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"update"},"update"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"update"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-30"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L270"},"packages/engine/src/assets/csm/CSM.ts:270")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatefrustums"},"updateFrustums"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateFrustums"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-31"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L383"},"packages/engine/src/assets/csm/CSM.ts:383")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updateproperty"},"updateProperty"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateProperty"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-32"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L106"},"packages/engine/src/assets/csm/CSM.ts:106")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updateshadowbounds"},"updateShadowBounds"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateShadowBounds"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-13"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-33"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L177"},"packages/engine/src/assets/csm/CSM.ts:177")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updateuniforms"},"updateUniforms"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateUniforms"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-14"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-34"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/assets/csm/CSM.ts#L348"},"packages/engine/src/assets/csm/CSM.ts:348")))}u.isMDXComponent=!0}}]);