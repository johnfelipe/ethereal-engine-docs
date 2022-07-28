"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[96448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i="Running on Static IP under WSL2",l={unversionedId:"installation/running_on_static_IP",id:"installation/running_on_static_IP",title:"Running on Static IP under WSL2",description:"Follow these steps to run the engine on a static IP instead of localhost. In",source:"@site/docs/1_installation/5_running_on_static_IP.md",sourceDirName:"1_installation",slug:"/installation/running_on_static_IP",permalink:"/docs/docs/installation/running_on_static_IP",draft:!1,editUrl:"https://github.com/XRFoundation/ethereal-engine-docs/docs/1_installation/5_running_on_static_IP.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced Setup",permalink:"/docs/docs/installation/advanced_setup"},next:{title:"Troubleshooting",permalink:"/docs/docs/installation/install_troubleshooting"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-on-static-ip-under-wsl2"},"Running on Static IP under WSL2"),(0,o.kt)("p",null,"Follow these steps to run the engine on a static IP instead of localhost. In\nmost cases you should be able to simply access the engine using the public IP\nassigned to your device, but if you run into any issues or if you are running\nthe stack on WSL2 then you can refer to the following directions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Replace all localhost values with the static IP you want to run the stack on\nin your ",(0,o.kt)("inlineCode",{parentName:"li"},".env.local")," file."),(0,o.kt)("li",{parentName:"ol"},"Open a powershell terminal as admin. And run the ",(0,o.kt)("inlineCode",{parentName:"li"},"wsl2-port-forwarding.ps1"),"\nscript present under ",(0,o.kt)("inlineCode",{parentName:"li"},"/scripts")," directory.\nNote: Make sure all of the required ports are present in ports array of the\n",(0,o.kt)("inlineCode",{parentName:"li"},"wsl2-port-forwarding.ps1")," script."),(0,o.kt)("li",{parentName:"ol"},"And now just run the engine as you normally would and everything should be\naccessible over the static IP."),(0,o.kt)("li",{parentName:"ol"},"If you get any errors related to ",(0,o.kt)("strong",{parentName:"li"},"localhost:8642"),", then make sure that none of\nthe assets in your scene have been saved localhost path. If there are then\nreplace localhost with the static IP in the respective asset's path too.")))}p.isMDXComponent=!0}}]);