"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[95461],{3905:(e,r,n)=>{n.d(r,{Zo:()=>f,kt:()=>u});var t=n(67294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),d=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},f=function(e){var r=d(e.components);return t.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),g=d(n),u=l,p=g["".concat(o,".").concat(u)]||g[u]||c[u]||a;return n?t.createElement(p,i(i({ref:r},f),{},{components:n})):t.createElement(p,i({ref:r},f))}));function u(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},28926:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=n(87462),l=(n(67294),n(3905));const a={id:"renderer_effects_blending_glsl_soft_light_shader_frag",title:"Module: renderer/effects/blending/glsl/soft-light/shader.frag",sidebar_label:"renderer/effects/blending/glsl/soft-light/shader.frag",custom_edit_url:null},i=void 0,s={unversionedId:"API/engine/modules/renderer_effects_blending_glsl_soft_light_shader_frag",id:"API/engine/modules/renderer_effects_blending_glsl_soft_light_shader_frag",title:"Module: renderer/effects/blending/glsl/soft-light/shader.frag",description:"Variables",source:"@site/docs/API/engine/modules/renderer_effects_blending_glsl_soft_light_shader_frag.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/renderer_effects_blending_glsl_soft_light_shader_frag",permalink:"/ethereal-engine-docs/docs/API/engine/modules/renderer_effects_blending_glsl_soft_light_shader_frag",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_blending_glsl_soft_light_shader_frag",title:"Module: renderer/effects/blending/glsl/soft-light/shader.frag",sidebar_label:"renderer/effects/blending/glsl/soft-light/shader.frag",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/effects/blending/glsl/screen/shader.frag",permalink:"/ethereal-engine-docs/docs/API/engine/modules/renderer_effects_blending_glsl_screen_shader_frag"},next:{title:"renderer/effects/blending/glsl/subtract/shader.frag",permalink:"/ethereal-engine-docs/docs/API/engine/modules/renderer_effects_blending_glsl_subtract_shader_frag"}},o={},d=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],f={toc:d};function c(e){let{components:r,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("h3",{id:"default"},"default"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},'"float blend(const in float x, const in float y) {\\n\\n\\treturn (y < 0.5) ?\\n\\t\\t(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :\\n\\t\\t(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));\\n\\n}\\n\\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\n\\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\\n\\n\\treturn z * opacity + x * (1.0 - opacity);\\n\\n}\\n"')),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/736f0bf/packages/engine/src/renderer/effects/blending/glsl/soft-light/shader.frag.ts#L1"},"packages/engine/src/renderer/effects/blending/glsl/soft-light/shader.frag.ts:1")))}c.isMDXComponent=!0}}]);