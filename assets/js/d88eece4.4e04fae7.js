"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[14278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,f=c["".concat(o,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"renderer_materials_constants_Caustics_mat",title:"Module: renderer/materials/constants/Caustics.mat",sidebar_label:"renderer/materials/constants/Caustics.mat",custom_edit_url:null},l=void 0,d={unversionedId:"Api/engine/modules/renderer_materials_constants_Caustics_mat",id:"Api/engine/modules/renderer_materials_constants_Caustics_mat",title:"Module: renderer/materials/constants/Caustics.mat",description:"Variables",source:"@site/docs/Api/engine/modules/renderer_materials_constants_Caustics_mat.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/renderer_materials_constants_Caustics_mat",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_materials_constants_Caustics_mat",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_materials_constants_Caustics_mat",title:"Module: renderer/materials/constants/Caustics.mat",sidebar_label:"renderer/materials/constants/Caustics.mat",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"renderer/materials/constants/Basic.mat",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_materials_constants_Basic_mat"},next:{title:"renderer/materials/constants/Circuits.mat",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_materials_constants_Circuits_mat"}},o={},s=[{value:"Variables",id:"variables",level:2},{value:"DefaultArgs",id:"defaultargs",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"fragmentShader",id:"fragmentshader",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"vertexShader",id:"vertexshader",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"defaultargs"},"DefaultArgs"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"DefaultArgs"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"iResolution")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),"[] ; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'vec3' }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"iResolution.default")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"iResolution.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"iTime")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0.0; ",(0,r.kt)("inlineCode",{parentName:"td"},"hide"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," = true }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"iTime.default")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"iTime.hide")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"offsetFrequency")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0.25; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'float' }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"offsetFrequency.default")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"offsetFrequency.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"offsetScale")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," = 0.5; ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = 'float' }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"offsetScale.default")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"offsetScale.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/renderer/materials/constants/Caustics.mat.ts#L54"},"packages/engine/src/renderer/materials/constants/Caustics.mat.ts:54")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fragmentshader"},"fragmentShader"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"fragmentShader"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\n#define TAU 6.28318530718\\n#define MAX_ITER 4\\nuniform float iTime;\\nuniform vec3 iResolution;\\n\\nvarying vec2 vUv;\\n\\n\\nvoid main() \\n{\\nvec2 fragCoord = vUv;\\nfloat time = iTime * .75+23.0;\\n// uv should be the 0-1 uv of texture...\\nvec2 uv = fragCoord.xy / iResolution.xy;\\nuv = fract(uv - vec2(iTime * 0.3, sin(iTime * 0.03)));\\n\\nvec2 p = mod(uv*TAU, TAU)-250.0;\\n\\nvec2 i = vec2(p);\\nfloat c = 1.0;\\nfloat inten = .005;\\n\\nfor (int n = 0; n < MAX_ITER; n++) \\n{\\n    float t = time * (1.0 - (3.5 / float(n+1)));\\n    i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));\\n    c += 1.0/length(vec2(p.x / (sin(i.x+t)/inten),p.y / (cos(i.y+t)/inten)));\\n}\\nc /= float(MAX_ITER);\\nc = 1.17-pow(c, 1.4);\\nvec3 color = vec3(pow(abs(c), 8.0));\\ncolor = clamp(color + vec3(0.0, 0.35, 0.5), 0.0, 1.0);\\n\\ngl_FragColor = vec4(color, 1.0);\\n}"')),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/renderer/materials/constants/Caustics.mat.ts#L17"},"packages/engine/src/renderer/materials/constants/Caustics.mat.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"vertexshader"},"vertexShader"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"vertexShader"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\nvarying vec2 vUv;\\nuniform float iTime;\\nuniform float offsetScale;\\nuniform float offsetFrequency;\\nvoid main() {\\n    vUv = uv;\\n    vec3 offset = normalize(normal) * sin(iTime * offsetFrequency) * offsetScale;\\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position + offset, 1);\\n}\\n"')),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/renderer/materials/constants/Caustics.mat.ts#L6"},"packages/engine/src/renderer/materials/constants/Caustics.mat.ts:6")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"default"},"default"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"default"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_materials_MaterialParms#materialparms"},(0,r.kt)("inlineCode",{parentName:"a"},"MaterialParms"))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_materials_MaterialParms#materialparms"},(0,r.kt)("inlineCode",{parentName:"a"},"MaterialParms"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/9f1b16f/packages/engine/src/renderer/materials/constants/Caustics.mat.ts#L61"},"packages/engine/src/renderer/materials/constants/Caustics.mat.ts:61")))}p.isMDXComponent=!0}}]);