"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[94812],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},o),{},{components:r})):n.createElement(m,l({ref:t},o))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},65114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={id:"particles_interfaces.ParticleMeshMaterial",title:"Interface: ParticleMeshMaterial",sidebar_label:"ParticleMeshMaterial",custom_edit_url:null},l=void 0,s={unversionedId:"Api/engine/interfaces/particles_interfaces.ParticleMeshMaterial",id:"Api/engine/interfaces/particles_interfaces.ParticleMeshMaterial",title:"Interface: ParticleMeshMaterial",description:"particles/interfaces.ParticleMeshMaterial",source:"@site/docs/Api/engine/interfaces/particles_interfaces.ParticleMeshMaterial.md",sourceDirName:"Api/engine/interfaces",slug:"/Api/engine/interfaces/particles_interfaces.ParticleMeshMaterial",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleMeshMaterial",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"particles_interfaces.ParticleMeshMaterial",title:"Interface: ParticleMeshMaterial",sidebar_label:"ParticleMeshMaterial",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ParticleMesh",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.ParticleMesh"},next:{title:"Vector",permalink:"/ethereal-engine-docs/docs/Api/engine/interfaces/particles_interfaces.Vector"}},c={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"map",id:"map",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"originalMaterial",id:"originalmaterial",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"transparent",id:"transparent",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"uniforms",id:"uniforms",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}],o={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/particles_interfaces"},"particles/interfaces"),".ParticleMeshMaterial"),(0,i.kt)("p",null,"Material for particle mesh."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ShaderMaterial")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ParticleMeshMaterial"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"map"},"map"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"map"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Texture")),(0,i.kt)("p",null,"Texture of particle"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/engine/src/particles/interfaces/index.ts#L26"},"packages/engine/src/particles/interfaces/index.ts:26")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"originalmaterial"},"originalMaterial"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"originalMaterial"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Material")),(0,i.kt)("p",null,"Original material of particle."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/engine/src/particles/interfaces/index.ts#L28"},"packages/engine/src/particles/interfaces/index.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transparent"},"transparent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transparent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,"ShaderMaterial.transparent"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/engine/src/particles/interfaces/index.ts#L30"},"packages/engine/src/particles/interfaces/index.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"uniforms"},"uniforms"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"uniforms"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,"ShaderMaterial.uniforms"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/5d0966a/packages/engine/src/particles/interfaces/index.ts#L29"},"packages/engine/src/particles/interfaces/index.ts:29")))}d.isMDXComponent=!0}}]);