"use strict";(self.webpackChunk_ethereal_engine_docs=self.webpackChunk_ethereal_engine_docs||[]).push([[26180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={},i="Writing Reasonable & Testable Code",s={unversionedId:"testing/reasonable_code",id:"testing/reasonable_code",title:"Writing Reasonable & Testable Code",description:"Writing tests for code is one thing, but writing testable code is another! Testable code comes from abstracting control flows and operations on data with functions in order to avoid side effects and reduce, or at least have better control over, the mutation of state in your application.",source:"@site/docs/4_testing/2_reasonable_code.md",sourceDirName:"4_testing",slug:"/testing/reasonable_code",permalink:"/docs/docs/testing/reasonable_code",draft:!1,editUrl:"https://github.com/XRFoundation/ethereal-engine-docs/docs/4_testing/2_reasonable_code.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testing Basics",permalink:"/docs/docs/testing/testing_intro"},next:{title:"Writing Good Tests",permalink:"/docs/docs/testing/test_driven_development"}},l={},c=[{value:"Example",id:"example",level:3},{value:"Code Composition / Decomposition",id:"code-composition--decomposition",level:2},{value:"Example",id:"example-1",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"writing-reasonable--testable-code"},"Writing Reasonable & Testable Code"),(0,a.kt)("p",null,"Writing tests for code is one thing, but writing testable code is another! Testable code comes from abstracting control flows and operations on data with functions in order to avoid side effects and reduce, or at least have better control over, the mutation of state in your application."),(0,a.kt)("p",null,"In the functional programming (FP) paradigm, pure functions are functions which do not mutate any existing state of ",(0,a.kt)("em",{parentName:"p"},"any")," scope. Since we are not in a fully functional paradigm, a focus on these qualities of functions can be priceless: stateless functions with ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Referential_transparency"},"referential transparency"),"."),(0,a.kt)("p",null,"Stateless means that the function itself has ",(0,a.kt)("strong",{parentName:"p"},"no memory of the past"),". Referential transparency means that the function is only operating on the parameters, and ",(0,a.kt)("strong",{parentName:"p"},"nothing else")," (no global state access, etc)."),(0,a.kt)("p",null,"These types of functions may (arguably) mutate parameter state, but may only operate on the given parameters. State residing outside of the scope of a stateless function should ",(0,a.kt)("strong",{parentName:"p"},"never be depended on or mutated"),". This will ensure that the function holds no inherent state of its own, and therefor will exhibit the behavior of being referentially transparent and ",(0,a.kt)("strong",{parentName:"p"},"idempotent"),". "),(0,a.kt)("p",null,"Idempotency is a quality of any function which can be executed several times without changing the output for a specific input. Idempotent functions can be thought of as mappings from one input to one output. "),(0,a.kt)("p",null,"All of this combined makes functions extremely simple to reason about, very reusable, and easy to test! Three gulls, one scone."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Here is an example of a function that does not exhibit referential transparency, nor is it stateless:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let y = 3\nconst someFunction = x => {\n  x += y\n  y++\n  return x\n}\n\nsomeFunction(3) // => 6\nsomeFunction(3) // => 7\nsomeFunction(3) // => 8\n")),(0,a.kt)("p",null,"This function is also not idempotent. Same input, different output! Not good for reasonable code, difficult to predict."),(0,a.kt)("p",null,"Written as a stateless, idempotent function with referential transparency:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const someFunction = (data, x) => {\n  x += data.y\n  data.y++\n  return x\n}\n\nsomeFunction({ y: 3 }, 3) // => 6\nsomeFunction({ y: 3 }, 3) // => 6\nsomeFunction({ y: 3 }, 3) // => 6\n")),(0,a.kt)("p",null,"The newly written function now holds no inherent state of its own and does not operate on any data that was not passed into the function as explicit arguments. It is also idempotent: same input, same output! Very reasonable and easy to predict."),(0,a.kt)("h2",{id:"code-composition--decomposition"},"Code Composition / Decomposition"),(0,a.kt)("p",null,"We must now capture the process of decomposing a program into smaller pieces that are more reusable, more reliable, and easier to understand. Then we can combine each individual piece to form an entire program that is easier to reason about as a whole. FP tends to follow this fundamental principle."),(0,a.kt)("p",null,"FP falls under the umbrella of declarative programming paradigms: it expresses a set of operations without revealing how they\u2019re implemented or how data flows through them. Unlike imperative programming, declarative programming separates program description from evaluation. It focuses on the use of expressions to describe what the logic of a program is without necessarily specifying its control flow or state change."),(0,a.kt)("p",null,"These two paradigms can be utilized to form powerful and extremely testable functions and compositions which support a sturdy codebase. Write functions imperatively, then compose them together declaratively!"),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("p",null,"Using the previous unit/integration test examples, lets see what the algorithm would look like if written imperatively:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const algorithm = x => {\n  // first, add two\n  x += 2\n  // then, multiply by three\n  x *= 3\n  // finally, divide by two\n  x /= 2\n  return x\n}\n")),(0,a.kt)("p",null,"Rewritten declaratively, as demostrated before but with a newly introduced ",(0,a.kt)("inlineCode",{parentName:"p"},"pipe")," function (a standard function in FP):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const addTwo = x => x + 2\nconst multThree = x => x * 3\nconst halve = x => x / 2\n\nconst algorithm = pipe(addTwo, multThree, halve)\n\nalgorithm(4) // => 9\n")),(0,a.kt)("p",null,"As you can see, the imperative function has no reusable parts, but the declarative version does! This is a simple example, but in larger-scale functions and systems this simple distinction can be a powerful tool in writing reasonable, testable, and reusable code. Bonus: the code is ",(0,a.kt)("em",{parentName:"p"},"self documenting"),". No need for comments here. Just pure, self-descriptive functions!"))}u.isMDXComponent=!0}}]);