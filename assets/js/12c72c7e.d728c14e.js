(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[5731],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=o(n),g=r,s=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6741:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return o},default:function(){return d}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],u={id:"averageexzero",title:"AVERAGEEXZERO"},p={unversionedId:"references/formulas/averageexzero",id:"references/formulas/averageexzero",isDocsHomePage:!1,title:"AVERAGEEXZERO",description:"The AVERAGEEXZERO function returns the average (arithmetic mean) of its arguments excluding zeros, which can be numbers or node references.",source:"@site/docs/references/formulas/averageexzero.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/averageexzero",permalink:"/inforiverdocs/references/formulas/averageexzero",version:"current",frontMatter:{id:"averageexzero",title:"AVERAGEEXZERO"},sidebar:"functionSideBar",previous:{title:"AVERAGE",permalink:"/inforiverdocs/references/formulas/average"},next:{title:"AVERAGEEXNEG",permalink:"/inforiverdocs/references/formulas/averageexneg"}},o=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],m={toc:o};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"AVERAGEEXZERO")," function returns the average (arithmetic mean) of its arguments excluding zeros, which can be numbers or node references."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"AVERAGEEXZERO (value1,[value2]....)\n")),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"value1")," \u2013 The first cell value or number to be averaged. This is a required argument."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"value2, \u2026"),"  \u2013 The additional cells or numbers to be averaged. These are optional arguments."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Consider sales of a particular product across different regions East, South, Central and West.\nAssume that if the sales for a particular period is zero, and the product was withdrawn from the market and hence that region need not be considered when calculating average sales.  "),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Average Sales")," is then calculated as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"AVERAGEEXZERO (East, South, Central, West)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Region"),(0,l.kt)("th",{parentName:"tr",align:null},"Jan"),(0,l.kt)("th",{parentName:"tr",align:null},"Feb"),(0,l.kt)("th",{parentName:"tr",align:null},"Mar"),(0,l.kt)("th",{parentName:"tr",align:null},"Apr"),(0,l.kt)("th",{parentName:"tr",align:null},"May"),(0,l.kt)("th",{parentName:"tr",align:null},"Jun"),(0,l.kt)("th",{parentName:"tr",align:null},"Jul"),(0,l.kt)("th",{parentName:"tr",align:null},"Aug"),(0,l.kt)("th",{parentName:"tr",align:null},"Sep"),(0,l.kt)("th",{parentName:"tr",align:null},"Oct"),(0,l.kt)("th",{parentName:"tr",align:null},"Nov"),(0,l.kt)("th",{parentName:"tr",align:null},"Dec"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"East"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"120"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"South"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"175")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Central"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"175")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"West"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,"Average Sales")),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"137.5"),(0,l.kt)("td",{parentName:"tr",align:null},"156.25"),(0,l.kt)("td",{parentName:"tr",align:null},"131.25"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"165"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"156.33"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"162.5"),(0,l.kt)("td",{parentName:"tr",align:null},"175")))),(0,l.kt)("h2",{id:"excel-equivalent"},"Excel Equivalent"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.office.com/en-us/article/AVERAGE-function-047BAC88-D466-426C-A32B-8F33EB960CF6"},"AVERAGE")))}d.isMDXComponent=!0}}]);