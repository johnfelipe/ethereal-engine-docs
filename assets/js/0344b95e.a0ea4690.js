"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[63825],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),d=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),o=d(r),k=n,u=o["".concat(m,".").concat(k)]||o[k]||c[k]||i;return r?a.createElement(u,l(l({ref:t},s),{},{components:r})):a.createElement(u,l({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=o;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}o.displayName="MDXCreateElement"},70374:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={id:"particles_classes_ParticleEmitter",title:"Module: particles/classes/ParticleEmitter",sidebar_label:"particles/classes/ParticleEmitter",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"Api/engine/modules/particles_classes_ParticleEmitter",id:"Api/engine/modules/particles_classes_ParticleEmitter",title:"Module: particles/classes/ParticleEmitter",description:"Functions",source:"@site/docs/Api/engine/modules/particles_classes_ParticleEmitter.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/particles_classes_ParticleEmitter",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/particles_classes_ParticleEmitter",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"particles_classes_ParticleEmitter",title:"Module: particles/classes/ParticleEmitter",sidebar_label:"particles/classes/ParticleEmitter",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"networking/systems/WorldNetworkActionSystem",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/networking_systems_WorldNetworkActionSystem"},next:{title:"particles/classes/ParticleMesh",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/particles_classes_ParticleMesh"}},m={},d=[{value:"Functions",id:"functions",level:2},{value:"createParticleEmitter",id:"createparticleemitter",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"deleteParticleEmitter",id:"deleteparticleemitter",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"setEmitterMatrixWorld",id:"setemittermatrixworld",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"setEmitterTime",id:"setemittertime",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"createparticleemitter"},"createParticleEmitter"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createParticleEmitter"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"matrixWorld"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"time?"),"): ",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleEmitter"},(0,n.kt)("inlineCode",{parentName:"a"},"ParticleEmitter"))),(0,n.kt)("p",null,"Create particle emitter."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleEmitterInterface"},(0,n.kt)("inlineCode",{parentName:"a"},"ParticleEmitterInterface"))),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Options for particle emitter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"matrixWorld")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Matrix4")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Matrix world of particle emitter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"time")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Emitter time.")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleEmitter"},(0,n.kt)("inlineCode",{parentName:"a"},"ParticleEmitter"))),(0,n.kt)("p",null,"Newly created particle emitter."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/engine/src/particles/classes/ParticleEmitter.ts#L41"},"packages/engine/src/particles/classes/ParticleEmitter.ts:41")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"deleteparticleemitter"},"deleteParticleEmitter"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"deleteParticleEmitter"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"emitter"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Delete particle emitter."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"emitter")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleEmitter"},(0,n.kt)("inlineCode",{parentName:"a"},"ParticleEmitter"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Emitter to be deleted.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/engine/src/particles/classes/ParticleEmitter.ts#L142"},"packages/engine/src/particles/classes/ParticleEmitter.ts:142")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setemittermatrixworld"},"setEmitterMatrixWorld"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setEmitterMatrixWorld"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"emitter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"matrixWorld"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"time"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"deltaTime"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Apply matrix world to particle emitter."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"emitter")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleEmitter"},(0,n.kt)("inlineCode",{parentName:"a"},"ParticleEmitter"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Particle emitter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"matrixWorld")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Matrix4")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Matrix world to be applied on particle emitter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"time")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time to be applied on particle emitter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"deltaTime")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time since last frame.")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/engine/src/particles/classes/ParticleEmitter.ts#L348"},"packages/engine/src/particles/classes/ParticleEmitter.ts:348")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setemittertime"},"setEmitterTime"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setEmitterTime"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"emitter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"time"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Set particle emitter time."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"emitter")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleEmitter"},(0,n.kt)("inlineCode",{parentName:"a"},"ParticleEmitter"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Particle emitter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"time")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time of the particle emitter.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/engine/src/particles/classes/ParticleEmitter.ts#L337"},"packages/engine/src/particles/classes/ParticleEmitter.ts:337")))}c.isMDXComponent=!0}}]);