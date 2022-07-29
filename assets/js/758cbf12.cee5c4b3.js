"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[26090],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},v=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),v=p(t),g=o,u=v["".concat(s,".").concat(g)]||v[g]||c[g]||n;return t?a.createElement(u,i(i({ref:r},l),{},{components:t})):a.createElement(u,i({ref:r},l))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=v;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<n;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},16240:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>d,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const n={id:"media_storageprovider_storageprovider",title:"Module: media/storageprovider/storageprovider",sidebar_label:"media/storageprovider/storageprovider",sidebar_position:0,custom_edit_url:null},i=void 0,d={unversionedId:"API/server-core/modules/media_storageprovider_storageprovider",id:"API/server-core/modules/media_storageprovider_storageprovider",title:"Module: media/storageprovider/storageprovider",description:"Functions",source:"@site/docs/API/server-core/modules/media_storageprovider_storageprovider.md",sourceDirName:"API/server-core/modules",slug:"/API/server-core/modules/media_storageprovider_storageprovider",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/media_storageprovider_storageprovider",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"media_storageprovider_storageprovider",title:"Module: media/storageprovider/storageprovider",sidebar_label:"media/storageprovider/storageprovider",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"media/storageprovider/storageProviderUtils",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/media_storageprovider_storageProviderUtils"},next:{title:"networking/instanceserver-provision/instanceserver-provision-helper",permalink:"/ethereal-engine-docs/docs/API/server-core/modules/networking_instanceserver_provision_instanceserver_provision_helper"}},s={},p=[{value:"Functions",id:"functions",level:2},{value:"createDefaultStorageProvider",id:"createdefaultstorageprovider",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"createIPFSStorageProvider",id:"createipfsstorageprovider",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"createStorageProvider",id:"createstorageprovider",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getStorageProvider",id:"getstorageprovider",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],l={toc:p};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"createdefaultstorageprovider"},"createDefaultStorageProvider"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"createDefaultStorageProvider"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface"},(0,o.kt)("inlineCode",{parentName:"a"},"StorageProviderInterface"))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface"},(0,o.kt)("inlineCode",{parentName:"a"},"StorageProviderInterface"))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/aabb9a2/packages/server-core/src/media/storageprovider/storageprovider.ts#L35"},"packages/server-core/src/media/storageprovider/storageprovider.ts:35")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"createipfsstorageprovider"},"createIPFSStorageProvider"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"createIPFSStorageProvider"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/server-core/classes/media_storageprovider_ipfs_storage.IPFSStorage"},(0,o.kt)("inlineCode",{parentName:"a"},"IPFSStorage")),">"),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/server-core/classes/media_storageprovider_ipfs_storage.IPFSStorage"},(0,o.kt)("inlineCode",{parentName:"a"},"IPFSStorage")),">"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/aabb9a2/packages/server-core/src/media/storageprovider/storageprovider.ts#L21"},"packages/server-core/src/media/storageprovider/storageprovider.ts:21")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"createstorageprovider"},"createStorageProvider"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"createStorageProvider"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"constructor"),"): ",(0,o.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface"},(0,o.kt)("inlineCode",{parentName:"a"},"StorageProviderInterface"))),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"constructor")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"StorageProviderConstructor"))))),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface"},(0,o.kt)("inlineCode",{parentName:"a"},"StorageProviderInterface"))),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/aabb9a2/packages/server-core/src/media/storageprovider/storageprovider.ts#L15"},"packages/server-core/src/media/storageprovider/storageprovider.ts:15")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getstorageprovider"},"getStorageProvider"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getStorageProvider"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"provider?"),"): ",(0,o.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface"},(0,o.kt)("inlineCode",{parentName:"a"},"StorageProviderInterface"))),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"provider")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"'default'"))))),(0,o.kt)("h4",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface"},(0,o.kt)("inlineCode",{parentName:"a"},"StorageProviderInterface"))),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/aabb9a2/packages/server-core/src/media/storageprovider/storageprovider.ts#L9"},"packages/server-core/src/media/storageprovider/storageprovider.ts:9")))}c.isMDXComponent=!0}}]);