"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[26096],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"media_storageprovider_getCacheDomain",title:"Module: media/storageprovider/getCacheDomain",sidebar_label:"media/storageprovider/getCacheDomain",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"Api/server-core/modules/media_storageprovider_getCacheDomain",id:"Api/server-core/modules/media_storageprovider_getCacheDomain",title:"Module: media/storageprovider/getCacheDomain",description:"Functions",source:"@site/docs/Api/server-core/modules/media_storageprovider_getCacheDomain.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/media_storageprovider_getCacheDomain",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/media_storageprovider_getCacheDomain",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"media_storageprovider_getCacheDomain",title:"Module: media/storageprovider/getCacheDomain",sidebar_label:"media/storageprovider/getCacheDomain",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"media/services",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/media_services"},next:{title:"media/storageprovider/getCachedURL",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/media_storageprovider_getCachedURL"}},l={},s=[{value:"Functions",id:"functions",level:2},{value:"getCacheDomain",id:"getcachedomain",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"getcachedomain"},"getCacheDomain"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getCacheDomain"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"storageProvider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"internal?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Returns the cache domain for the provided storage provider. If running inside minikube and is an internal request, returns the internal minikube address."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"storageProvider")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/ethereal-engine-docs/docs/Api/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageProviderInterface"},(0,a.kt)("inlineCode",{parentName:"a"},"StorageProviderInterface"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the storage provider")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"internal")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:"left"},"true if the request is coming from inside a server, only relevant when run from minikube")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/07e4bb7/packages/server-core/src/media/storageprovider/getCacheDomain.ts#L10"},"packages/server-core/src/media/storageprovider/getCacheDomain.ts:10")))}c.isMDXComponent=!0}}]);