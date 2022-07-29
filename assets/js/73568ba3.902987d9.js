"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[75657],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=o(a),u=s,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var o=2;o<i;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76623:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=a(87462),s=(a(67294),a(3905));const i={id:"physics_classes_springs_SpringSimulator.SpringSimulator",title:"Class: SpringSimulator",sidebar_label:"SpringSimulator",custom_edit_url:null},r=void 0,l={unversionedId:"API/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator",id:"API/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator",title:"Class: SpringSimulator",description:"physics/classes/springs/SpringSimulator.SpringSimulator",source:"@site/docs/API/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator.md",sourceDirName:"API/engine/classes",slug:"/API/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator",permalink:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SpringSimulator.SpringSimulator",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"physics_classes_springs_SpringSimulator.SpringSimulator",title:"Class: SpringSimulator",sidebar_label:"SpringSimulator",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"RelativeSpringSimulator",permalink:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SpringSimulator.RelativeSpringSimulator"},next:{title:"VectorSpringSimulator",permalink:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_VectorSpringSimulator.VectorSpringSimulator"}},p={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"cache",id:"cache",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"damping",id:"damping",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"frameTime",id:"frametime",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"mass",id:"mass",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"offset",id:"offset",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"position",id:"position",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"velocity",id:"velocity",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods",level:2},{value:"generateFrames",id:"generateframes",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getFrame",id:"getframe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"lastFrame",id:"lastframe",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"setFPS",id:"setfps",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"simulate",id:"simulate",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-13",level:4}],d={toc:o};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/physics_classes_springs_SpringSimulator"},"physics/classes/springs/SpringSimulator"),".SpringSimulator"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},(0,s.kt)("inlineCode",{parentName:"a"},"SimulatorBase"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"SpringSimulator"))))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"new SpringSimulator"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"fps"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"mass"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"damping"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"startPosition?"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"startVelocity?"),")"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"fps")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"mass")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"damping")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"startPosition")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"0"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"startVelocity")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"0"))))),(0,s.kt)("h4",{id:"overrides"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#constructor"},"constructor")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L23"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:23")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"cache"},"cache"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"cache"),": ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulationFrame.SimulationFrame"},(0,s.kt)("inlineCode",{parentName:"a"},"SimulationFrame")),"[]"),(0,s.kt)("h4",{id:"overrides-1"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#cache"},"cache")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L21"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:21")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"damping"},"damping"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"damping"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#damping"},"damping")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L3"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:3")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"frametime"},"frameTime"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"frameTime"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#frametime"},"frameTime")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L4"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:4")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"mass"},"mass"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"mass"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#mass"},"mass")),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L2"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:2")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"offset"},"offset"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"offset"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#offset"},"offset")),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L5"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:5")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"position"},"position"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"position"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L18"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:18")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"target"},"target"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"target"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L20"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:20")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"velocity"},"velocity"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"velocity"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L19"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:19")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"generateframes"},"generateFrames"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"generateFrames"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"timeStep"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("p",null,"Generates frames between last simulation call and the current one"),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number"))))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#generateframes"},"generateFrames")),(0,s.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L27"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:27")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getframe"},"getFrame"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getFrame"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"isLastFrame"),"): ",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulationFrame.SimulationFrame"},(0,s.kt)("inlineCode",{parentName:"a"},"SimulationFrame"))),(0,s.kt)("p",null,"Gets another simulation frame"),(0,s.kt)("h4",{id:"parameters-2"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"isLastFrame")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulationFrame.SimulationFrame"},(0,s.kt)("inlineCode",{parentName:"a"},"SimulationFrame"))),(0,s.kt)("h4",{id:"overrides-2"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#getframe"},"getFrame")),(0,s.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L57"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:57")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"lastframe"},"lastFrame"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"lastFrame"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#lastframe"},"lastFrame")),(0,s.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L19"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:19")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"setfps"},"setFPS"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"setFPS"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-3"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"value")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number"))))),(0,s.kt)("h4",{id:"returns-3"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#setfps"},"setFPS")),(0,s.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SimulatorBase.ts#L15"},"packages/engine/src/physics/classes/springs/SimulatorBase.ts:15")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"simulate"},"simulate"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"simulate"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"timeStep"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("p",null,"Advances the simulation by given time step"),(0,s.kt)("h4",{id:"parameters-4"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"number"))))),(0,s.kt)("h4",{id:"returns-4"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"overrides-3"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase"},"SimulatorBase"),".",(0,s.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/physics_classes_springs_SimulatorBase.SimulatorBase#simulate"},"simulate")),(0,s.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6804550/packages/engine/src/physics/classes/springs/SpringSimulator.ts#L45"},"packages/engine/src/physics/classes/springs/SpringSimulator.ts:45")))}m.isMDXComponent=!0}}]);