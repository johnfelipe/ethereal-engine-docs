"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[55703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return n?a.createElement(m,u(u({ref:t},o),{},{components:n})):a.createElement(m,u({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var c=2;c<i;c++)u[c]=n[c];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={id:"input_interfaces_InputValue.InputValue",title:"Interface: InputValue",sidebar_label:"InputValue",custom_edit_url:null},u=void 0,l={unversionedId:"API/engine/interfaces/input_interfaces_InputValue.InputValue",id:"API/engine/interfaces/input_interfaces_InputValue.InputValue",title:"Interface: InputValue",description:"input/interfaces/InputValue.InputValue",source:"@site/docs/API/engine/interfaces/input_interfaces_InputValue.InputValue.md",sourceDirName:"API/engine/interfaces",slug:"/API/engine/interfaces/input_interfaces_InputValue.InputValue",permalink:"/docs/docs/API/engine/interfaces/input_interfaces_InputValue.InputValue",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"input_interfaces_InputValue.InputValue",title:"Interface: InputValue",sidebar_label:"InputValue",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"InputSchema",permalink:"/docs/docs/API/engine/interfaces/input_interfaces_InputSchema.InputSchema"},next:{title:"InteractiveModalState",permalink:"/docs/docs/API/engine/interfaces/interaction_ui_InteractiveModalView.InteractiveModalState"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"lifecycleState",id:"lifecyclestate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"value",id:"value",level:3},{value:"Defined in",id:"defined-in-2",level:4}],o={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/input_interfaces_InputValue"},"input/interfaces/InputValue"),".InputValue"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"lifecyclestate"},"lifecycleState"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"lifecycleState"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"Started"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"Continued"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"Ended"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"Changed"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"Unchanged"')),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/input/interfaces/InputValue.ts#L8"},"packages/engine/src/input/interfaces/InputValue.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/enums/input_enums_InputType.InputType"},(0,r.kt)("inlineCode",{parentName:"a"},"InputType"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/input/interfaces/InputValue.ts#L6"},"packages/engine/src/input/interfaces/InputValue.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"value"},"value"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"value"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/common_types_NumericalTypes#numericaltype"},(0,r.kt)("inlineCode",{parentName:"a"},"NumericalType"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/input/interfaces/InputValue.ts#L7"},"packages/engine/src/input/interfaces/InputValue.ts:7")))}s.isMDXComponent=!0}}]);