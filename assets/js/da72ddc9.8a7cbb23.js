"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[78979],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),l=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,g=u["".concat(d,".").concat(f)]||u[f]||p[f]||a;return t?n.createElement(g,o(o({ref:r},c),{},{components:t})):n.createElement(g,o({ref:r},c))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13814:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(87462),i=(t(67294),t(3905));const a={id:"media_storageprovider_storageprovider_interface.SignedURLResponse",title:"Interface: SignedURLResponse",sidebar_label:"SignedURLResponse",custom_edit_url:null},o=void 0,s={unversionedId:"API/server-core/interfaces/media_storageprovider_storageprovider_interface.SignedURLResponse",id:"API/server-core/interfaces/media_storageprovider_storageprovider_interface.SignedURLResponse",title:"Interface: SignedURLResponse",description:"media/storageprovider/storageprovider.interface.SignedURLResponse",source:"@site/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.SignedURLResponse.md",sourceDirName:"API/server-core/interfaces",slug:"/API/server-core/interfaces/media_storageprovider_storageprovider_interface.SignedURLResponse",permalink:"/ethereal-engine-docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.SignedURLResponse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"media_storageprovider_storageprovider_interface.SignedURLResponse",title:"Interface: SignedURLResponse",sidebar_label:"SignedURLResponse",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"PutObjectParams",permalink:"/ethereal-engine-docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.PutObjectParams"},next:{title:"StorageListObjectInterface",permalink:"/ethereal-engine-docs/docs/API/server-core/interfaces/media_storageprovider_storageprovider_interface.StorageListObjectInterface"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"cacheDomain",id:"cachedomain",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"fields",id:"fields",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"local",id:"local",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"url",id:"url",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:l};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/API/server-core/modules/media_storageprovider_storageprovider_interface"},"media/storageprovider/storageprovider.interface"),".SignedURLResponse"),(0,i.kt)("p",null,"Interface defining signed url response."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cachedomain"},"cacheDomain"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cacheDomain"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Domain address of cache."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/aabb9a2/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L78"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:78")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fields"},"fields"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fields"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"The fields that must be included as hidden inputs on the form."),(0,i.kt)("h4",{id:"index-signature"},"Index signature"),(0,i.kt)("p",null,"\u25aa ","[key: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/aabb9a2/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L64"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"local"},"local"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"local"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"True if the URL is local storage."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/aabb9a2/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L74"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:74")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"url"},"url"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"url"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The URL that should be used as the action of the form."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/aabb9a2/packages/server-core/src/media/storageprovider/storageprovider.interface.ts#L70"},"packages/server-core/src/media/storageprovider/storageprovider.interface.ts:70")))}p.isMDXComponent=!0}}]);