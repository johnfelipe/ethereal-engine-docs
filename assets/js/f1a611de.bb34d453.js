"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[45664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=o(n),u=i,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var o=2;o<r;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={id:"physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",title:"Class: VectorSpringSimulator",sidebar_label:"VectorSpringSimulator",custom_edit_url:null},s=void 0,l={unversionedId:"Api/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",id:"Api/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",title:"Class: VectorSpringSimulator",description:"physics/classes/springs/VectorSpringSimulator.VectorSpringSimulator",source:"@site/docs/Api/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator",title:"Class: VectorSpringSimulator",sidebar_label:"VectorSpringSimulator",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SpringSimulator",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator"},next:{title:"EngineRendererReceptor",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_EngineRendererState.EngineRendererReceptor"}},p={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"cache",id:"cache",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"damping",id:"damping",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"frameTime",id:"frametime",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"mass",id:"mass",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"offset",id:"offset",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"position",id:"position",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"velocity",id:"velocity",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods",level:2},{value:"generateFrames",id:"generateframes",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getFrame",id:"getframe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"init",id:"init",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"lastFrame",id:"lastframe",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"setFPS",id:"setfps",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"simulate",id:"simulate",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-14",level:4}],d={toc:o};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/physics_classes_springs_VectorSpringSimulator"},"physics/classes/springs/VectorSpringSimulator"),".VectorSpringSimulator"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},(0,i.kt)("inlineCode",{parentName:"a"},"SimulatorBase"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"VectorSpringSimulator"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new VectorSpringSimulator"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"fps"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mass"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"damping"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fps")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mass")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"damping")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L23"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:23")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cache"},"cache"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cache"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SimulationFrameVector"),"[]"),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#cache"},"cache")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L21"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"damping"},"damping"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"damping"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#damping"},"damping")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L3"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:3")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"frametime"},"frameTime"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"frameTime"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#frametime"},"frameTime")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L4"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mass"},"mass"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mass"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#mass"},"mass")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L2"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:2")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"offset"},"offset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"offset"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#offset"},"offset")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L5"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"position"},"position"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"position"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L18"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"target"},"target"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"target"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L20"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"velocity"},"velocity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"velocity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L19"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:19")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"generateframes"},"generateFrames"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"generateFrames"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"timeStep"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Generates frames between last simulation call and the current one"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#generateframes"},"generateFrames")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L27"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getframe"},"getFrame"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getFrame"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"isLastFrame"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"SimulationFrameVector")),(0,i.kt)("p",null,"Gets another simulation frame"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isLastFrame")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SimulationFrameVector")),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#getframe"},"getFrame")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L58"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"init"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L30"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lastframe"},"lastFrame"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"lastFrame"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#lastframe"},"lastFrame")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L19"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setfps"},"setFPS"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setFPS"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#setfps"},"setFPS")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L15"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"simulate"},"simulate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"simulate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"timeStep"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Advances the simulation by given time step"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#simulate"},"simulate")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0e28e79/packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts#L46"},"packages/engine/src/physics/classes/springs/VectorSpringSimulator.ts:46")))}m.isMDXComponent=!0}}]);