"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[54246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,d=function(e,t){if(null==e)return{};var n,a,d={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,d=e.mdxType,p=e.originalType,m=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),l=s(n),k=d,N=l["".concat(m,".").concat(k)]||l[k]||o[k]||p;return n?a.createElement(N,i(i({ref:t},u),{},{components:n})):a.createElement(N,i({ref:t},u))}));function k(e,t){var n=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var p=n.length,i=new Array(p);i[0]=l;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r.mdxType="string"==typeof e?e:d,i[1]=r;for(var s=2;s<p;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},72127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>p,metadata:()=>r,toc:()=>s});var a=n(87462),d=(n(67294),n(3905));const p={id:"input_functions_GamepadInput",title:"Module: input/functions/GamepadInput",sidebar_label:"input/functions/GamepadInput",sidebar_position:0,custom_edit_url:null},i=void 0,r={unversionedId:"Api/engine/modules/input_functions_GamepadInput",id:"Api/engine/modules/input_functions_GamepadInput",title:"Module: input/functions/GamepadInput",description:"Variables",source:"@site/docs/Api/engine/modules/input_functions_GamepadInput.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/input_functions_GamepadInput",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/input_functions_GamepadInput",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"input_functions_GamepadInput",title:"Module: input/functions/GamepadInput",sidebar_label:"input/functions/GamepadInput",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"input/enums/InputType",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/input_enums_InputType"},next:{title:"input/functions/OrbitControls",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/input_functions_OrbitControls"}},m={},s=[{value:"Variables",id:"variables",level:2},{value:"gamepadMapping",id:"gamepadmapping",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"handleGamepadAxis",id:"handlegamepadaxis",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"handleGamepadButton",id:"handlegamepadbutton",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"handleGamepadConnected",id:"handlegamepadconnected",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"handleGamepadDisconnected",id:"handlegamepaddisconnected",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"handleGamepads",id:"handlegamepads",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4}],u={toc:s};function o(e){let{components:t,...n}=e;return(0,d.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"variables"},"Variables"),(0,d.kt)("h3",{id:"gamepadmapping"},"gamepadMapping"),(0,d.kt)("p",null,"\u2022 ",(0,d.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,d.kt)("strong",{parentName:"p"},"gamepadMapping"),": ",(0,d.kt)("inlineCode",{parentName:"p"},"Object")),(0,d.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard")),(0,d.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,d.kt)("inlineCode",{parentName:"td"},"0"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.A; ",(0,d.kt)("inlineCode",{parentName:"td"},"1"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.B; ",(0,d.kt)("inlineCode",{parentName:"td"},"10"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LStick; ",(0,d.kt)("inlineCode",{parentName:"td"},"11"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RStick; ",(0,d.kt)("inlineCode",{parentName:"td"},"12"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.DPad1; ",(0,d.kt)("inlineCode",{parentName:"td"},"13"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.DPad2; ",(0,d.kt)("inlineCode",{parentName:"td"},"14"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.DPad3; ",(0,d.kt)("inlineCode",{parentName:"td"},"15"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.DPad4; ",(0,d.kt)("inlineCode",{parentName:"td"},"2"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.X; ",(0,d.kt)("inlineCode",{parentName:"td"},"3"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.Y; ",(0,d.kt)("inlineCode",{parentName:"td"},"4"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LBumper; ",(0,d.kt)("inlineCode",{parentName:"td"},"5"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RBumper; ",(0,d.kt)("inlineCode",{parentName:"td"},"6"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LTrigger; ",(0,d.kt)("inlineCode",{parentName:"td"},"7"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RTrigger; ",(0,d.kt)("inlineCode",{parentName:"td"},"8"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.Back; ",(0,d.kt)("inlineCode",{parentName:"td"},"9"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.Start }")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.0")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.1")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.10")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.11")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.12")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.13")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.14")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.15")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.2")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.3")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.4")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.5")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.6")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.7")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.8")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"standard.9")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard")),(0,d.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,d.kt)("inlineCode",{parentName:"td"},"left"),": { ",(0,d.kt)("inlineCode",{parentName:"td"},"axes"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.XRAxes"},(0,d.kt)("inlineCode",{parentName:"a"},"XRAxes"))," = XRAxes.Left; ",(0,d.kt)("inlineCode",{parentName:"td"},"buttons"),": { ",(0,d.kt)("inlineCode",{parentName:"td"},"0"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LTrigger; ",(0,d.kt)("inlineCode",{parentName:"td"},"1"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LBumper; ",(0,d.kt)("inlineCode",{parentName:"td"},"2"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LPad; ",(0,d.kt)("inlineCode",{parentName:"td"},"3"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LStick; ",(0,d.kt)("inlineCode",{parentName:"td"},"4"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.X; ",(0,d.kt)("inlineCode",{parentName:"td"},"5"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.Y }  } ; ",(0,d.kt)("inlineCode",{parentName:"td"},"right"),": { ",(0,d.kt)("inlineCode",{parentName:"td"},"axes"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.XRAxes"},(0,d.kt)("inlineCode",{parentName:"a"},"XRAxes"))," = XRAxes.Right; ",(0,d.kt)("inlineCode",{parentName:"td"},"buttons"),": { ",(0,d.kt)("inlineCode",{parentName:"td"},"0"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RTrigger; ",(0,d.kt)("inlineCode",{parentName:"td"},"1"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RBumper; ",(0,d.kt)("inlineCode",{parentName:"td"},"2"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RPad; ",(0,d.kt)("inlineCode",{parentName:"td"},"3"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RStick; ",(0,d.kt)("inlineCode",{parentName:"td"},"4"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.A; ",(0,d.kt)("inlineCode",{parentName:"td"},"5"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.B }  }  }")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left")),(0,d.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,d.kt)("inlineCode",{parentName:"td"},"axes"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.XRAxes"},(0,d.kt)("inlineCode",{parentName:"a"},"XRAxes"))," = XRAxes.Left; ",(0,d.kt)("inlineCode",{parentName:"td"},"buttons"),": { ",(0,d.kt)("inlineCode",{parentName:"td"},"0"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LTrigger; ",(0,d.kt)("inlineCode",{parentName:"td"},"1"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LBumper; ",(0,d.kt)("inlineCode",{parentName:"td"},"2"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LPad; ",(0,d.kt)("inlineCode",{parentName:"td"},"3"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LStick; ",(0,d.kt)("inlineCode",{parentName:"td"},"4"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.X; ",(0,d.kt)("inlineCode",{parentName:"td"},"5"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.Y }  }")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.axes")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.XRAxes"},(0,d.kt)("inlineCode",{parentName:"a"},"XRAxes")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons")),(0,d.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,d.kt)("inlineCode",{parentName:"td"},"0"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LTrigger; ",(0,d.kt)("inlineCode",{parentName:"td"},"1"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LBumper; ",(0,d.kt)("inlineCode",{parentName:"td"},"2"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LPad; ",(0,d.kt)("inlineCode",{parentName:"td"},"3"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.LStick; ",(0,d.kt)("inlineCode",{parentName:"td"},"4"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.X; ",(0,d.kt)("inlineCode",{parentName:"td"},"5"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.Y }")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.0")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.1")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.2")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.3")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.4")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.left.buttons.5")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right")),(0,d.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,d.kt)("inlineCode",{parentName:"td"},"axes"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.XRAxes"},(0,d.kt)("inlineCode",{parentName:"a"},"XRAxes"))," = XRAxes.Right; ",(0,d.kt)("inlineCode",{parentName:"td"},"buttons"),": { ",(0,d.kt)("inlineCode",{parentName:"td"},"0"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RTrigger; ",(0,d.kt)("inlineCode",{parentName:"td"},"1"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RBumper; ",(0,d.kt)("inlineCode",{parentName:"td"},"2"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RPad; ",(0,d.kt)("inlineCode",{parentName:"td"},"3"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RStick; ",(0,d.kt)("inlineCode",{parentName:"td"},"4"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.A; ",(0,d.kt)("inlineCode",{parentName:"td"},"5"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.B }  }")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.axes")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.XRAxes"},(0,d.kt)("inlineCode",{parentName:"a"},"XRAxes")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons")),(0,d.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,d.kt)("inlineCode",{parentName:"td"},"0"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RTrigger; ",(0,d.kt)("inlineCode",{parentName:"td"},"1"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RBumper; ",(0,d.kt)("inlineCode",{parentName:"td"},"2"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RPad; ",(0,d.kt)("inlineCode",{parentName:"td"},"3"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.RStick; ",(0,d.kt)("inlineCode",{parentName:"td"},"4"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.A; ",(0,d.kt)("inlineCode",{parentName:"td"},"5"),": ",(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons"))," = GamepadButtons.B }")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.0")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.1")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.2")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.3")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.4")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"xr-standard.right.buttons.5")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/enums/input_enums_InputEnums.GamepadButtons"},(0,d.kt)("inlineCode",{parentName:"a"},"GamepadButtons")))))),(0,d.kt)("h4",{id:"defined-in"},"Defined in"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/input/functions/GamepadInput.ts#L163"},"packages/engine/src/input/functions/GamepadInput.ts:163")),(0,d.kt)("h2",{id:"functions"},"Functions"),(0,d.kt)("h3",{id:"handlegamepadaxis"},"handleGamepadAxis"),(0,d.kt)("p",null,"\u25b8 ",(0,d.kt)("strong",{parentName:"p"},"handleGamepadAxis"),"(",(0,d.kt)("inlineCode",{parentName:"p"},"gamepad"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"inputIndex"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"mappedInputValue"),"): ",(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("p",null,"Gamepad axis"),(0,d.kt)("h4",{id:"parameters"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"gamepad")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"Gamepad"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"inputIndex")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"number"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"mappedInputValue")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/modules/input_types_InputAlias#inputalias"},(0,d.kt)("inlineCode",{parentName:"a"},"InputAlias")))))),(0,d.kt)("h4",{id:"returns"},"Returns"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/input/functions/GamepadInput.ts#L79"},"packages/engine/src/input/functions/GamepadInput.ts:79")),(0,d.kt)("hr",null),(0,d.kt)("h3",{id:"handlegamepadbutton"},"handleGamepadButton"),(0,d.kt)("p",null,"\u25b8 ",(0,d.kt)("strong",{parentName:"p"},"handleGamepadButton"),"(",(0,d.kt)("inlineCode",{parentName:"p"},"gamepad"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"index"),"): ",(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("p",null,"Gamepad button"),(0,d.kt)("h4",{id:"parameters-1"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"gamepad")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"Gamepad"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"index")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"number"))))),(0,d.kt)("h4",{id:"returns-1"},"Returns"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/input/functions/GamepadInput.ts#L64"},"packages/engine/src/input/functions/GamepadInput.ts:64")),(0,d.kt)("hr",null),(0,d.kt)("h3",{id:"handlegamepadconnected"},"handleGamepadConnected"),(0,d.kt)("p",null,"\u25b8 ",(0,d.kt)("strong",{parentName:"p"},"handleGamepadConnected"),"(",(0,d.kt)("inlineCode",{parentName:"p"},"event"),"): ",(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("p",null,"When a gamepad connects"),(0,d.kt)("h4",{id:"parameters-2"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"event")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"any"))))),(0,d.kt)("h4",{id:"returns-2"},"Returns"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/input/functions/GamepadInput.ts#L122"},"packages/engine/src/input/functions/GamepadInput.ts:122")),(0,d.kt)("hr",null),(0,d.kt)("h3",{id:"handlegamepaddisconnected"},"handleGamepadDisconnected"),(0,d.kt)("p",null,"\u25b8 ",(0,d.kt)("strong",{parentName:"p"},"handleGamepadDisconnected"),"(",(0,d.kt)("inlineCode",{parentName:"p"},"event"),"): ",(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("p",null,"When a gamepad disconnects"),(0,d.kt)("h4",{id:"parameters-3"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"event")),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"any"))))),(0,d.kt)("h4",{id:"returns-3"},"Returns"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/input/functions/GamepadInput.ts#L143"},"packages/engine/src/input/functions/GamepadInput.ts:143")),(0,d.kt)("hr",null),(0,d.kt)("h3",{id:"handlegamepads"},"handleGamepads"),(0,d.kt)("p",null,"\u25b8 ",(0,d.kt)("strong",{parentName:"p"},"handleGamepads"),"(): ",(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("p",null,"System behavior to handle gamepad input"),(0,d.kt)("h4",{id:"returns-4"},"Returns"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"void")),(0,d.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/input/functions/GamepadInput.ts#L22"},"packages/engine/src/input/functions/GamepadInput.ts:22")))}o.isMDXComponent=!0}}]);