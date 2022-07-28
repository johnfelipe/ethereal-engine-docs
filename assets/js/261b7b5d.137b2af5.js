"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[96946],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(t),k=r,g=c["".concat(s,".").concat(k)]||c[k]||m[k]||i;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},62603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={id:"scene_components_InstancingComponent",title:"Module: scene/components/InstancingComponent",sidebar_label:"scene/components/InstancingComponent",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"API/engine/modules/scene_components_InstancingComponent",id:"API/engine/modules/scene_components_InstancingComponent",title:"Module: scene/components/InstancingComponent",description:"Enumerations",source:"@site/docs/API/engine/modules/scene_components_InstancingComponent.md",sourceDirName:"API/engine/modules",slug:"/API/engine/modules/scene_components_InstancingComponent",permalink:"/docs/docs/API/engine/modules/scene_components_InstancingComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"scene_components_InstancingComponent",title:"Module: scene/components/InstancingComponent",sidebar_label:"scene/components/InstancingComponent",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"scene/components/ImageComponent",permalink:"/docs/docs/API/engine/modules/scene_components_ImageComponent"},next:{title:"scene/components/InteriorComponent",permalink:"/docs/docs/API/engine/modules/scene_components_InteriorComponent"}},s={},l=[{value:"Enumerations",id:"enumerations",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"GrassProperties",id:"grassproperties",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"InstancingComponentType",id:"instancingcomponenttype",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"MeshProperties",id:"meshproperties",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"NodeProperties",id:"nodeproperties",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"NormalizedProperty",id:"normalizedproperty",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"RandomizedProperty",id:"randomizedproperty",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"SampleProperties",id:"sampleproperties",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"ScatterProperties",id:"scatterproperties",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"SourceProperties",id:"sourceproperties",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"VertexProperties",id:"vertexproperties",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"Variables",id:"variables",level:2},{value:"InstancingComponent",id:"instancingcomponent",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"InstancingStagingComponent",id:"instancingstagingcomponent",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"InstancingUnstagingComponent",id:"instancingunstagingcomponent",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"Functions",id:"functions",level:2},{value:"sample",id:"sample",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"sampleVar",id:"samplevar",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-14",level:4}],d={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enumerations"},"Enumerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/docs/API/engine/enums/scene_components_InstancingComponent.SampleMode"},"SampleMode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/docs/API/engine/enums/scene_components_InstancingComponent.ScatterMode"},"ScatterMode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/docs/API/engine/enums/scene_components_InstancingComponent.ScatterState"},"ScatterState"))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"grassproperties"},"GrassProperties"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"GrassProperties"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"alphaMap")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Texture")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ambientStrength")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bladeHeight")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#randomizedproperty"},(0,r.kt)("inlineCode",{parentName:"a"},"RandomizedProperty")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bladeWidth")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#randomizedproperty"},(0,r.kt)("inlineCode",{parentName:"a"},"RandomizedProperty")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"diffuseStrength")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"grassTexture")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Texture")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isGrassProperties")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"joints")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"shininess")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sunColor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Color"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L36"},"packages/engine/src/scene/components/InstancingComponent.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instancingcomponenttype"},"InstancingComponentType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"InstancingComponentType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"count")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/enums/scene_components_InstancingComponent.ScatterMode"},(0,r.kt)("inlineCode",{parentName:"a"},"ScatterMode")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sampleProperties")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#scatterproperties"},(0,r.kt)("inlineCode",{parentName:"a"},"ScatterProperties"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#vertexproperties"},(0,r.kt)("inlineCode",{parentName:"a"},"VertexProperties"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#nodeproperties"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeProperties")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sampling")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/enums/scene_components_InstancingComponent.SampleMode"},(0,r.kt)("inlineCode",{parentName:"a"},"SampleMode")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sourceProperties")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#grassproperties"},(0,r.kt)("inlineCode",{parentName:"a"},"GrassProperties"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#meshproperties"},(0,r.kt)("inlineCode",{parentName:"a"},"MeshProperties")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/enums/scene_components_InstancingComponent.ScatterState"},(0,r.kt)("inlineCode",{parentName:"a"},"ScatterState")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"surface")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L84"},"packages/engine/src/scene/components/InstancingComponent.ts:84")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"meshproperties"},"MeshProperties"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"MeshProperties"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"instancedMesh")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isMeshProperties")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L50"},"packages/engine/src/scene/components/InstancingComponent.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nodeproperties"},"NodeProperties"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"NodeProperties"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isNodeProperties")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"root")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L76"},"packages/engine/src/scene/components/InstancingComponent.ts:76")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"normalizedproperty"},"NormalizedProperty"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"NormalizedProperty"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L25"},"packages/engine/src/scene/components/InstancingComponent.ts:25")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"randomizedproperty"},"RandomizedProperty"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"RandomizedProperty"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mu")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sigma")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L24"},"packages/engine/src/scene/components/InstancingComponent.ts:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sampleproperties"},"SampleProperties"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SampleProperties"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#scatterproperties"},(0,r.kt)("inlineCode",{parentName:"a"},"ScatterProperties"))," & ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#vertexproperties"},(0,r.kt)("inlineCode",{parentName:"a"},"VertexProperties"))," & ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#nodeproperties"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeProperties"))),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L81"},"packages/engine/src/scene/components/InstancingComponent.ts:81")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scatterproperties"},"ScatterProperties"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"ScatterProperties"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"isScatterProperties"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"  } & ",(0,r.kt)("inlineCode",{parentName:"p"},"DensityMapped")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"HeightMapped")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L65"},"packages/engine/src/scene/components/InstancingComponent.ts:65")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sourceproperties"},"SourceProperties"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SourceProperties"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#grassproperties"},(0,r.kt)("inlineCode",{parentName:"a"},"GrassProperties"))," & ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#meshproperties"},(0,r.kt)("inlineCode",{parentName:"a"},"MeshProperties"))),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L82"},"packages/engine/src/scene/components/InstancingComponent.ts:82")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"vertexproperties"},"VertexProperties"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"VertexProperties"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"isVertexProperties"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"vertexColors"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"  } & ",(0,r.kt)("inlineCode",{parentName:"p"},"DensityMapped")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"HeightMapped")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L70"},"packages/engine/src/scene/components/InstancingComponent.ts:70")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"instancingcomponent"},"InstancingComponent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"InstancingComponent"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,r.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#instancingcomponenttype"},(0,r.kt)("inlineCode",{parentName:"a"},"InstancingComponentType")),", {}",">"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L94"},"packages/engine/src/scene/components/InstancingComponent.ts:94")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instancingstagingcomponent"},"InstancingStagingComponent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"InstancingStagingComponent"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,r.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", {}",">"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L96"},"packages/engine/src/scene/components/InstancingComponent.ts:96")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instancingunstagingcomponent"},"InstancingUnstagingComponent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"InstancingUnstagingComponent"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/API/engine/modules/ecs_functions_ComponentFunctions#mappedcomponent"},(0,r.kt)("inlineCode",{parentName:"a"},"MappedComponent")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", {}",">"),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L98"},"packages/engine/src/scene/components/InstancingComponent.ts:98")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"sample"},"sample"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"sample"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"prop"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"prop")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#randomizedproperty"},(0,r.kt)("inlineCode",{parentName:"a"},"RandomizedProperty")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L27"},"packages/engine/src/scene/components/InstancingComponent.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"samplevar"},"sampleVar"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"sampleVar"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"prop"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"prop")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/docs/API/engine/modules/scene_components_InstancingComponent#randomizedproperty"},(0,r.kt)("inlineCode",{parentName:"a"},"RandomizedProperty")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/engine/src/scene/components/InstancingComponent.ts#L32"},"packages/engine/src/scene/components/InstancingComponent.ts:32")))}m.isMDXComponent=!0}}]);