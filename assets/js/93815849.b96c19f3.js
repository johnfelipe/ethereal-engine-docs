"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[50570],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>p});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=l(n),p=a,m=f["".concat(i,".").concat(p)]||f[p]||u[p]||s;return n?t.createElement(m,c(c({ref:r},d),{},{components:n})):t.createElement(m,c({ref:r},d))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=f;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<s;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8367:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const s={id:"scene_classes_water_shaders_surface_fragment",title:"Module: scene/classes/water/shaders/surface/fragment",sidebar_label:"scene/classes/water/shaders/surface/fragment",sidebar_position:0,custom_edit_url:null},c=void 0,o={unversionedId:"Api/engine/modules/scene_classes_water_shaders_surface_fragment",id:"Api/engine/modules/scene_classes_water_shaders_surface_fragment",title:"Module: scene/classes/water/shaders/surface/fragment",description:"Variables",source:"@site/docs/Api/engine/modules/scene_classes_water_shaders_surface_fragment.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/scene_classes_water_shaders_surface_fragment",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_shaders_surface_fragment",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_classes_water_shaders_surface_fragment",title:"Module: scene/classes/water/shaders/surface/fragment",sidebar_label:"scene/classes/water/shaders/surface/fragment",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/classes/water/WaveSimulator",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_WaveSimulator"},next:{title:"scene/classes/water/shaders/surface/vertex",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/scene_classes_water_shaders_surface_vertex"}},i={},l=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:l};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\nuniform sampler2D envMap;\\nuniform samplerCube skybox;\\n\\nvarying vec2 refractedPosition[3];\\nvarying vec3 reflected;\\nvarying float reflectionFactor;\\n\\nvarying vec2 vUv;\\n\\nvoid main() {\\n\\n  float circle = step(length(vUv - 0.5), 0.5);\\n  if(circle == 0.){\\n    discard;\\n  }\\n\\n  // Color coming from the sky reflection\\n  vec3 reflectedColor = textureCube(skybox, reflected).xyz;\\n\\n  // Color coming from the environment refraction, applying chromatic aberration\\n  vec3 refractedColor = vec3(1.);\\n  refractedColor.r = texture2D(envMap, refractedPosition[0] * 0.5 + 0.5).r;\\n  refractedColor.g = texture2D(envMap, refractedPosition[1] * 0.5 + 0.5).g;\\n  refractedColor.b = texture2D(envMap, refractedPosition[2] * 0.5 + 0.5).b;\\n\\n  gl_FragColor = vec4(mix(refractedColor, reflectedColor, clamp(reflectionFactor, 0., 1.)), 1.);\\n}\\n"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c3d57b8/packages/engine/src/scene/classes/water/shaders/surface/fragment.ts#L1"},"packages/engine/src/scene/classes/water/shaders/surface/fragment.ts:1")))}u.isMDXComponent=!0}}]);