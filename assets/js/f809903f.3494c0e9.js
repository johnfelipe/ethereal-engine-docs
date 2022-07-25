"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[11064],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>u});var t=r(67294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=d(r),u=l,p=g["".concat(s,".").concat(u)]||g[u]||f[u]||a;return r?t.createElement(p,i(i({ref:n},c),{},{components:r})):t.createElement(p,i({ref:n},c))}));function u(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<a;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},32620:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=r(87462),l=(r(67294),r(3905));const a={id:"renderer_effects_blending_glsl_negation_shader_frag",title:"Module: renderer/effects/blending/glsl/negation/shader.frag",sidebar_label:"renderer/effects/blending/glsl/negation/shader.frag",custom_edit_url:null},i=void 0,o={unversionedId:"Api/engine/modules/renderer_effects_blending_glsl_negation_shader_frag",id:"Api/engine/modules/renderer_effects_blending_glsl_negation_shader_frag",title:"Module: renderer/effects/blending/glsl/negation/shader.frag",description:"Variables",source:"@site/docs/Api/engine/modules/renderer_effects_blending_glsl_negation_shader_frag.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/renderer_effects_blending_glsl_negation_shader_frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_negation_shader_frag",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_blending_glsl_negation_shader_frag",title:"Module: renderer/effects/blending/glsl/negation/shader.frag",sidebar_label:"renderer/effects/blending/glsl/negation/shader.frag",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/effects/blending/glsl/multiply/shader.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_multiply_shader_frag"},next:{title:"renderer/effects/blending/glsl/normal/shader.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_normal_shader_frag"}},s={},d=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],c={toc:d};function f(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("h3",{id:"default"},"default"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},'"vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\n\\treturn (1.0 - abs(1.0 - x - y)) * opacity + x * (1.0 - opacity);\\n\\n}\\n"')),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/renderer/effects/blending/glsl/negation/shader.frag.ts#L1"},"packages/engine/src/renderer/effects/blending/glsl/negation/shader.frag.ts:1")))}f.isMDXComponent=!0}}]);