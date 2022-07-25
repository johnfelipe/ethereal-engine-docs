"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[21584],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>u});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},v=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),v=l(n),u=i,m=v["".concat(p,".").concat(u)]||v[u]||d[u]||o;return n?t.createElement(m,a(a({ref:r},c),{},{components:n})):t.createElement(m,a({ref:r},c))}));function u(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=v;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},95521:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(87462),i=(n(67294),n(3905));const o={id:"networking_instanceserver_provision_instanceserver_provision_helper",title:"Module: networking/instanceserver-provision/instanceserver-provision-helper",sidebar_label:"networking/instanceserver-provision/instanceserver-provision-helper",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"Api/server-core/modules/networking_instanceserver_provision_instanceserver_provision_helper",id:"Api/server-core/modules/networking_instanceserver_provision_instanceserver_provision_helper",title:"Module: networking/instanceserver-provision/instanceserver-provision-helper",description:"Functions",source:"@site/docs/Api/server-core/modules/networking_instanceserver_provision_instanceserver_provision_helper.md",sourceDirName:"Api/server-core/modules",slug:"/Api/server-core/modules/networking_instanceserver_provision_instanceserver_provision_helper",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/networking_instanceserver_provision_instanceserver_provision_helper",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"networking_instanceserver_provision_instanceserver_provision_helper",title:"Module: networking/instanceserver-provision/instanceserver-provision-helper",sidebar_label:"networking/instanceserver-provision/instanceserver-provision-helper",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"media/storageprovider/storageprovider",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/media_storageprovider_storageprovider"},next:{title:"networking/seeder-config",permalink:"/ethereal-engine-docs/docs/Api/server-core/modules/networking_seeder_config"}},p={},l=[{value:"Functions",id:"functions",level:2},{value:"patchInstanceserverLocation",id:"patchinstanceserverlocation",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:l};function d(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"patchinstanceserverlocation"},"patchInstanceserverLocation"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"patchInstanceserverLocation"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"app"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"locationId"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false }",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"app")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Application"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"locationId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = false }",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/d49d674/packages/server-core/src/networking/instanceserver-provision/instanceserver-provision-helper.ts#L8"},"packages/server-core/src/networking/instanceserver-provision/instanceserver-provision-helper.ts:8")))}d.isMDXComponent=!0}}]);