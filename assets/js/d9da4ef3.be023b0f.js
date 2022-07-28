"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[61926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},l="Installing on Mac OS X",i={unversionedId:"installation/mac_os_x",id:"installation/mac_os_x",title:"Installing on Mac OS X",description:"1. Go to the root and run",source:"@site/docs/1_installation/2_mac_os_x.md",sourceDirName:"1_installation",slug:"/installation/mac_os_x",permalink:"/docs/docs/installation/mac_os_x",draft:!1,editUrl:"https://github.com/XRFoundation/ethereal-engine-docs/docs/1_installation/2_mac_os_x.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Setup",permalink:"/docs/docs/installation/basic_setup"},next:{title:"Installing on Windows 10+",permalink:"/docs/docs/installation/windows"}},s={},c=[{value:"Troubleshooting Mac",id:"troubleshooting-mac",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-on-mac-os-x"},"Installing on Mac OS X"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the root and run")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install\nnpm run dev-docker\nnpm run dev-reinit\n")),(0,o.kt)("p",null,"Or if you are on a M1 based Mac"),(0,o.kt)("p",null,"(Recommended)\n1) Duplicate the Terminal app, and configure it to run in Rosetta\n2) Run the above in Rosetta Terminal"),(0,o.kt)("p",null,"(Not recommended)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install\n")),(0,o.kt)("p",null,"This is because on Apple chips the node-darwin sometimes doesn't get installed\nproperly and by using yarn it fixes the issue."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Have docker started in the background and then in the terminal type")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,o.kt)("p",null,"This will open the mariaDB and SQL scripts on the docker and will start the servers"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"To make sure your environment is set and running properly just go to\nhttps://localhost:3000/location/default and you should be able to walk around an empty 3D scene")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Note : Make sure you are on Node >= 16 and have docker running. \n")),(0,o.kt)("h2",{id:"troubleshooting-mac"},"Troubleshooting Mac"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you find issues on your terminal that says that access-denied for user\n",(0,o.kt)("inlineCode",{parentName:"li"},"server@localhost")," then you can use this command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew services stop mysql\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you find issue on your terminal that says\n",(0,o.kt)("inlineCode",{parentName:"li"},'An unexpected error occurred: "expected workspace package'),"\nwhile using yarn then you can use this command in your terminal")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn policies set-version 1.18.0\n")),(0,o.kt)("p",null,"As yarn > 1.18 sometimes doesn't work properly with lerna."))}p.isMDXComponent=!0}}]);