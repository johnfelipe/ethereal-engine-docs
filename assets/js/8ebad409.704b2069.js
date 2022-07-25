"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[87883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"particles_functions_particleHelpers",title:"Module: particles/functions/particleHelpers",sidebar_label:"particles/functions/particleHelpers",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"Api/engine/modules/particles_functions_particleHelpers",id:"Api/engine/modules/particles_functions_particleHelpers",title:"Module: particles/functions/particleHelpers",description:"Variables",source:"@site/docs/Api/engine/modules/particles_functions_particleHelpers.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/particles_functions_particleHelpers",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/particles_functions_particleHelpers",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"particles_functions_particleHelpers",title:"Module: particles/functions/particleHelpers",sidebar_label:"particles/functions/particleHelpers",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"particles/functions/ParticleEmitterMesh",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/particles_functions_ParticleEmitterMesh"},next:{title:"particles/interfaces",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/particles_interfaces"}},s={},c=[{value:"Variables",id:"variables",level:2},{value:"DEG2RAD",id:"deg2rad",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"fragmentShader",id:"fragmentshader",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"vertexShader",id:"vertexshader",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"deg2rad"},"DEG2RAD"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"DEG2RAD"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0174533")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/234847b/packages/engine/src/particles/functions/particleHelpers.ts#L1"},"packages/engine/src/particles/functions/particleHelpers.ts:1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fragmentshader"},"fragmentShader"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"fragmentShader"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"\\n  #include <common>\\n  #include <fog_pars_fragment>\\n  uniform sampler2D map;\\n  varying vec2 vUV;\\n  varying vec4 vColor;\\n  void main() {\\n    gl_FragColor = texture2D(map,  vUV) * vColor;\\n    #include <fog_fragment>\\n  }\\n"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/234847b/packages/engine/src/particles/functions/particleHelpers.ts#L27"},"packages/engine/src/particles/functions/particleHelpers.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"vertexshader"},"vertexShader"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"vertexShader"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"\\n  #include <common>\\n  attribute vec4 particlePosition;\\n  attribute vec4 particleColor;\\n  attribute float particleAngle;\\n  varying vec4 vColor;\\n  varying vec2 vUV;\\n  uniform mat4 emitterMatrix;\\n  #include <fog_pars_vertex>\\n  void main() {\\n    vUV = uv;\\n    vColor = particleColor;\\n    float particleScale = particlePosition.w;\\n    vec4 mvPosition = viewMatrix * emitterMatrix * vec4(particlePosition.xyz, 1.0);\\n    \\n    vec3 rotatedPosition = position;\\n    rotatedPosition.x = cos( particleAngle ) * position.x - sin( particleAngle ) * position.y;\\n    rotatedPosition.y = sin( particleAngle ) * position.x + cos( particleAngle ) * position.y;\\n    mvPosition.xyz += rotatedPosition * particleScale;\\n    gl_Position = projectionMatrix * mvPosition;\\n    #include <fog_vertex>\\n  }\\n"')),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/234847b/packages/engine/src/particles/functions/particleHelpers.ts#L3"},"packages/engine/src/particles/functions/particleHelpers.ts:3")))}u.isMDXComponent=!0}}]);