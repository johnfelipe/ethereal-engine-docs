"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[65384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i="Editor & Locations",s={unversionedId:"concepts/editor_scenes_locations",id:"concepts/editor_scenes_locations",title:"Editor & Locations",description:"Scene Editor",source:"@site/docs/3_concepts/2_editor_scenes_locations.md",sourceDirName:"3_concepts",slug:"/concepts/editor_scenes_locations",permalink:"/ethereal-engine-docs/docs/concepts/editor_scenes_locations",draft:!1,editUrl:"https://github.com/XRFoundation/ethereal-engine-docs/docs/3_concepts/2_editor_scenes_locations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Projects",permalink:"/ethereal-engine-docs/docs/concepts/projects_api"},next:{title:"Entity Component System",permalink:"/ethereal-engine-docs/docs/concepts/ecs"}},c={},l=[{value:"Scene Editor",id:"scene-editor",level:2},{value:"Locations &amp; Instances",id:"locations--instances",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"editor--locations"},"Editor & Locations"),(0,r.kt)("h2",{id:"scene-editor"},"Scene Editor"),(0,r.kt)("p",null,"Navigating to ",(0,r.kt)("inlineCode",{parentName:"p"},"/editor")," will show you the projects page, where you can open existing projects or create a new one."),(0,r.kt)("p",null,"Opening a project will route you to ",(0,r.kt)("inlineCode",{parentName:"p"},"/editor/<projectName>")," where the project editor will load. From here, you can open a scene, which will route you again to ",(0,r.kt)("inlineCode",{parentName:"p"},"/editor/<projectName>/<sceneName>")),(0,r.kt)("p",null,"The scene consists of a list of 'nodes' which act as templates / prefabs. These are what you would normally expect in a scene editor, such as models, colliders and audio, but we also support a wide range of integrations, such as shopify, wordpress and even portals to let you traverse between worlds."),(0,r.kt)("p",null,"To save a scene with Ctrl+S or in the top left hamburger menu."),(0,r.kt)("h2",{id:"locations--instances"},"Locations & Instances"),(0,r.kt)("p",null,"Locations can be thought of as instantiations of scene. This is how you connect your scene to a shared session."),(0,r.kt)("p",null,"Locations can be loaded via the ",(0,r.kt)("inlineCode",{parentName:"p"},"/location/<locationName>")," route, where ",(0,r.kt)("inlineCode",{parentName:"p"},"locationName")," is the name of the location. By default, the locations ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"apartment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sky-station")," are added. This will tell the server to figure out which of the current instances of the location is best suited for you to join. This allows us to scale events and locations to potentially millions of concurrent users without having to support them all on a single instance. Instances can be customised with the 'matchmaker' functionality to create private rooms for you to hang out with your friends that disappear once everyone leaves, or game where more complicated logic can be handled for things like tournaments with multiple rounds."),(0,r.kt)("p",null,"Adding a new location is done from ",(0,r.kt)("inlineCode",{parentName:"p"},"/admin/locations")," route."))}d.isMDXComponent=!0}}]);