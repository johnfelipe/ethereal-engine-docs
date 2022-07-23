"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[56477],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,g=m["".concat(s,".").concat(u)]||m[u]||k[u]||a;return t?r.createElement(g,l(l({ref:n},o),{},{components:t})):r.createElement(g,l({ref:n},o))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={id:"renderer_WebGLRendererSystem.EngineRenderer",title:"Class: EngineRenderer",sidebar_label:"EngineRenderer",custom_edit_url:null},l=void 0,d={unversionedId:"Api/engine/classes/renderer_WebGLRendererSystem.EngineRenderer",id:"Api/engine/classes/renderer_WebGLRendererSystem.EngineRenderer",title:"Class: EngineRenderer",description:"renderer/WebGLRendererSystem.EngineRenderer",source:"@site/docs/Api/engine/classes/renderer_WebGLRendererSystem.EngineRenderer.md",sourceDirName:"Api/engine/classes",slug:"/Api/engine/classes/renderer_WebGLRendererSystem.EngineRenderer",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_WebGLRendererSystem.EngineRenderer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"renderer_WebGLRendererSystem.EngineRenderer",title:"Class: EngineRenderer",sidebar_label:"EngineRenderer",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"default",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_THREE_WebGL.default"},next:{title:"FXAAEffect",permalink:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_effects_FXAAEffect.FXAAEffect"}},s={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"activeCSMLightEntity",id:"activecsmlightentity",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"averageFrameTime",id:"averageframetime",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"averageTimePeriods",id:"averagetimeperiods",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"canvas",id:"canvas",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"csm",id:"csm",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"directionalLightEntities",id:"directionallightentities",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"effectComposer",id:"effectcomposer",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"index",id:"index",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"isCSMEnabled",id:"iscsmenabled",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"maxQualityLevel",id:"maxqualitylevel",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"maxRenderDelta",id:"maxrenderdelta",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"minRenderDelta",id:"minrenderdelta",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"movingAverage",id:"movingaverage",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"needsResize",id:"needsresize",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"normalPass",id:"normalpass",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"renderContext",id:"rendercontext",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"renderPass",id:"renderpass",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"renderer",id:"renderer",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"rendereringEnabled",id:"rendereringenabled",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"scaleFactor",id:"scalefactor",level:3},{value:"Defined in",id:"defined-in-19",level:4},{value:"supportWebGL2",id:"supportwebgl2",level:3},{value:"Defined in",id:"defined-in-20",level:4},{value:"timeSamples",id:"timesamples",level:3},{value:"Defined in",id:"defined-in-21",level:4},{value:"webGLLostContext",id:"webgllostcontext",level:3},{value:"Defined in",id:"defined-in-22",level:4},{value:"xrManager",id:"xrmanager",level:3},{value:"Defined in",id:"defined-in-23",level:4},{value:"xrSession",id:"xrsession",level:3},{value:"Defined in",id:"defined-in-24",level:4},{value:"instance",id:"instance",level:3},{value:"Defined in",id:"defined-in-25",level:4},{value:"Methods",id:"methods",level:2},{value:"changeQualityLevel",id:"changequalitylevel",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-26",level:4},{value:"execute",id:"execute",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-27",level:4},{value:"handleWebGLConextLost",id:"handlewebglconextlost",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-28",level:4},{value:"handleWebGLConextRestore",id:"handlewebglconextrestore",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-29",level:4},{value:"initialize",id:"initialize",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-30",level:4},{value:"onResize",id:"onresize",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-31",level:4},{value:"resetScene",id:"resetscene",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-32",level:4}],o={toc:p};function k(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/renderer_WebGLRendererSystem"},"renderer/WebGLRendererSystem"),".EngineRenderer"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new EngineRenderer"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"activecsmlightentity"},"activeCSMLightEntity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"activeCSMLightEntity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))," = ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L100"},"packages/engine/src/renderer/WebGLRendererSystem.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"averageframetime"},"averageFrameTime"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"averageFrameTime"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L85"},"packages/engine/src/renderer/WebGLRendererSystem.ts:85")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"averagetimeperiods"},"averageTimePeriods"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"averageTimePeriods"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L89"},"packages/engine/src/renderer/WebGLRendererSystem.ts:89")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"canvas"},"canvas"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"canvas"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLCanvasElement")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L83"},"packages/engine/src/renderer/WebGLRendererSystem.ts:83")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"csm"},"csm"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"csm"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/assets_csm_CSM.CSM"},(0,i.kt)("inlineCode",{parentName:"a"},"CSM"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L97"},"packages/engine/src/renderer/WebGLRendererSystem.ts:97")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"directionallightentities"},"directionalLightEntities"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"directionalLightEntities"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/modules/ecs_classes_Entity#entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),"[] = ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L99"},"packages/engine/src/renderer/WebGLRendererSystem.ts:99")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"effectcomposer"},"effectComposer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"effectComposer"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/interfaces/renderer_WebGLRendererSystem.EffectComposerWithSchema"},(0,i.kt)("inlineCode",{parentName:"a"},"EffectComposerWithSchema"))),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L94"},"packages/engine/src/renderer/WebGLRendererSystem.ts:94")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"index"},"index"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"index"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L87"},"packages/engine/src/renderer/WebGLRendererSystem.ts:87")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iscsmenabled"},"isCSMEnabled"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isCSMEnabled"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L98"},"packages/engine/src/renderer/WebGLRendererSystem.ts:98")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxqualitylevel"},"maxQualityLevel"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"maxQualityLevel"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"5")),(0,i.kt)("p",null,"Maximum Quality level of the rendered. ",(0,i.kt)("strong",{parentName:"p"},"Default")," value is 5."),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L69"},"packages/engine/src/renderer/WebGLRendererSystem.ts:69")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxrenderdelta"},"maxRenderDelta"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"maxRenderDelta"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"point at which we downgrade quality level (large delta)"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L71"},"packages/engine/src/renderer/WebGLRendererSystem.ts:71")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"minrenderdelta"},"minRenderDelta"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"minRenderDelta"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"point at which we upgrade quality level (small delta)"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L73"},"packages/engine/src/renderer/WebGLRendererSystem.ts:73")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"movingaverage"},"movingAverage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"movingAverage"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/common_classes_ExponentialAverageCurve.ExponentialMovingAverage"},(0,i.kt)("inlineCode",{parentName:"a"},"ExponentialMovingAverage"))),(0,i.kt)("p",null,"init ExponentialMovingAverage"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L91"},"packages/engine/src/renderer/WebGLRendererSystem.ts:91")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"needsresize"},"needsResize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"needsResize"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Is resize needed?"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L66"},"packages/engine/src/renderer/WebGLRendererSystem.ts:66")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"normalpass"},"normalPass"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"normalPass"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"NormalPass")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L78"},"packages/engine/src/renderer/WebGLRendererSystem.ts:78")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rendercontext"},"renderContext"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"renderContext"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderingContext")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGL2RenderingContext")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L79"},"packages/engine/src/renderer/WebGLRendererSystem.ts:79")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"renderpass"},"renderPass"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"renderPass"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RenderPass")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L77"},"packages/engine/src/renderer/WebGLRendererSystem.ts:77")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"renderer"},"renderer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"renderer"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderer")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L93"},"packages/engine/src/renderer/WebGLRendererSystem.ts:93")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rendereringenabled"},"rendereringEnabled"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"rendereringEnabled"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L82"},"packages/engine/src/renderer/WebGLRendererSystem.ts:82")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scalefactor"},"scaleFactor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"scaleFactor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("p",null,"Resoulion scale. ",(0,i.kt)("strong",{parentName:"p"},"Default")," value is 1."),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L75"},"packages/engine/src/renderer/WebGLRendererSystem.ts:75")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"supportwebgl2"},"supportWebGL2"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"supportWebGL2"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L81"},"packages/engine/src/renderer/WebGLRendererSystem.ts:81")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"timesamples"},"timeSamples"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"timeSamples"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L86"},"packages/engine/src/renderer/WebGLRendererSystem.ts:86")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"webgllostcontext"},"webGLLostContext"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"webGLLostContext"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L101"},"packages/engine/src/renderer/WebGLRendererSystem.ts:101")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"xrmanager"},"xrManager"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"xrManager"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WebXRManager")),(0,i.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L95"},"packages/engine/src/renderer/WebGLRendererSystem.ts:95")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"xrsession"},"xrSession"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"xrSession"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"XRSession")),(0,i.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L96"},"packages/engine/src/renderer/WebGLRendererSystem.ts:96")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instance"},"instance"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"instance"),": ",(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/engine/classes/renderer_WebGLRendererSystem.EngineRenderer"},(0,i.kt)("inlineCode",{parentName:"a"},"EngineRenderer"))),(0,i.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L63"},"packages/engine/src/renderer/WebGLRendererSystem.ts:63")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"changequalitylevel"},"changeQualityLevel"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"changeQualityLevel"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Change the quality of the renderer."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-26"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L259"},"packages/engine/src/renderer/WebGLRendererSystem.ts:259")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"execute"},"execute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"execute"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"delta"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Executes the system. Called each frame by default from the Engine.instance."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Time since last frame.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-27"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L215"},"packages/engine/src/renderer/WebGLRendererSystem.ts:215")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"handlewebglconextlost"},"handleWebGLConextLost"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"handleWebGLConextLost"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"e"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"e")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-28"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L183"},"packages/engine/src/renderer/WebGLRendererSystem.ts:183")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"handlewebglconextrestore"},"handleWebGLConextRestore"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"handleWebGLConextRestore"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"e"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"e")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-29"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L193"},"packages/engine/src/renderer/WebGLRendererSystem.ts:193")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"initialize"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-30"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L103"},"packages/engine/src/renderer/WebGLRendererSystem.ts:103")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onresize"},"onResize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onResize"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Called on resize, sets resize flag."),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-31"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L207"},"packages/engine/src/renderer/WebGLRendererSystem.ts:207")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resetscene"},"resetScene"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"resetScene"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-32"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/ef32e76/packages/engine/src/renderer/WebGLRendererSystem.ts#L201"},"packages/engine/src/renderer/WebGLRendererSystem.ts:201")))}k.isMDXComponent=!0}}]);