"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[25551],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=i,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},80990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={},a="Troubleshooting",l={unversionedId:"installation/install_troubleshooting",id:"installation/install_troubleshooting",title:"Troubleshooting",description:"Browser Debug",source:"@site/docs/1_installation/6_install_troubleshooting.md",sourceDirName:"1_installation",slug:"/installation/install_troubleshooting",permalink:"/ethereal-engine-docs/docs/installation/install_troubleshooting",draft:!1,editUrl:"https://github.com/XRFoundation/ethereal-engine-docs/docs/1_installation/6_install_troubleshooting.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running on Static IP under WSL2",permalink:"/ethereal-engine-docs/docs/installation/running_on_static_IP"},next:{title:"Old Docker Instructions",permalink:"/ethereal-engine-docs/docs/installation/docker"}},s={},c=[{value:"Browser Debug",id:"browser-debug",level:3},{value:"Invalid Certificate errors in local environment",id:"invalid-certificate-errors-in-local-environment",level:3},{value:"Allow instanceserver address connection via installing local Certificate Authority",id:"allow-instanceserver-address-connection-via-installing-local-certificate-authority",level:3},{value:"Allow local file http-server connection with invalid certificate",id:"allow-local-file-http-server-connection-with-invalid-certificate",level:3},{value:"Allow instanceserver address connection with invalid certificate",id:"allow-instanceserver-address-connection-with-invalid-certificate",level:3},{value:"AccessDenied connecting to mariadb",id:"accessdenied-connecting-to-mariadb",level:3},{value:"Error: listen EADDRINUSE :::3030",id:"error-listen-eaddrinuse-3030",level:3},{value:"&#39;CORS error&#39; in terminal",id:"cors-error-in-terminal",level:3},{value:"Default blank screen",id:"default-blank-screen",level:3},{value:"Instanceserver or resource loading error?",id:"instanceserver-or-resource-loading-error",level:3},{value:"Hang on spinner page?",id:"hang-on-spinner-page",level:3},{value:"To login as admin",id:"to-login-as-admin",level:3},{value:"To install a new package for editor react components in monorepo",id:"to-install-a-new-package-for-editor-react-components-in-monorepo",level:3},{value:"To repopulate database",id:"to-repopulate-database",level:3},{value:"DB not seeding routes (E.g. Error: No project installed- please contact site admin)",id:"db-not-seeding-routes-eg-error-no-project-installed--please-contact-site-admin",level:3},{value:"&#39;TypeError: Cannot read property &#39;position&#39; of undefined&#39; when accessing /location/home",id:"typeerror-cannot-read-property-position-of-undefined-when-accessing-locationhome",level:3},{value:"Weird issues with your database?",id:"weird-issues-with-your-database",level:3}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"browser-debug"},"Browser Debug"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"p key")," debug colliders view"),(0,i.kt)("h3",{id:"invalid-certificate-errors-in-local-environment"},"Invalid Certificate errors in local environment"),(0,i.kt)("p",null,"As of this writing, the cert provided in the ethereal engine package for local use\nis not adequately signed. Browsers will throw up warnings about going to insecure pages.\nYou should be able to tell the browser to ignore it, usually by clicking on some sort\nof 'advanced options' button or link and then something along the lines of 'go there anyway'."),(0,i.kt)("p",null,"Chrome sometimes does not show a clickable option on the warning. If so, just\ntype ",(0,i.kt)("inlineCode",{parentName:"p"},"badidea")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"thisisunsafe")," when on that page. You don't enter that into the\naddress bar or into a text box, Chrome is just passively listening for those commands."),(0,i.kt)("h3",{id:"allow-instanceserver-address-connection-via-installing-local-certificate-authority"},"Allow instanceserver address connection via installing local Certificate Authority"),(0,i.kt)("p",null,"For more detailed instructions check: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/mkcert"},"https://github.com/FiloSottile/mkcert")),(0,i.kt)("p",null,"Short version (common for development process on Ubuntu):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Execute ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install libnss3-tools")),(0,i.kt)("li",{parentName:"ol"},"Execute ",(0,i.kt)("inlineCode",{parentName:"li"},"brew install mkcert")," (if you don't have brew, check it's page: ",(0,i.kt)("a",{parentName:"li",href:"https://brew.sh/"},"https://brew.sh/"),")"),(0,i.kt)("li",{parentName:"ol"},"Execute ",(0,i.kt)("inlineCode",{parentName:"li"},"mkcert --install")),(0,i.kt)("li",{parentName:"ol"},"Mavigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"./certs")," folder"),(0,i.kt)("li",{parentName:"ol"},"Execute ",(0,i.kt)("inlineCode",{parentName:"li"},"mkcert -key-file key.pem -cert-file cert.pem localhost 127.0.0.1 ::1"))),(0,i.kt)("h3",{id:"allow-local-file-http-server-connection-with-invalid-certificate"},"Allow local file http-server connection with invalid certificate"),(0,i.kt)("p",null,"Open the developer tools in your browser by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+i")," at the\nsame time. Go to the 'Console' tab and look at the message history. If there are\nred errors that say something like\n",(0,i.kt)("inlineCode",{parentName:"p"},"GET https://127.0.0.1:3030/socket.io/?EIO=3&transport=polling&t=NXlZLTa net::ERR_CERT_AUTHORITY_INVALID"),",\nthen right-click that URL, then select 'Open in new tab', and accept the invalid certificate."),(0,i.kt)("h3",{id:"allow-instanceserver-address-connection-with-invalid-certificate"},"Allow instanceserver address connection with invalid certificate"),(0,i.kt)("p",null,"The instanceserver functionality is hosted on an address other than 127.0.0.1 in the local\nenvironment. Accepting an invalid certificate for 127.0.0.1 will not apply to this address.\nOpen the dev console for Chrome/Firefox by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+i")," simultaneously, and\ngo to the Console or Network tabs. "),(0,i.kt)("p",null,"If you see errors about not being able to connect to\nsomething like ",(0,i.kt)("inlineCode",{parentName:"p"},"https://192.168.0.81:3031/socket.io/?location=<foobar>"),", right click on\nthat URL and open it in a new tab. You should again get a warning page about an invalid\ncertificate, and you again need to allow it.  "),(0,i.kt)("h3",{id:"accessdenied-connecting-to-mariadb"},"AccessDenied connecting to mariadb"),(0,i.kt)("p",null,"Make sure you don't have another instance of mariadb running on port 3306"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lsof -i :3306\n")),(0,i.kt)("p",null,"On Linux, you can also check if any processes are running on port 3306 with\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo netstat -utlp | grep 3306"),"\nThe last column should look like ",(0,i.kt)("inlineCode",{parentName:"p"},"<ID>/<something"),"\nYou can kill any running process with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo kill <ID>")),(0,i.kt)("h3",{id:"error-listen-eaddrinuse-3030"},"Error: listen EADDRINUSE :::3030"),(0,i.kt)("p",null,"Check which process is using port 3030 and kill"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"killall -9 node \n")),(0,i.kt)("p",null,"Or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lsof -i :3030\nkill -3 <proccessIDfromPreviousCommand>\n")),(0,i.kt)("h3",{id:"cors-error-in-terminal"},"'CORS error' in terminal"),(0,i.kt)("p",null,"Try accessing the page using ",(0,i.kt)("inlineCode",{parentName:"p"},"https://localhost:3000"),"\ninstead of ",(0,i.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:3000")),(0,i.kt)("h3",{id:"default-blank-screen"},"Default blank screen"),(0,i.kt)("p",null,"Try typing ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cthisisunsafe\u201d")," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"iknowwhatiamdoing"')," then reload page"),(0,i.kt)("h3",{id:"instanceserver-or-resource-loading-error"},"Instanceserver or resource loading error?"),(0,i.kt)("p",null,"Open dev console, click on the GET link in new tab and  accept certificate by\ntyping ",(0,i.kt)("inlineCode",{parentName:"p"},"thisisunsafe\u201d")," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"iknowwhatiamdoing"')," then reload original page"),(0,i.kt)("h3",{id:"hang-on-spinner-page"},"Hang on spinner page?"),(0,i.kt)("p",null,"Try typing the following in terminal, in the /packages/server directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run dev-reinit-db\n")),(0,i.kt)("h3",{id:"to-login-as-admin"},"To login as admin"),(0,i.kt)("p",null,"In chrome dev tool write ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," This will display your user id. Copy this\nuser Id as string, run it as following command in shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run make-user-admin -- --id={COPIED_USER_ID}\n")),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run make-user-admin -- --id=c06b0210-453e-21ws-afc3-c97a57eeb1ac\n")),(0,i.kt)("h3",{id:"to-install-a-new-package-for-editor-react-components-in-monorepo"},"To install a new package for editor react components in monorepo"),(0,i.kt)("p",null,"Type in terminal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," npm i <packagename> -w @xrengine/editor\n")),(0,i.kt)("h3",{id:"to-repopulate-database"},"To repopulate database"),(0,i.kt)("p",null,"   Kill the server first then type in terminal "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd packages/server && npm run dev-reinit-db\n")),(0,i.kt)("h3",{id:"db-not-seeding-routes-eg-error-no-project-installed--please-contact-site-admin"},"DB not seeding routes (E.g. Error: No project installed- please contact site admin)"),(0,i.kt)("p",null,"Try"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run dev-reinit \n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker container stop xrengine_db\ndocker container rm xrengine_db\ndocker container prune\nnpm run dev-docker\nnpm run dev-reinit\n")),(0,i.kt)("h3",{id:"typeerror-cannot-read-property-position-of-undefined-when-accessing-locationhome"},"'TypeError: Cannot read property 'position' of undefined' when accessing /location/home"),(0,i.kt)("p",null,"As of this writing, there's a bug with the default seeded test location.\nGo to /editor/projects and open the 'Test' project. Save the project, and\nthe error should go away."),(0,i.kt)("h3",{id:"weird-issues-with-your-database"},"Weird issues with your database?"),(0,i.kt)("p",null,"Try"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run dev-reinit\n")),(0,i.kt)("p",null,"Or if on windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run dev-reinit-windows\n")))}p.isMDXComponent=!0}}]);