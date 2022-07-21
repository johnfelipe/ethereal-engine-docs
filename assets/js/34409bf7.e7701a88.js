"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[28669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),f=p(r),u=a,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||i;return r?n.createElement(m,l(l({ref:t},o),{},{components:r})):n.createElement(m,l({ref:t},o))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"particles_interfaces.ParticleMesh",title:"Interface: ParticleMesh",sidebar_label:"ParticleMesh",custom_edit_url:null},l=void 0,c={unversionedId:"Api/engine/interfaces/particles_interfaces.ParticleMesh",id:"Api/engine/interfaces/particles_interfaces.ParticleMesh",title:"Interface: ParticleMesh",description:"particles/interfaces.ParticleMesh",source:"@site/docs/Api/engine/interfaces/particles_interfaces.ParticleMesh.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/particles_interfaces.ParticleMesh",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleMesh",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"particles_interfaces.ParticleMesh",title:"Interface: ParticleMesh",sidebar_label:"ParticleMesh",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ParticleEmitterInterface",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleEmitterInterface"},next:{title:"ParticleMeshMaterial",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleMeshMaterial"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"geometry",id:"geometry",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"material",id:"material",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"userData",id:"userdata",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-2",level:4}],o={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/particles_interfaces"},"particles/interfaces"),".ParticleMesh"),(0,a.kt)("p",null,"Interface for particle mesh."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"geometry"},"geometry"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"geometry"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/particles_interfaces#particlegeometry"},(0,a.kt)("inlineCode",{parentName:"a"},"ParticleGeometry"))),(0,a.kt)("p",null,"Geometry of particle mesh."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/particles/interfaces/index.ts#L12"},"packages/engine/src/particles/interfaces/index.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"material"},"material"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"material"),": ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleMeshMaterial"},(0,a.kt)("inlineCode",{parentName:"a"},"ParticleMeshMaterial"))),(0,a.kt)("p",null,"Material for particles."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/particles/interfaces/index.ts#L14"},"packages/engine/src/particles/interfaces/index.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"userdata"},"userData"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"userData"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("p",null,"User data."),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"meshConfig")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configs for mesh.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nextIndex")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7008700/packages/engine/src/particles/interfaces/index.ts#L16"},"packages/engine/src/particles/interfaces/index.ts:16")))}d.isMDXComponent=!0}}]);