"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[44633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={},r="Projects",l={unversionedId:"concepts/projects_api",id:"concepts/projects_api",title:"Projects",description:"Projects are folders that contain all your custom code, assets and scenes. They",source:"@site/docs/3_concepts/1_projects_api.md",sourceDirName:"3_concepts",slug:"/concepts/projects_api",permalink:"/ethereal-engine-docs/docs/concepts/projects_api",draft:!1,editUrl:"https://github.com/XRFoundation/ethereal-engine-docs/docs/3_concepts/1_projects_api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/ethereal-engine-docs/docs/concepts/"},next:{title:"Editor & Locations",permalink:"/ethereal-engine-docs/docs/concepts/editor_scenes_locations"}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Local Install Flow",id:"local-install-flow",level:2},{value:"Graphical Install Flow",id:"graphical-install-flow",level:2},{value:"Config",id:"config",level:2},{value:"Hooks",id:"hooks",level:3},{value:"Thumbnail",id:"thumbnail",level:3},{value:"Routes",id:"routes",level:3},{value:"Webapp Injection",id:"webapp-injection",level:3},{value:"World Injection",id:"world-injection",level:3},{value:"Services",id:"services",level:3},{value:"Database Seeding",id:"database-seeding",level:3},{value:"i18n",id:"i18n",level:3}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"projects"},"Projects"),(0,a.kt)("p",null,"Projects are folders that contain all your custom code, assets and scenes. They\nare version controlled using git & github, and can be installed to any deployment\nwith a single click. (more on that in the ",(0,a.kt)("a",{parentName:"p",href:"/ethereal-engine-docs/docs/concepts/editor_scenes_locations"},"next chapter"),")"),(0,a.kt)("p",null,"Pictured below is an example of 4 projects installed. By default, only the\n",(0,a.kt)("inlineCode",{parentName:"p"},"default-project")," is installed, which in a production environment is read only.\nYou can find the default project under ",(0,a.kt)("inlineCode",{parentName:"p"},"/packages/projects/default-project/")),(0,a.kt)("p",null,"In a production environment, the builder process will install all projects\naccording to the ",(0,a.kt)("inlineCode",{parentName:"p"},"project")," database table and will download files from the\nstorage provider. In a local development environment, the local file system is\nalways the source of truth. Any project folders added or removed from the file\nsystem will be automatically added or removed from the database. This is to\nensure there is no accidental loss of data, as these project folders are all git\nrepositories."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8877).Z,width:"174",height:"277"})),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Projects have a few conventions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"assets/")," is where files uploaded from the editor will be uploaded to")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"public/")," is for hosting public assets, these will be served from the client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"sceneName.scene.json")," is a scene file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"sceneName.thumbnail.png")," is an auto-generated scene thumbnail file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"xrengine.config.ts")," the project configuration, where client routes, database\nmodels, feathers services and the project thumbnail can be defined"))),(0,a.kt)("p",null,"A project can also have a package.json to provide custom dependencies.\n",(0,a.kt)("inlineCode",{parentName:"p"},"@xrengine/*")," monorepo dependencies will be symlinked and not needed, but some\npackage managers (such as pnpm) require these to be defined. If so, they should\nbe defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"peerDependencies"),"."),(0,a.kt)("h2",{id:"local-install-flow"},"Local Install Flow"),(0,a.kt)("p",null,"To install a project locally, clone the repository you wish to install to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"/packages/projects/projects/")," folder. You can do this with the follow commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd packages/projects/projects/\ngit clone https://github.com/myorg/myrepo\ncd myrepo \ncode .\n")),(0,a.kt)("p",null,"This will create a folder name ",(0,a.kt)("inlineCode",{parentName:"p"},"myrepo")," which must contain an ",(0,a.kt)("inlineCode",{parentName:"p"},"xrengine.config.ts"),"\nfile, and open the project in a new vscode window (such that git commands can be\nhandled by the new window). All you need to do now to run this project is re-run\nthe stack (with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),")."),(0,a.kt)("h2",{id:"graphical-install-flow"},"Graphical Install Flow"),(0,a.kt)("p",null,"Projects can also be installed and managed from the /admin/projects route. Click\nthe 'Add Project' "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(37322).Z,width:"960",height:"490"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(92378).Z,width:"960",height:"490"})),(0,a.kt)("p",null,"In local development, the 'Remove Project' button has been disabled, as to\nensure no accidental loss of data."),(0,a.kt)("p",null,"This runs ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone")," in the background, same as above, but will then upload all\nof the repository's files to the storage provider. These files will then be\ndownloaded and installed to the local file system each time the docker builder\npod runs. This allows full version controlled access for local development flow\nand version locking for production deployment."),(0,a.kt)("p",null,"The update button will re-download the git repository to install the latest\nversion of the project."),(0,a.kt)("p",null,"The remove button will remove the folder containing that project. WARNING: Any\nuncommitted & unpushed files will be lost."),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("p",null,"The ethereal engine config file has the following options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ProjectConfigInterface {\n  onEvent?: string\n  thumbnail?: string\n  routes?: {\n    [route: string]: {\n      component: () => Promise<{ default: (props: any) => JSX.Element }>\n      props?: {\n        [x: string]: any\n        exact?: boolean\n      }\n    }\n  }\n  webappInjection?: () => Promise<{ default: (props: any) => void | JSX.Element }>\n  worldInjection?: () => Promise<{ default: (world: World) => Promise<void> }>\n  services?: string\n  databaseSeed?: string\n  settings?: Array<ProjectSettingSchema>\n}\n")),(0,a.kt)("h3",{id:"hooks"},"Hooks"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onEvent")," property is a relative path string that points to a file which\nmust expose an object with properties as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ProjectEventHooks {\n  onInstall?: (app: Application) => Promise<any>\n  onUpdate?: (app: Application) => Promise<any>\n  onUninstall?: (app: Application) => Promise<any>\n}\n")),(0,a.kt)("p",null,"These functions are called when the project they belong to are installed,\nupdated (such as scenes saved) or uninstalled respectively. This is used in the\ndefault ethereal engine project to install the default avatars.\nSee ",(0,a.kt)("inlineCode",{parentName:"p"},"/packages/projects/default-project/projectEventHooks.ts"),"."),(0,a.kt)("h3",{id:"thumbnail"},"Thumbnail"),(0,a.kt)("p",null,"This is a URL to a thumbnail for the project."),(0,a.kt)("h3",{id:"routes"},"Routes"),(0,a.kt)("p",null,"Routes enable users to customise the various URL paths of their website\nutilising dynamic loading of modules. The key of each object represents the path\n(with leading forward slash included) while the value represents a react\ncomponent object which gets wrapped in ",(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy()")," and a props object which\npasses options into the react-dom-router Route component corresponding to the route."),(0,a.kt)("h3",{id:"webapp-injection"},"Webapp Injection"),(0,a.kt)("p",null,"Webapp injection allows logic to be run on all pages, loaded before any routes\nare loaded. This will soon be extended to allow easy stylesheet injection and\nother configurables of the webapp."),(0,a.kt)("h3",{id:"world-injection"},"World Injection"),(0,a.kt)("p",null,"World injection allows logic to be run every time a new world is created,\ncurrently only when the engine is initialised. This is loaded on all instances\nof the engine, such as a location and the editor. An example use case of this\nwould be registering custom scene loader and editor prefabs."),(0,a.kt)("h3",{id:"services"},"Services"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," property is a relative path that points to a file which must\nreturn type ",(0,a.kt)("inlineCode",{parentName:"p"},"((app: Application) => Promise<any>)[]")," which is run on all\ninstanceservers and api servers at startup. This allows users to expose custom\nFeathers services, or whatever other functionality they made need."),(0,a.kt)("h3",{id:"database-seeding"},"Database Seeding"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"databaseSeed")," property is a relative path that points to a file which must\nreturn type ",(0,a.kt)("inlineCode",{parentName:"p"},"ServicesSeedConfig")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"../packages/common/src/interfaces/ServicesSeedConfig.ts"),"\nwhich is run when the database seeder is run. This can be useful for setting\ncustom locations, which can be seen in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/demo-xrengine-project"},"Ethereal Engine demo project"),"."),(0,a.kt)("h3",{id:"i18n"},"i18n"),(0,a.kt)("p",null,"Internationalization can be added using the pattern ",(0,a.kt)("inlineCode",{parentName:"p"},"./i18n/<language>/<namespace>.json"),". An example of the format can be found in ",(0,a.kt)("a",{parentName:"p",href:"../../../packages/client-core/i18n/"},"the base i18n files"),"."))}d.isMDXComponent=!0},37322:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/projects-admin-install-new-3ee297fdc35bc6eb13dc770ffb07abb5.png"},92378:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/projects-admin-1c3efc23814edd4ae5d543251e84bb80.png"},8877:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/projects-folder-4865f639203f0b2dd7c83530e1ac7a41.png"}}]);