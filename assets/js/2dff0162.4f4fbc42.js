(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[4315],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(9756),a=n(7294),i=n(3727),o=n(3919),u=n(412),l=(0,a.createContext)({collectLink:function(){}}),c=n(4996),s=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f,d=e.isNavLink,p=e.to,m=e.href,v=e.activeClassName,k=e.isActive,b=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,N=void 0===g||g,h=(0,r.Z)(e,s),y=(0,c.C)().withBaseUrl,O=(0,a.useContext)(l),w=p||m,C=(0,o.Z)(w),U=null==w?void 0:w.replace("pathname://",""),x=void 0!==U?(n=U,N&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,j=(0,a.useRef)(!1),D=d?i.OL:i.rU,E=u.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!E&&C&&null!=x&&window.docusaurus.prefetch(x),function(){E&&f&&f.disconnect()}}),[x,E,C]);var P=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,R=!x||!C||P;return x&&C&&!P&&!b&&O.collectLink(x),R?a.createElement("a",Object.assign({href:x},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},h)):a.createElement(D,Object.assign({},h,{onMouseEnter:function(){j.current||null==x||(window.docusaurus.preload(x),j.current=!0)},innerRef:function(e){var t,n;E&&e&&C&&(t=e,n=function(){null!=x&&window.docusaurus.prefetch(x)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:x||""},d&&{isActive:k,activeClassName:v}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,u=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(u)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},658:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(4996),n(6742),["components"]),u={id:"round",title:"ROUND"},l={unversionedId:"references/formulas/round",id:"references/formulas/round",isDocsHomePage:!1,title:"ROUND",description:"The ROUND function rounds a number to a specified number of digits.",source:"@site/docs/references/formulas/round.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/round",permalink:"/inforiverdocs/references/formulas/round",version:"current",frontMatter:{id:"round",title:"ROUND"},sidebar:"functionSideBar",previous:{title:"LOG",permalink:"/inforiverdocs/references/formulas/log"},next:{title:"CEILING",permalink:"/inforiverdocs/references/formulas/ceiling"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUND")," function rounds a number to a specified number of digits."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"ROUND(number,num_digits)\n")),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"number"),": Required. The number or cell reference that you want to round."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"num_digits"),": Required. The number of digits to which you want to round the number argument.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"To round of the values in 'COLUMN1' up to the specified decimal places:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"COLUMN1"),(0,i.kt)("th",{parentName:"tr",align:null},"Formula"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"78.17"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ROUND(COLUMN1, 2)")),(0,i.kt)("td",{parentName:"tr",align:null},"78.2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-2183.65"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ROUND(COLUMN1, 1)")),(0,i.kt)("td",{parentName:"tr",align:null},"-2183.7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.98"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ROUND(1.98,-1)")),(0,i.kt)("td",{parentName:"tr",align:null},"0")))))}f.isMDXComponent=!0}}]);