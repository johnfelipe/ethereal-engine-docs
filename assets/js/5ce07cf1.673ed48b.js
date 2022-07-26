"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[87882],{3905:(e,r,n)=>{n.d(r,{Zo:()=>o,kt:()=>u});var t=n(67294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=t.createContext({}),c=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},o=function(e){var r=c(e.components);return t.createElement(d.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),g=c(n),u=l,p=g["".concat(d,".").concat(u)]||g[u]||f[u]||a;return n?t.createElement(p,s(s({ref:r},o),{},{components:n})):t.createElement(p,s({ref:r},o))}));function u(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20149:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=n(87462),l=(n(67294),n(3905));const a={id:"renderer_effects_blending_glsl_screen_shader_frag",title:"Module: renderer/effects/blending/glsl/screen/shader.frag",sidebar_label:"renderer/effects/blending/glsl/screen/shader.frag",custom_edit_url:null},s=void 0,i={unversionedId:"Api/engine/modules/renderer_effects_blending_glsl_screen_shader_frag",id:"Api/engine/modules/renderer_effects_blending_glsl_screen_shader_frag",title:"Module: renderer/effects/blending/glsl/screen/shader.frag",description:"Variables",source:"@site/docs/Api/engine/modules/renderer_effects_blending_glsl_screen_shader_frag.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/renderer_effects_blending_glsl_screen_shader_frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_screen_shader_frag",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_effects_blending_glsl_screen_shader_frag",title:"Module: renderer/effects/blending/glsl/screen/shader.frag",sidebar_label:"renderer/effects/blending/glsl/screen/shader.frag",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/effects/blending/glsl/reflect/shader.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_reflect_shader_frag"},next:{title:"renderer/effects/blending/glsl/soft-light/shader.frag",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_effects_blending_glsl_soft_light_shader_frag"}},d={},c=[{value:"Variables",id:"variables",level:2},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in",level:4}],o={toc:c};function f(e){let{components:r,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},o,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("h3",{id:"default"},"default"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},'"vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\n\\treturn (1.0 - (1.0 - x) * (1.0 - y)) * opacity + x * (1.0 - opacity);\\n\\n}\\n"')),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/11906ad/packages/engine/src/renderer/effects/blending/glsl/screen/shader.frag.ts#L1"},"packages/engine/src/renderer/effects/blending/glsl/screen/shader.frag.ts:1")))}f.isMDXComponent=!0}}]);