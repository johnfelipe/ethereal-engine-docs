"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="Database Migrations",l={unversionedId:"devops_deployment/feathers_sequelize",id:"devops_deployment/feathers_sequelize",title:"Database Migrations",description:"Migrations",source:"@site/docs/2_devops_deployment/3_feathers_sequelize.md",sourceDirName:"2_devops_deployment",slug:"/devops_deployment/feathers_sequelize",permalink:"/Ethereal-Engine-Docs/docs/devops_deployment/feathers_sequelize",draft:!1,editUrl:"https://github.com/XRFoundation/Ethereal-Engine-Docs/docs/2_devops_deployment/3_feathers_sequelize.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ethereal Engine on AWS",permalink:"/Ethereal-Engine-Docs/docs/devops_deployment/AWS_setup"},next:{title:"Cluster Management",permalink:"/Ethereal-Engine-Docs/docs/devops_deployment/managing_remote_kubernetes"}},s={},p=[{value:"Migrations",id:"migrations",level:2},{value:"Generate Migration file",id:"generate-migration-file",level:3},{value:"Migrate the database",id:"migrate-the-database",level:3},{value:"For more information",id:"for-more-information",level:3},{value:"OpenAPI",id:"openapi",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-migrations"},"Database Migrations"),(0,o.kt)("h2",{id:"migrations"},"Migrations"),(0,o.kt)("h3",{id:"generate-migration-file"},"Generate Migration file"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'node_modules/.bin/sequelize migration:generate --name "migration_name"')),(0,o.kt)("h3",{id:"migrate-the-database"},"Migrate the database"),(0,o.kt)("p",null,"Before run the server, you should migrate the db.\nTo do this, please run as following.\n",(0,o.kt)("inlineCode",{parentName:"p"},"npm run compile"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/.bin/sequelize db:migrate")),(0,o.kt)("h3",{id:"for-more-information"},"For more information"),(0,o.kt)("p",null,"For more information, please visit here\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/douglas-treadwell/sequelize-cli-typescript"},"https://github.com/douglas-treadwell/sequelize-cli-typescript")),(0,o.kt)("h2",{id:"openapi"},"OpenAPI"),(0,o.kt)("p",null,"Our server is set up with Swagger documentation to automatically generate from most endpoints. A few custom routes are not documented at this time, but most of the basic stuff is."),(0,o.kt)("p",null,"You can see the docs for a running Ethereal Engine instance locally at:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://localhost:3030/openapi\n")),(0,o.kt)("p",null,"Or on our ",(0,o.kt)("a",{parentName:"p",href:"https://api-dev.theoverlay.io/openapi"},"dev cluster")))}c.isMDXComponent=!0}}]);