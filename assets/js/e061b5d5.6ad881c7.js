"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[90429],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},91139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const o={},i="Advanced Setup",s={unversionedId:"installation/advanced_setup",id:"installation/advanced_setup",title:"Advanced Setup",description:"If you want to setup Ethereal Engine docker instances, client, server, and/or",source:"@site/docs/1_installation/4_advanced_setup.md",sourceDirName:"1_installation",slug:"/installation/advanced_setup",permalink:"/docs/docs/installation/advanced_setup",draft:!1,editUrl:"https://github.com/XRFoundation/ethereal-engine-docs/docs/1_installation/4_advanced_setup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing on Windows 10+",permalink:"/docs/docs/installation/windows"},next:{title:"Running on Static IP under WSL2",permalink:"/docs/docs/installation/running_on_static_IP"}},l={},d=[{value:"1.  Install your dependencies",id:"1--install-your-dependencies",level:3},{value:"2. Make sure you have a mysql database installed and running -- our recommendation is Mariadb.",id:"2-make-sure-you-have-a-mysql-database-installed-and-running----our-recommendation-is-mariadb",level:3},{value:"3. Open a new tab and start the Agones sidecar in local mode",id:"3-open-a-new-tab-and-start-the-agones-sidecar-in-local-mode",level:3},{value:"4. Start the server in database seed mode",id:"4-start-the-server-in-database-seed-mode",level:3},{value:"5. Local file server configuration",id:"5-local-file-server-configuration",level:3},{value:"6. Open two/three separate tabs and start the API server, instanceserver and client",id:"6-open-twothree-separate-tabs-and-start-the-api-server-instanceserver-and-client",level:3},{value:"7. In a browser, navigate to https://127.0.0.1:3000/location/default",id:"7-in-a-browser-navigate-to-https1270013000locationdefault",level:3}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-setup"},"Advanced Setup"),(0,r.kt)("p",null,"If you want to setup Ethereal Engine docker instances, client, server, and/or\ninstance-server manually, follow these directions. The advanced setup is recommended\nfor all users, in order to understand more about everything that going on."),(0,r.kt)("h3",{id:"1--install-your-dependencies"},"1.  Install your dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd path/to/ethereal-engine\nnpm install\nnpm run dev-docker\nnpm run dev-reinit\n")),(0,r.kt)("p",null,"You should not need to use sudo in any case."),(0,r.kt)("p",null,"Error with mediasoup? ",(0,r.kt)("a",{parentName:"p",href:"https://mediasoup.org/documentation/v3/mediasoup/installation/"},"https://mediasoup.org/documentation/v3/mediasoup/installation/")),(0,r.kt)("h3",{id:"2-make-sure-you-have-a-mysql-database-installed-and-running----our-recommendation-is-mariadb"},"2. Make sure you have a mysql database installed and running -- our recommendation is Mariadb."),(0,r.kt)("p",null,"We've provided a docker container for easy setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd scripts && sudo bash start-db.sh\n")),(0,r.kt)("p",null,"This creates a Docker container of mariadb named xrengine_db. You must have\ndocker installed on your machine for this script to work.\nIf you do not have Docker installed and do not wish to install it, you'll have\nto manually create a MariaDB server."),(0,r.kt)("p",null,"The default username is 'server', the default password is 'password', the\ndefault database name is 'xrengine', the default hostname is '127.0.0.1', and\nthe default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"3306"),"."),(0,r.kt)("p",null,"Seeing errors connecting to the local DB? ",(0,r.kt)("strong",{parentName:"p"},"Try shutting off your local firewall.")),(0,r.kt)("h3",{id:"3-open-a-new-tab-and-start-the-agones-sidecar-in-local-mode"},"3. Open a new tab and start the Agones sidecar in local mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd scripts\nsudo bash start-agones.sh\n")),(0,r.kt)("p",null,"You can also go to vendor/agones/ and run"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./sdk-server.linux.amd64 --local")),(0,r.kt)("p",null,"If you are using a Windows machine, run"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sdk-server.windows.amd64.exe --local")),(0,r.kt)("p",null,"and for mac, run"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./sdk-server.darwin.amd64 --local")),(0,r.kt)("h3",{id:"4-start-the-server-in-database-seed-mode"},"4. Start the server in database seed mode"),(0,r.kt)("p",null,"Several tables in the database need to be seeded with default values.\nRun ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev-reinit")," or if on windows ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev-reinit-windows"),"\nAfter several seconds, there should be no more logging.\nSome of the final lines should read like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Server Ready\nExecuting (default): SET FOREIGN_KEY_CHECKS = 1\nServer EXIT\n")),(0,r.kt)("p",null,"At this point, the database has been seeded."),(0,r.kt)("h3",{id:"5-local-file-server-configuration"},"5. Local file server configuration"),(0,r.kt)("p",null,"If the .env.local file you have has the line\n",(0,r.kt)("inlineCode",{parentName:"p"},"STORAGE_PROVIDER=local"),"\nthen the scene editor will save components, models, scenes, etc. locally\n(as opposed to storing them on S3). You will need to start a local server\nto serve these files, and make sure that .env.local has the line\n",(0,r.kt)("inlineCode",{parentName:"p"},'LOCAL_STORAGE_PROVIDER="localhost:8642"'),".\nIn a new tab, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/server")," and run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run serve-local-files"),".\nThis will start up ",(0,r.kt)("inlineCode",{parentName:"p"},"http-server")," to serve files from ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/server/upload"),"\non ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8642"),".\nYou may have to accept the invalid self-signed certificate for it in the browser;\nsee 'Allow local file http-server connection with invalid certificate' below."),(0,r.kt)("h3",{id:"6-open-twothree-separate-tabs-and-start-the-api-server-instanceserver-and-client"},"6. Open two/three separate tabs and start the API server, instanceserver and client"),(0,r.kt)("p",null,"In /packages/server, run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," which will launch the api server, world server, media server and file server.\nIf you are not using instanceservers, you can instead run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev-api-server")," in the api server.\nIn the final tab, go to /packages/client and run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),".\nIf you are on windows you need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev-windows")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),"."),(0,r.kt)("h3",{id:"7-in-a-browser-navigate-to-https1270013000locationdefault"},"7. In a browser, navigate to ",(0,r.kt)("a",{parentName:"h3",href:"https://127.0.0.1:3000/location/default"},"https://127.0.0.1:3000/location/default")),(0,r.kt)("p",null,"The database seeding process creates a default empty location called 'default'.\nIt can be navigated to by going to '",(0,r.kt)("a",{parentName:"p",href:"https://127.0.0.1:3000/location/default'"},"https://127.0.0.1:3000/location/default'"),".\nAs of this writing, the cert provided in the ethereal engine package for local use is\nnot adequately signed. You can create signed certificates and replace the\ndefault ones, but most developers just ignore the warnings. Browsers will throw\nup warnings about going to insecure pages. You should be able to tell the browser\nto ignore it, usually by clicking on some sort of 'advanced options' button or\nlink and then something along the lines of 'go there anyway'."))}u.isMDXComponent=!0}}]);