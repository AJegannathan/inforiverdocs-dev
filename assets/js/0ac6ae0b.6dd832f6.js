"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[4198],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||o;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},36742:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(67294),a=t(76),o=t(13919),i=t(10412);const l=(0,n.createContext)({collectLink:()=>{}});var u=t(44996);const s=function(e){let{isNavLink:r,to:t,href:s,activeClassName:c,isActive:f,"data-noBrokenLinkCheck":p,autoAddBaseUrl:m=!0,...d}=e;var v;const{withBaseUrl:h}=(0,u.C)(),y=(0,n.useContext)(l),b=t||s,g=(0,o.Z)(b),k=null==b?void 0:b.replace("pathname://",""),O=void 0!==k?(w=k,m&&(e=>e.startsWith("/"))(w)?h(w):w):void 0;var w;const N=(0,n.useRef)(!1),x=r?a.OL:a.rU,j=i.Z.canUseIntersectionObserver;let A;(0,n.useEffect)((()=>(!j&&g&&null!=O&&window.docusaurus.prefetch(O),()=>{j&&A&&A.disconnect()})),[O,j,g]);const C=null!==(v=null==O?void 0:O.startsWith("#"))&&void 0!==v&&v,P=!O||!g||C;return O&&g&&!C&&!p&&y.collectLink(O),P?n.createElement("a",Object.assign({href:O},b&&!g&&{target:"_blank",rel:"noopener noreferrer"},d)):n.createElement(x,Object.assign({},d,{onMouseEnter:()=>{N.current||null==O||(window.docusaurus.preload(O),N.current=!0)},innerRef:e=>{var r,t;j&&e&&g&&(r=e,t=()=>{null!=O&&window.docusaurus.prefetch(O)},A=new window.IntersectionObserver((e=>{e.forEach((e=>{r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(r),A.disconnect(),t())}))})),A.observe(r))},to:O||""},r&&{isActive:f,activeClassName:c}))}},13919:(e,r,t)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}t.d(r,{Z:()=>a,b:()=>n})},44996:(e,r,t)=>{t.d(r,{C:()=>o,Z:()=>i});var n=t(52263),a=t(13919);function o(){const{siteConfig:{baseUrl:e="/",url:r}={}}=(0,n.default)();return{withBaseUrl:(t,n)=>function(e,r,t,n){let{forcePrependBaseUrl:o=!1,absolute:i=!1}=void 0===n?{}:n;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(o)return r+t;const l=t.startsWith(r)?t:r+t.replace(/^\//,"");return i?e+l:l}(r,e,t,n)}}function i(e,r){void 0===r&&(r={});const{withBaseUrl:t}=o();return t(e,r)}},15487:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));t(44996),t(36742);const o={id:"ifna",title:"IFNA"},i={unversionedId:"references/formulas/ifna",id:"references/formulas/ifna",isDocsHomePage:!1,title:"IFNA",description:"The IFNA function returns the value you specify if a formula returns the #N/A error value; otherwise it returns the result of the formula.",source:"@site/docs/references/formulas/ifna.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/ifna",permalink:"/references/formulas/ifna",version:"current",frontMatter:{id:"ifna",title:"IFNA"},sidebar:"functionSideBar",previous:{title:"ISNUMBER",permalink:"/references/formulas/isnumber"},next:{title:"IN",permalink:"/references/formulas/in"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],u={toc:l};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IFNA")," function returns the value you specify if a formula returns the #N/A error value; otherwise it returns the result of the formula."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"IFNA(value, value_if_na)\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value"),": The argument that is checked for the #N/A error value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value_if_na"),": The value to return if the formula evaluates to the #N/A error value.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Returns the result of the calculation ",(0,a.kt)("inlineCode",{parentName:"p"},"(AC-PY)/PY")," if the value is a number else in case of an error it returns 0."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"IFNA((AC-PY)/PY, 0)\n")))}s.isMDXComponent=!0}}]);