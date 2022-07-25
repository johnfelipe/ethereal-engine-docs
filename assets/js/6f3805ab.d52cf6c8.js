"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[37388],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>u});var t=n(67294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=s(n),u=l,p=g["".concat(i,".").concat(u)]||g[u]||f[u]||o;return n?t.createElement(p,d(d({ref:r},c),{},{components:n})):t.createElement(p,d({ref:r},c))}));function u(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=n.length,d=new Array(o);d[0]=g;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,d[1]=a;for(var s=2;s<o;s++)d[s]=n[s];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7332:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var t=n(87462),l=(n(67294),n(3905));const o={id:"renderer_effects_blending_glsl_color_dodge_shader_frag",title:"Module: renderer/effects/blending/glsl/color-dodge/shader.frag",sidebar_label:"renderer/effects/blending/glsl/color-dodge/shader.frag",custom_edit_url:null},d=void 0,a={unversionedId:"Api/engine/modules/renderer_effects_blending_glsl_color_dodge_shader_frag",id:"Api/engine/modules/renderer_effects_blending_glsl_color_dodge_shader_frag",title:"Module: renderer/effects/blending/glsl/color-dodge/shader.frag",description:"Variables",source:"@site/docs/Api/engine/modules/renderer_effects_blending_glsl_color_dodge_shader_frag.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/renderer_effects_blending_glsl_color_dodge_shader_frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_color_dodge_shader_frag",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_blending_glsl_color_dodge_shader_frag",title:"Module: renderer/effects/blending/glsl/color-dodge/shader.frag",sidebar_label:"renderer/effects/blending/glsl/color-dodge/shader.frag",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/effects/blending/glsl/color-burn/shader.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_color_burn_shader_frag"},next:{title:"renderer/effects/blending/glsl/darken/shader.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_darken_shader_frag"}},i={},s=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],c={toc:s};function f(e){let{components:r,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("h3",{id:"default"},"default"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},'"float blend(const in float x, const in float y) {\\n\\treturn (y == 1.0) ? y : min(x / (1.0 - y), 1.0);\\n}\\n\\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\\n\\treturn z * opacity + x * (1.0 - opacity);\\n}"')),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/1487dca/packages/engine/src/renderer/effects/blending/glsl/color-dodge/shader.frag.ts#L1"},"packages/engine/src/renderer/effects/blending/glsl/color-dodge/shader.frag.ts:1")))}f.isMDXComponent=!0}}]);