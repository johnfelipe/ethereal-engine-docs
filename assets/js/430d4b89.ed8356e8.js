"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[80120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={},o="Cluster Management",l={unversionedId:"devops_deployment/managing_remote_kubernetes",id:"devops_deployment/managing_remote_kubernetes",title:"Cluster Management",description:"Kubernetes Web UI (Dashboard)",source:"@site/docs/2_devops_deployment/4_managing_remote_kubernetes.md",sourceDirName:"2_devops_deployment",slug:"/devops_deployment/managing_remote_kubernetes",permalink:"/docs/docs/devops_deployment/managing_remote_kubernetes",draft:!1,editUrl:"https://github.com/XRFoundation/ethereal-engine-docs/docs/2_devops_deployment/4_managing_remote_kubernetes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database Migrations",permalink:"/docs/docs/devops_deployment/feathers_sequelize"},next:{title:"Release Helm Chart",permalink:"/docs/docs/devops_deployment/release_helm_chart"}},i={},c=[{value:"Kubernetes Web UI (Dashboard)",id:"kubernetes-web-ui-dashboard",level:2},{value:"Install Lens",id:"install-lens",level:2},{value:"AWS",id:"aws",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cluster-management"},"Cluster Management"),(0,s.kt)("h2",{id:"kubernetes-web-ui-dashboard"},"Kubernetes Web UI (Dashboard)"),(0,s.kt)("p",null,"Dashboard is a web-based Kubernetes user interface. You can use Dashboard to deploy containerized applications to a Kubernetes cluster, troubleshoot your containerized application, and manage the cluster resources."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/")),(0,s.kt)("h2",{id:"install-lens"},"Install Lens"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"sudo snap install kontena-lens --classic")),(0,s.kt)("p",null,"Add the K8 cluster using kubectl\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.k8slens.dev/v4.1.4/clusters/adding-clusters/"},"https://docs.k8slens.dev/v4.1.4/clusters/adding-clusters/")),(0,s.kt)("p",null,"Add kubernetes lens prometheus support if not already installed\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.k8slens.dev/v4.1.4/extensions/usage/"},"https://docs.k8slens.dev/v4.1.4/extensions/usage/")),(0,s.kt)("h4",{id:"aws"},"AWS"),(0,s.kt)("p",null,"AWS credentials with EKS and Cluster permissions required"))}p.isMDXComponent=!0}}]);