"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[89421],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=d(t),g=a,v=f["".concat(s,".").concat(g)]||f[g]||l[g]||o;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63731:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const o={id:"media_storageprovider_storageprovider_interface.StorageObjectInterface",title:"Interface: StorageObjectInterface",sidebar_label:"StorageObjectInterface",custom_edit_url:null},i=void 0,c={unversionedId:"API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageObjectInterface",id:"API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageObjectInterface",title:"Interface: StorageObjectInterface",description:"media/storageprovider/storageprovider.interface.StorageObjectInterface",source:"@site/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageObjectInterface.md",sourceDirName:"API/server-core/interfaces",slug:"/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageObjectInterface",permalink:"/docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageObjectInterface",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"media_storageprovider_storageprovider_interface.StorageObjectInterface",title:"Interface: StorageObjectInterface",sidebar_label:"StorageObjectInterface",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"StorageListObjectInterface",permalink:"/docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageListObjectInterface"},next:{title:"StorageProviderInterface",permalink:"/docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface"}},s={},d=[{value:"Properties",id:"properties",level:2},{value:"Body",id:"body",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ContentType",id:"contenttype",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Key",id:"key",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:d};function l(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/docs/API/server-core/modules/media_storageprovider_storageprovider_interface"},"media/storageprovider/storageprovider.interface"),".StorageObjectInterface"),(0,a.kt)("p",null,"Interface defining storage object."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"body"},"Body"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Body"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("p",null,"Buffer object of the storage."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L24"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"contenttype"},"ContentType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ContentType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"A standard MIME type describing the format of the object data."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L28"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"key"},"Key"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"Key"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Key in the storage."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b91fa0b/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L20"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:20")))}l.isMDXComponent=!0}}]);