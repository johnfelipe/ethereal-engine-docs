"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[87804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(f,s(s({ref:t},o),{},{components:n})):a.createElement(f,s({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"assets_superbuffer_schema.Schema",title:"Class: Schema<T>",sidebar_label:"Schema",custom_edit_url:null},s=void 0,l={unversionedId:"API/engine/classes/assets_superbuffer_schema.Schema",id:"API/engine/classes/assets_superbuffer_schema.Schema",title:"Class: Schema<T>",description:"assets/superbuffer/schema.Schema",source:"@site/docs/API/engine/classes/assets_superbuffer_schema.Schema.md",sourceDirName:"API/engine/classes",slug:"/API/engine/classes/assets_superbuffer_schema.Schema",permalink:"/ethereal-engine-docs/docs/API/engine/classes/assets_superbuffer_schema.Schema",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"assets_superbuffer_schema.Schema",title:"Class: Schema<T>",sidebar_label:"Schema",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Model",permalink:"/ethereal-engine-docs/docs/API/engine/classes/assets_superbuffer_model.Model"},next:{title:"ConvexGeometry",permalink:"/ethereal-engine-docs/docs/API/engine/classes/assets_threejs_various_ConvexGeometry.ConvexGeometry"}},p={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"struct",id:"struct",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"instances",id:"instances",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"definition",id:"definition",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4}],o={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_schema"},"assets/superbuffer/schema"),".Schema"),(0,r.kt)("p",null,"The Schema class provides an API for creating definitions."),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">"," = ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Schema"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"struct"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"id?"),")"),(0,r.kt)("p",null,"Create a new Schema instance."),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">"," = ",(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"struct")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#schemadefinition"},(0,r.kt)("inlineCode",{parentName:"a"},"SchemaDefinition")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"T"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"SchemaDefinition structure of the Schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Schema.instances.size")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/736f0bf/packages/engine/src/assets/superbuffer/schema.ts#L26"},"packages/engine/src/assets/superbuffer/schema.ts:26")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Id of the schema."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/736f0bf/packages/engine/src/assets/superbuffer/schema.ts#L15"},"packages/engine/src/assets/superbuffer/schema.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"struct"},"struct"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"struct"),": ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#schemadefinition"},(0,r.kt)("inlineCode",{parentName:"a"},"SchemaDefinition")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",">"),(0,r.kt)("p",null,"Schema definition reference."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/736f0bf/packages/engine/src/assets/superbuffer/schema.ts#L19"},"packages/engine/src/assets/superbuffer/schema.ts:19")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instances"},"instances"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"instances"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/classes/assets_superbuffer_schema.Schema"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",">",">"),(0,r.kt)("p",null,"Map that contains references to all Schema instances."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/736f0bf/packages/engine/src/assets/superbuffer/schema.ts#L11"},"packages/engine/src/assets/superbuffer/schema.ts:11")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"definition"},"definition"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"definition"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"obj"),"): ",(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#schemadefinition"},(0,r.kt)("inlineCode",{parentName:"a"},"SchemaDefinition")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",">"),(0,r.kt)("p",null,"Create a SchemaDefinition without creating a Schema instance."),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"obj")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#schemadefinition"},(0,r.kt)("inlineCode",{parentName:"a"},"SchemaDefinition")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"T"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object defining the schema.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/engine/modules/assets_superbuffer_types#schemadefinition"},(0,r.kt)("inlineCode",{parentName:"a"},"SchemaDefinition")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/736f0bf/packages/engine/src/assets/superbuffer/schema.ts#L45"},"packages/engine/src/assets/superbuffer/schema.ts:45")))}m.isMDXComponent=!0}}]);