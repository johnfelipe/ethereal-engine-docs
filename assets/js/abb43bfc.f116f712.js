"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[82694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=p(r),c=n,g=k["".concat(d,".").concat(c)]||k[c]||m[c]||i;return r?a.createElement(g,o(o({ref:t},s),{},{components:r})):a.createElement(g,o({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},96179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={id:"media_storageprovider_storageprovider_interface.StorageProviderInterface",title:"Interface: StorageProviderInterface",sidebar_label:"StorageProviderInterface",custom_edit_url:null},o=void 0,l={unversionedId:"Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface",id:"Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface",title:"Interface: StorageProviderInterface",description:"media/storageprovider/storageprovider.interface.StorageProviderInterface",source:"@site/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface.md",sourceDirName:"Api/server-core/interfaces",slug:"/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface",permalink:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"media_storageprovider_storageprovider_interface.StorageProviderInterface",title:"Interface: StorageProviderInterface",sidebar_label:"StorageProviderInterface",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"StorageObjectInterface",permalink:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageObjectInterface"},next:{title:"Client",permalink:"/ethereal-engine-docs/docs/Api/server-core/interfaces/types_Client.Client"}},d={},p=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"cacheDomain",id:"cachedomain",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"createInvalidation",id:"createinvalidation",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"deleteResources",id:"deleteresources",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"doesExist",id:"doesexist",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getCachedObject",id:"getcachedobject",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getObject",id:"getobject",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getProvider",id:"getprovider",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"getSignedUrl",id:"getsignedurl",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getStorage",id:"getstorage",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"isDirectory",id:"isdirectory",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"listFolderContent",id:"listfoldercontent",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"listObjects",id:"listobjects",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"moveObject",id:"moveobject",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"putObject",id:"putobject",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-13",level:4}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/modules/media_storageprovider_storageprovider_interface"},"media/storageprovider/storageprovider.interface"),".StorageProviderInterface"),(0,n.kt)("p",null,"Storage provide interface to provide template for storage handling capabilities."),(0,n.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/server-core/classes/media_storageprovider_ipfs_storage.IPFSStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"IPFSStorage"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/server-core/classes/media_storageprovider_local_storage.LocalStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"LocalStorage"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ethereal-engine-docs/docs/Api/server-core/classes/media_storageprovider_s3_storage.S3Provider"},(0,n.kt)("inlineCode",{parentName:"a"},"S3Provider")))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"cachedomain"},"cacheDomain"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"cacheDomain"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Domain address of cache."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L126"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:126")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"createinvalidation"},"createInvalidation"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createInvalidation"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"invalidationItems"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("p",null,"Invalidate items in the storage."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"invalidationItems")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of keys.")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L132"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:132")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"deleteresources"},"deleteResources"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"deleteResources"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"keys"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("p",null,"Delete resources in the storage."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keys")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of keys.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L138"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:138")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"doesexist"},"doesExist"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"doesExist"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"fileName"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"directoryPath"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("p",null,"Check if an object exists in the storage."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fileName")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of file in the storage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"directoryPath")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Directory of file in the storage.")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L146"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:146")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getcachedobject"},"getCachedObject"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getCachedObject"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageObjectInterface"},(0,n.kt)("inlineCode",{parentName:"a"},"StorageObjectInterface")),">"),(0,n.kt)("p",null,"Get the object from edge cache, otherwise returns getObject."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Key of object.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageObjectInterface"},(0,n.kt)("inlineCode",{parentName:"a"},"StorageObjectInterface")),">"),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L153"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:153")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getobject"},"getObject"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getObject"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageObjectInterface"},(0,n.kt)("inlineCode",{parentName:"a"},"StorageObjectInterface")),">"),(0,n.kt)("p",null,"Get the storage object."),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Key of object.")))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageObjectInterface"},(0,n.kt)("inlineCode",{parentName:"a"},"StorageObjectInterface")),">"),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L160"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:160")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getprovider"},"getProvider"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getProvider"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface"},(0,n.kt)("inlineCode",{parentName:"a"},"StorageProviderInterface"))),(0,n.kt)("p",null,"Get the instance of current storage provider."),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface"},(0,n.kt)("inlineCode",{parentName:"a"},"StorageProviderInterface"))),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L166"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:166")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getsignedurl"},"getSignedUrl"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getSignedUrl"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"expiresAfter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"conditions"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.SignedURLResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"SignedURLResponse")),">"),(0,n.kt)("p",null,"Get the signed url response of the storage object."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Key of object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"expiresAfter")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of seconds for which signed policy should be valid. Defaults to 3600 (one hour).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"conditions")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"any")),(0,n.kt)("td",{parentName:"tr",align:"left"},"An array of conditions that must be met for certain providers like S3.")))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.SignedURLResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"SignedURLResponse")),">"),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L175"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:175")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getstorage"},"getStorage"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getStorage"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.BlobStore"},(0,n.kt)("inlineCode",{parentName:"a"},"BlobStore"))),(0,n.kt)("p",null,"Get the BlobStore object for current storage."),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.BlobStore"},(0,n.kt)("inlineCode",{parentName:"a"},"BlobStore"))),(0,n.kt)("p",null,"Blob store."),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L181"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:181")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"isdirectory"},"isDirectory"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"isDirectory"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"fileName"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"directoryPath"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("p",null,"Check if an object is directory or not."),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fileName")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of file in the storage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"directoryPath")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Directory of file in the storage.")))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L189"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:189")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"listfoldercontent"},"listFolderContent"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"listFolderContent"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"folderName"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"recursive?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"FileContentType"),"[]",">"),(0,n.kt)("p",null,"List all the files/folders in the directory."),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"folderName")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of folder in the storage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"recursive?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If true it will list content from sub folders as well.")))),(0,n.kt)("h4",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"FileContentType"),"[]",">"),(0,n.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L196"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:196")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"listobjects"},"listObjects"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"listObjects"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"prefix"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"recursive?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"continuationToken?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageListObjectInterface"},(0,n.kt)("inlineCode",{parentName:"a"},"StorageListObjectInterface")),">"),(0,n.kt)("p",null,"Get a list of keys under a path."),(0,n.kt)("h4",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"prefix")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Path relative to root in order to list objects.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"recursive?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If true it will list content from sub folders as well.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"continuationToken?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"It indicates that the list is being continued with a token. Used for certain providers like S3.")))),(0,n.kt)("h4",{id:"returns-10"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageListObjectInterface"},(0,n.kt)("inlineCode",{parentName:"a"},"StorageListObjectInterface")),">"),(0,n.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L205"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:205")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"moveobject"},"moveObject"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"moveObject"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"oldName"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"newName"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"oldPath"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"newPath"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"isCopy?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("p",null,"Move or copy object from one place to another."),(0,n.kt)("h4",{id:"parameters-9"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"oldName")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the old object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"newName")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the new object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"oldPath")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Path of the old object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"newPath")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Path of the new object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"isCopy?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If true it will create a copy of object.")))),(0,n.kt)("h4",{id:"returns-11"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L215"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:215")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"putobject"},"putObject"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"putObject"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("p",null,"Adds an object into the storage."),(0,n.kt)("h4",{id:"parameters-10"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageObjectInterface"},(0,n.kt)("inlineCode",{parentName:"a"},"StorageObjectInterface"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage object to be added.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.PutObjectParams"},(0,n.kt)("inlineCode",{parentName:"a"},"PutObjectParams"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Parameters of the add request.")))),(0,n.kt)("h4",{id:"returns-12"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L222"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:222")))}m.isMDXComponent=!0}}]);