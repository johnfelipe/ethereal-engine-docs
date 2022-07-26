"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[8985],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>g});var t=r(67294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=t.createContext({}),d=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),g=l,p=u["".concat(o,".").concat(g)]||u[g]||f[g]||i;return r?t.createElement(p,a(a({ref:n},c),{},{components:r})):t.createElement(p,a({ref:n},c))}));function g(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37510:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=r(87462),l=(r(67294),r(3905));const i={id:"renderer_effects_blending_glsl_exclusion_shader_frag",title:"Module: renderer/effects/blending/glsl/exclusion/shader.frag",sidebar_label:"renderer/effects/blending/glsl/exclusion/shader.frag",custom_edit_url:null},a=void 0,s={unversionedId:"Api/engine/modules/renderer_effects_blending_glsl_exclusion_shader_frag",id:"Api/engine/modules/renderer_effects_blending_glsl_exclusion_shader_frag",title:"Module: renderer/effects/blending/glsl/exclusion/shader.frag",description:"Variables",source:"@site/docs/Api/engine/modules/renderer_effects_blending_glsl_exclusion_shader_frag.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/renderer_effects_blending_glsl_exclusion_shader_frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_exclusion_shader_frag",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_blending_glsl_exclusion_shader_frag",title:"Module: renderer/effects/blending/glsl/exclusion/shader.frag",sidebar_label:"renderer/effects/blending/glsl/exclusion/shader.frag",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/effects/blending/glsl/divide/shader.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_divide_shader_frag"},next:{title:"renderer/effects/blending/glsl/lighten/shader.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_lighten_shader_frag"}},o={},d=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],c={toc:d};function f(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("h3",{id:"default"},"default"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},'"vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\n\\treturn (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);\\n\\n}\\n"')),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/6fa600c/packages/engine/src/renderer/effects/blending/glsl/exclusion/shader.frag.ts#L1"},"packages/engine/src/renderer/effects/blending/glsl/exclusion/shader.frag.ts:1")))}f.isMDXComponent=!0}}]);