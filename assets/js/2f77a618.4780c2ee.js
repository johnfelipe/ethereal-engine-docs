"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[14899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),v=s,f=p["".concat(l,".").concat(v)]||p[v]||u[v]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function v(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={id:"scene_classes_water_shaders_waves_vertex",title:"Module: scene/classes/water/shaders/waves/vertex",sidebar_label:"scene/classes/water/shaders/waves/vertex",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"Api/engine/modules/scene_classes_water_shaders_waves_vertex",id:"Api/engine/modules/scene_classes_water_shaders_waves_vertex",title:"Module: scene/classes/water/shaders/waves/vertex",description:"Variables",source:"@site/docs/Api/engine/modules/scene_classes_water_shaders_waves_vertex.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_classes_water_shaders_waves_vertex",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_shaders_waves_vertex",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_classes_water_shaders_waves_vertex",title:"Module: scene/classes/water/shaders/waves/vertex",sidebar_label:"scene/classes/water/shaders/waves/vertex",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/classes/water/shaders/waves/update_fragment",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_shaders_waves_update_fragment"},next:{title:"scene/components/AmbientLightComponent",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_components_AmbientLightComponent"}},l={},c=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"variables"},"Variables"),(0,s.kt)("h3",{id:"default"},"default"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"default"),": ",(0,s.kt)("inlineCode",{parentName:"p"},'"\\nattribute vec3 position;\\nattribute vec2 uv;\\nvarying vec2 coord;\\n\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  coord = position.xy * 0.5 + 0.5;\\n  vUv = uv;\\n  gl_Position = vec4(position.xyz, 1.0);\\n}\\n"')),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/scene/classes/water/shaders/waves/vertex.ts#L1"},"packages/engine/src/scene/classes/water/shaders/waves/vertex.ts:1")))}u.isMDXComponent=!0}}]);