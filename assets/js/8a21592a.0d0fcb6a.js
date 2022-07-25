"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[77461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={id:"input_functions_normalizeWheel",title:"Module: input/functions/normalizeWheel",sidebar_label:"input/functions/normalizeWheel",sidebar_position:0,custom_edit_url:null},r=void 0,o={unversionedId:"Api/engine/modules/input_functions_normalizeWheel",id:"Api/engine/modules/input_functions_normalizeWheel",title:"Module: input/functions/normalizeWheel",description:"Functions",source:"@site/docs/Api/engine/modules/input_functions_normalizeWheel.md",sourceDirName:"Api/engine/modules",slug:"/Api/engine/modules/input_functions_normalizeWheel",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/input_functions_normalizeWheel",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"input_functions_normalizeWheel",title:"Module: input/functions/normalizeWheel",sidebar_label:"input/functions/normalizeWheel",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"input/functions/loadOrbitControl",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/input_functions_loadOrbitControl"},next:{title:"input/interfaces/InputRelationship",permalink:"/ethereal-engine-docs/docs/Api/engine/modules/input_interfaces_InputRelationship"}},s={},p=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"default"},"default"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"default"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"event"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")),(0,l.kt)("p",null,"Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is\ncomplicated, thus this doc is long and (hopefully) detailed enough to answer\nyour questions."),(0,l.kt)("p",null,"If you need to react to the mouse wheel in a predictable way, this code is\nlike your bestest friend. ",(0,l.kt)("em",{parentName:"p"}," hugs ")),(0,l.kt)("p",null,"As of today, there are 4 DOM event types you can listen to:"),(0,l.kt)("p",null,"  'wheel'                -- Chrome(31+), FF(17+), IE(9+)\n'mousewheel'           -- Chrome, IE(6+), Opera, Safari\n'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!\n'DOMMouseScroll'       -- FF(0.9.7+) since 2003"),(0,l.kt)("p",null,"So what to do?  The is the best:"),(0,l.kt)("p",null,"  normalizeWheel.getEventType();"),(0,l.kt)("p",null,"In your event callback, use this code to get sane interpretation of the\ndeltas.  This code will return an object with properties:"),(0,l.kt)("p",null,'  spinX   -- normalized spin speed (use for zoom) - x plane\nspinY   -- " - y plane\npixelX  -- normalized distance (to pixels) - x plane\npixelY  -- " - y plane'),(0,l.kt)("p",null,"Wheel values are provided by the browser assuming you are using the wheel to\nscroll a web page by a number of lines or pixels (or pages).  Values can vary\nsignificantly on different platforms and browsers, forgetting that you can\nscroll at different speeds.  Some devices (like trackpads) emit more events\nat smaller increments with fine granularity, and some emit massive jumps with\nlinear speed or acceleration."),(0,l.kt)("p",null,"This code does its best to normalize the deltas for you:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"spin is trying to normalize how far the wheel was spun (or trackpad\ndragged).  This is super useful for zoom support where you want to\nthrow away the chunky scroll steps on the PC and make those equal to\nthe slow and smooth tiny steps on the Mac. Key data: This code tries to\nresolve a single slow step on a wheel to 1.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"pixel is normalizing the desired scroll delta in pixel units.  You'll\nget the crazy differences between browsers, but at least it'll be in\npixels!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This\nshould translate to positive value zooming IN, negative zooming OUT.\nThis matches the newer 'wheel' event."))),(0,l.kt)("p",null,"Why are there spinX, spinY (or pixels)?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn\nwith a mouse.  It results in side-scrolling in the browser by default.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"spinY is what you expect -- it's the classic axis of a mouse wheel.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and\nprobably is by browsers in conjunction with fancy 3D controllers .. but\nyou know."))),(0,l.kt)("p",null,"Implementation info:"),(0,l.kt)("p",null,"Examples of 'wheel' event if you scroll slowly (down) by one step with an\naverage mouse:"),(0,l.kt)("p",null,"  OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)\nOS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)\nOS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)\nWin8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)\nWin8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)"),(0,l.kt)("p",null,"On the trackpad:"),(0,l.kt)("p",null,"  OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)\nOS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)"),(0,l.kt)("p",null,"On other/older browsers.. it's more complicated as there can be multiple and\nalso missing delta values."),(0,l.kt)("p",null,"The 'wheel' event is more standard:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents"},"http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents")),(0,l.kt)("p",null,"The basics is that it includes a unit, deltaMode (pixels, lines, pages), and\ndeltaX, deltaY and deltaZ.  Some browsers provide other values to maintain\nbackward compatibility with older events.  Those other values help us\nbetter normalize spin speed.  Example of what the browsers provide:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"                     | event.wheelDelta | event.detail\n   ------------------+------------------+--------------\n     Safari v5/OS X  |       -120       |       0\n     Safari v5/Win7  |       -120       |       0\n    Chrome v17/OS X  |       -120       |       0\n    Chrome v17/Win7  |       -120       |       0\n           IE9/Win7  |       -120       |   undefined\n    Firefox v4/OS X  |     undefined    |       1\n    Firefox v4/Win7  |     undefined    |       3\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"event")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any"))))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Object")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pixelX")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pixelY")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"spinX")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"spinY")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number"))))),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/45d647e/packages/engine/src/input/functions/normalizeWheel.ts#L119"},"packages/engine/src/input/functions/normalizeWheel.ts:119")))}d.isMDXComponent=!0}}]);